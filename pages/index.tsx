import {GetStaticProps} from 'next';
import Head from 'next/head'
import SsnList from '../components/ssn-list';
import DatePicker, {DEFAULT_DATE} from "../components/DatePicker";
import {useEffect, useState} from "react";
import {Ssn} from "../components/ssn-list/SsnList";
import styled from "styled-components";
import differenceInYears from 'date-fns/differenceInYears';
import {isBefore} from "date-fns";

const DATE_REGEX = /^(\d{0,4})-(\d{0,2})-(\d{0,2})$/;

const Home = (props: {
    list: []
}) => {
    const [date, setDate] = useState(DEFAULT_DATE);
    const [list, setList] = useState<Ssn[]>(props.list);

    useEffect(() => {
        const fetcher = async () => {
            const match = date.match(DATE_REGEX);
            if (!match) {
                return;
            }
            const dateString = [
                match[1].padStart(4, '0'),
                match[2].padStart(2, '0'),
                match[3].padStart(2, '0')
            ].join('-');

            const d = new Date(dateString)
            if (!(d instanceof Date) || isNaN(d.getTime()) || isBefore(new Date(), d)) {
                return;
            }
            const newList: Ssn[] = await fetch(`/api/ssn/${dateString}`)
                .then(r => r.json())
                .then(res => res)
            if (newList.length > 0) {
                setList(newList);
            }
        }
        fetcher();
    }, [date]);

    const age = differenceInYears(new Date(), new Date(date));

    return (
        <div>
            <Head>
                <title>Fødselsnummer</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.svg"/>
            </Head>

            <Main>
                <h2>Velg en dato</h2>
                <DatePicker
                    onChange={setDate}
                />
                {age > 0 && (
                    <div>
                        Alder: {age} år
                    </div>
                )}
                <SsnList
                    list={list}
                    date={date}
                />
            </Main>
        </div>
    )
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
    const match = DEFAULT_DATE.match(DATE_REGEX);
    if (!match) {
        return {
            props: { list: [] }
        }
    }
    const dateString = [
        match[1].padStart(4, '0'),
        match[2].padStart(2, '0'),
        match[3].padStart(2, '0')
    ].join('-');

    const list: {}[] = await fetch(`${process.env.SERVER_PROTOCOL}://${process.env.SERVER_ROOT}/generate/${dateString}`)
        .then(r => r.json())
        .then(res => res)

    return {
        props: {
            list
        }
    }
}
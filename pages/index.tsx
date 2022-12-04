import {useEffect, useState} from "react";
import {GetStaticProps} from "next";
import {isBefore} from "date-fns";

import FnrList from "../components/fnr-list";
import {DEFAULT_DATE} from "../components/menu/DatePicker";
import {Gender, Ssn} from "../components/fnr-list/Fnr";

const DATE_REGEX = /^(\d{0,4})-(\d{0,2})-(\d{0,2})$/;

interface Props {
    date: string;
    list: Ssn[];
    showGenders: Gender[];
}

export default function Home(props: Props) {
    const {
        date,
        showGenders,
    } = props;

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
            const newList: [] = await fetch(`/api/ssn/${dateString}`)
                .then(r => r.json())
                .then(res => res)
            if (newList.length > 0) {
                setList(newList);
            }
        }
        fetcher();
    }, [date]);

    return (
        <FnrList list={list.filter(ssn => showGenders.includes(ssn.gender))} />
    )
}

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
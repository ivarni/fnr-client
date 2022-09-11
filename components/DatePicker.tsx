import {Calendar} from "react-feather";
import styled from "styled-components";
import React, {useRef, useState} from "react";

const DEFAULT_YEAR = '1980';
const DEFAULT_MONTH = '05';
const DEFAULT_DAY = '09';
export const DEFAULT_DATE = `${DEFAULT_YEAR}-${DEFAULT_MONTH}-${DEFAULT_DAY}`;

const DATE_REGEX = /^(\d{4})-(\d{2})-(\d{2})$/;

const DatePicker = (props: {
    onChange: (value: string) => void
}) => {

    const [value, setValue] = useState(DEFAULT_DATE);
    const [year, setYear] = useState(DEFAULT_YEAR);
    const [month, setMonth] = useState(DEFAULT_MONTH);
    const [day, setDay] = useState(DEFAULT_DAY);

    const onChange: ((e: React.ChangeEvent<HTMLInputElement>) => void) = (e) => {
        setValue(e.currentTarget.value)
        const match = e.currentTarget.value.match(DATE_REGEX);
        if (match !== null) {
            setYear(match[1])
            setMonth(match[2])
            setDay(match[3])
        }

        props.onChange(e.currentTarget.value)
    }

    const updateDay: ((e: React.ChangeEvent<HTMLInputElement>) => void) = (e) => {
        setDay(e.currentTarget.value);
        const match = value.match(DATE_REGEX);
        if (match !== null) {
            const newValue = `${match[1]}-${match[2]}-${e.currentTarget.value}`;
            setValue(newValue);
            props.onChange(newValue);
        }
    }

    const updateMonth: ((e: React.ChangeEvent<HTMLInputElement>) => void) = (e) => {
        setMonth(e.currentTarget.value);
        const match = value.match(DATE_REGEX);
        if (match !== null) {
            const newValue = `${match[1]}-${e.currentTarget.value}-${match[3]}`;
            setValue(newValue);
            props.onChange(newValue);
        }
    }

    const updateYear: ((e: React.ChangeEvent<HTMLInputElement>) => void) = (e) => {
        setYear(e.currentTarget.value);
        const match = value.match(DATE_REGEX);
        if (match !== null) {
            const newValue = `${e.currentTarget.value}-${match[2]}-${match[3]}`;
            setValue(newValue);
            props.onChange(newValue);
        }
    }

    return (
        <Wrapper>
            <Day
                value={day}
                type="number"
                onChange={updateDay}
            />/
            <Month
                value={month}
                type="number"
                onChange={updateMonth}
            />/
            <Year
                value={year}
                type="number"
                onChange={updateYear}
            />
            <LogoWrapper>
                <Logo/>
                <NativeInput
                    type="date"
                    value={value}
                    onChange={onChange}
                />
            </LogoWrapper>
            {/*
            <label>
                Velg dato:&nbsp;
            </label>
        */
            }
        </Wrapper>
    )
}

export default DatePicker;

const Wrapper = styled.div`
    display: flex;
`

const NativeInput = styled.input`
    position: absolute;
    top: 0;
    left 0;
    opacity: 0;
    width: 100%;
    pointer-events: none;
`

const BaseInput = styled.input`
    border: none;
    border-bottom: 1px solid;
    text-align: center;
    
    &:focus {
        outline: none;
        border: 2px solid black;
    }
`

const Year = styled(BaseInput)`   
    width: 4.5rem;
`

const Month = styled(BaseInput)`
    width: 2.5rem;
`

const Day = styled(BaseInput)`
    width: 2.5rem;
`

const LogoWrapper = styled.div`
    position: relative;
    width: calc(2rem - 4px);
    margin-left: 8px;
    padding: 0 2px;
    
    &:focus-within {
        border: 2px solid black;
        padding: 0;
    }
`

const Logo = styled(Calendar)`
    width: 100%;
    height: 100%;
`
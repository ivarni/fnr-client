import {Calendar} from "react-feather";
import styled from "styled-components";
import React, {useRef, useState} from "react";

const DEFAULT_YEAR = '1980';
const DEFAULT_MONTH = '05';
const DEFAULT_DAY = '09';
export const DEFAULT_DATE = `${DEFAULT_YEAR}-${DEFAULT_MONTH}-${DEFAULT_DAY}`;

const DATE_REGEX = /^(\d{0,4})-(\d{0,2})-(\d{0,2})$/;

interface updateArgs {
    newValue: string,
    setter: ((val: string) => void),
    buildDate: ((val: string, match:string[]) => string)
}

const DatePicker = (props: {
    onChange: (value: string) => void
}) => {

    const [value, setValue] = useState(DEFAULT_DATE);
    const [year, setYear] = useState(DEFAULT_YEAR);
    const [month, setMonth] = useState(DEFAULT_MONTH);
    const [day, setDay] = useState(DEFAULT_DAY);

    const update: ((args: updateArgs) => void) = ({ newValue, setter, buildDate }) => {
        setter(newValue);
        const match = value.match(DATE_REGEX);
        if (match !== null) {
            const _value = buildDate(newValue, match);
            setValue(_value);
            props.onChange(_value);
        }
    }

    const updateDay: ((e: React.ChangeEvent<HTMLInputElement>) => void) = (e) => {
        update({
            newValue: e.currentTarget.value,
            setter: setDay,
            buildDate: (val, match) => `${match[1]}-${match[2]}-${val}`
        })
    }

    const updateMonth: ((e: React.ChangeEvent<HTMLInputElement>) => void) = (e) => {
        update({
            newValue: e.currentTarget.value,
            setter: setMonth,
            buildDate: (val, match) => `${match[1]}-${val}-${match[3]}`
        })
    }

    const updateYear: ((e: React.ChangeEvent<HTMLInputElement>) => void) = (e) => {
        update({
            newValue: e.currentTarget.value,
            setter: setYear,
            buildDate: (val, match) => `${val}-${match[2]}-${match[3]}`
        })
    }

    return (
        <Wrapper>
            <Day
                value={day}
                type="number"
                min={1}
                max={31}
                onChange={updateDay}
            />/
            <Month
                value={month}
                type="number"
                min={1}
                max={12}
                onChange={updateMonth}
            />/
            <Year
                value={year}
                type="number"
                min={1900}
                max={2035}
                onChange={updateYear}
            />
        </Wrapper>
    )
}

export default DatePicker;

const Wrapper = styled.div`
    display: flex;
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

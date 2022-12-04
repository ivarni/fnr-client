import React, {useState} from "react";
import {useDebounce} from "react-use";
import styled from "styled-components";

const DEFAULT_YEAR = '1980';
const DEFAULT_MONTH = '5';
const DEFAULT_DAY = '9';
export const DEFAULT_DATE = `${DEFAULT_YEAR}-${DEFAULT_MONTH}-${DEFAULT_DAY}`;

const DATE_REGEX = /^(\d{0,4})-(\d{0,2})-(\d{0,2})$/;

interface updateArgs {
    newValue: string,
    setter: ((val: string) => void),
    buildDate: ((val: string, match:string[]) => string)
}

const DatePicker = (props: {
    onChange: (value: string) => void,
}) => {
    const [value, setValue] = useState(DEFAULT_DATE);
    const [year, setYear] = useState(DEFAULT_YEAR);
    const [month, setMonth] = useState(DEFAULT_MONTH);
    const [day, setDay] = useState(DEFAULT_DAY);

    const { onChange, ...rest } = props;

    const update: ((args: updateArgs) => void) = ({ newValue, setter, buildDate }) => {
        setter(newValue);
        const match = value.match(DATE_REGEX);
        if (match !== null) {
            const _value = buildDate(newValue, match);
            setValue(_value);
            props.onChange(_value);
        }
    }

    useDebounce(
        () => {
            update({
                newValue: day,
                setter: setDay,
                buildDate: (val, match) => `${match[1]}-${match[2]}-${val}`
            })
        },
        300,
        [day]
    );

    useDebounce(
        () => {
            update({
                newValue: month,
                setter: setMonth,
                buildDate: (val, match) => `${match[1]}-${val}-${match[3]}`
            })
        },
        300,
        [month]
    );

    useDebounce(
        () => {
            update({
                newValue: year,
                setter: setYear,
                buildDate: (val, match) => `${val}-${match[2]}-${match[3]}`
            })
        },
        300,
        [year]
    );

    return (
        <Wrapper {...rest}>
            <Input
                value={day}
                type="number"
                min={1}
                max={31}
                onChange={(e) => setDay(e.currentTarget.value)}
            />/
            <Input
                value={month}
                type="number"
                min={1}
                max={12}
                onChange={(e) => setMonth(e.currentTarget.value)}
            />/
            <Input
                value={year}
                type="number"
                min={1900}
                max={2035}
                onChange={(e) => setYear(e.currentTarget.value)}
            />
        </Wrapper>
    )
}

export default DatePicker;

const Wrapper = styled.div`
    width: fit-content;
    display: flex;
    gap: 8px;
`;

const Input = styled.input`
  border-radius: 5px;
  outline: none;
  border: none;
  box-shadow: var(--shadow-elevation-medium);
  text-align: center;
`;

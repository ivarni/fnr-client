import styled from "styled-components";

import {COLORS} from "../../constants";
import {Heading2} from "../typography";

import DatePicker from "./DatePicker";
import Checkbox from "./Checkbox";
import {Gender} from "../fnr-list/Fnr";

interface Props {
    onDateChange: (date: string) => void;
    onGenderChange: (gender: Gender, checked: boolean) => void;
}
export default function Menu(props: Props) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onGenderChange(e.currentTarget.value as Gender, e.currentTarget.checked)
    };

    return (
        <Wrapper>
            <div>
                <Heading2>Velg dato</Heading2>
                <DatePickerWrapper onChange={props.onDateChange} />
            </div>
            <div>
                <Heading2>Filter</Heading2>
                <FilterWrapper>
                    <Checkbox
                        label="Kvinner"
                        onChange={handleChange}
                        value={"FEMALE"}
                        defaultChecked={true}
                    />
                    <Checkbox
                        label="Menn"
                        onChange={handleChange}
                        value={"MALE"}
                        defaultChecked={true}
                    />
                </FilterWrapper>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  z-index: 2;
  background-color: ${COLORS.background};
  box-shadow: var(--shadow-elevation-medium);
  grid-area: menu;
  padding-left: 16px;
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const DatePickerWrapper = styled(DatePicker)`
  margin-top: 16px;
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 16px;
`;
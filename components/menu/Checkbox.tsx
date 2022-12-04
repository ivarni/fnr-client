import {useId} from "react";
import {Check} from "react-feather";
import styled from "styled-components";

import {COLORS} from "../../constants";
import {Gender} from "../fnr-list/Fnr";

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value'> {
    label: string;
    value: Gender;
}
export default function Checkbox(props: Props) {
    const {
        label,
        ...rest
    } = props;

    const id = useId();

    return (
        <Wrapper>
            <NativeCheckbox
                id={id}
                type={"checkbox"}
                {...rest}
            />
            <VisibleCheckbox>
                <CheckMark role="presentation" />
            </VisibleCheckbox>
            <Label htmlFor={id}>
                {props.label}
            </Label>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const NativeCheckbox = styled.input`
  width: 25px;
  height: 25px;
  opacity: 0;
`;

const CheckMark = styled(Check)`
  display: none;
  stroke: ${COLORS.secondary};
  margin-top: 1px;
`;

const VisibleCheckbox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${COLORS.white};
  width: 25px;
  height: 25px;
  box-shadow: var(--shadow-elevation-medium);
  pointer-events: none;
    
  ${NativeCheckbox}:checked + & ${CheckMark} {
    display: block;
  }
`;

const Label = styled.label`
  user-select: none;
`;

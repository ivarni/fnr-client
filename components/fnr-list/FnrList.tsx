import styled from "styled-components";

import {COLORS} from "../../constants";

import Fnr, {Ssn} from "./Fnr";

interface Props {
    list: Ssn[]
}
export default function FnrList(props: Props) {
    const {
        list
    } = props;

    return (
        <Wrapper>
            <Card>
                {list.map(ssn => (
                    <Fnr
                        key={ssn.ssn}
                        ssn={ssn.ssn}
                    />
                ))}
            </Card>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  background-color: ${COLORS.white};
  border-radius: 8px;
  margin-top: 24px;
  margin-bottom: 24px;
  margin-left: 32px;
  margin-right: 100px;
  box-shadow: var(--shadow-elevation-medium);
`;

const Card = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
  row-gap: 32px;  
  padding-top: 40px;
  overflow: hidden;
`;

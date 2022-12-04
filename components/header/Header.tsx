import styled from "styled-components";
import Image from "next/legacy/image";

import {Heading1} from "../typography";

import {COLORS} from "../../constants";

import logo from '../../public/NilsenSolutionsWhite.svg';

export default function Header() {
    return (
        <Wrapper>
            <Title>Fødselsnummer</Title>
            <Image
                src={logo}
                width={196 * 88.75 / 196}
                height={138 * 65.7 / 138}
            />
        </Wrapper>
    );
}

const Title = styled(Heading1)`
  color: ${COLORS.white};
`

const Wrapper = styled.header`
  z-index: 3;
  background-color: ${COLORS.primary};
  box-shadow: var(--shadow-elevation-low);
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
`;
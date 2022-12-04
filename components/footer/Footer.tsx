import styled from "styled-components";

import {COLORS} from "../../constants";

export default function Footer() {
    return (
        <Wrapper />
    )
}

const Wrapper = styled.footer`
  background-color: ${COLORS.background};    
  grid-area: footer;
`;
import {ReactNode} from "react";
import styled from "styled-components";

import {COLORS} from "../../constants";

interface Props {
    children: ReactNode
}
export default function Main(props: Props) {
    return (
        <Wrapper {...props} />
    )
}

const Wrapper = styled.main`
  background-color: ${COLORS.background};
  grid-area: main;
`;
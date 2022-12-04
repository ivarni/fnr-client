import {useState} from "react";
import styled from "styled-components";
import {Copy} from "react-feather";
import {Azeret_Mono} from "@next/font/google";

import {COLORS} from "../../constants";

const azeret = Azeret_Mono({ subsets: ['latin']})

export type Gender = 'MALE' | 'FEMALE';
export interface Ssn {
    ssn: string;
    gender: Gender;
}
interface Props {
    ssn: string;
}
export default function Fnr(props: Props) {
    const {
        ssn,
    } = props;

    const [clicked, setClicked] = useState(false);

    const onClick = () => {
        setClicked(true);
        navigator.clipboard.writeText(props.ssn)
    }

    return (
        <Wrapper
            className={azeret.className}
            style={{
                '--color': !clicked ? COLORS.grey[700]: COLORS.grey[500]
            }}
        >
            {ssn}
            <CopyButton
                onClick={onClick}
                aria-label="Kopier fødselsnummer"
            >
                <Copy />
            </CopyButton>
        </Wrapper>
    )
}

const Wrapper = styled.li<{ style: { '--color': string } }>`
  color: var(--color);
  font-size: ${18 / 16}rem;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CopyButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    
    &:focus {
        outline-offset: 4px;
    }    
`

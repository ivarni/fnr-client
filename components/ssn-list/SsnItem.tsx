import {useState} from "react";
import {Copy} from "react-feather";
import styled from "styled-components";

const SsnItem = (props: { ssn: string }) => {
    const [clicked, setClicked] = useState(false);

    const onClick = () => {
        setClicked(true);
        navigator.clipboard.writeText(props.ssn)
    }

    return (
        <ListItem
            style={{
                '--color': clicked ? 'grey' : 'black'
            }}
        >
            {props.ssn}
            <CopyButton
                onClick={onClick}
                aria-label="Kopier fødselsnummer"
            >
                <Copy/>
            </CopyButton>
        </ListItem>
    )
}

const ListItem = styled.li<{ style: { '--color': string } }>`
    color: var(--color);
    display: flex;
    gap: 16px;
    align-items: center;
    
    @media (max-width: 768px) {
        justify-content: center;
    }    
`

const CopyButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    
    &:focus {
        outline-offset: 4px;
    }    
`

export default SsnItem;
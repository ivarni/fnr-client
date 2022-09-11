import styled from 'styled-components';
import SsnItem from "./SsnItem";

export enum Gender { MALE = 'MALE', FEMALE = 'FEMALE' }

export interface Ssn {
    ssn: string,
    gender: Gender
}

const SsnList = (props: {
    date: string,
    list: Ssn[]
}) => {
    const {
        list
    } = props;

    const males = list.filter(ssn => ssn.gender === Gender.MALE)
    const females = list.filter(ssn => ssn.gender === Gender.FEMALE)

    return (
        <Wrapper>
            <ItemWrapper>
                <Heading>
                    Menn
                </Heading>
                <List>
                    {males.map(({ssn}) => (
                        <SsnItem
                            key={ssn}
                            ssn={ssn}
                        />
                    ))}
                </List>
            </ItemWrapper>
            <ItemWrapper>
                <Heading>
                    Kvinner
                </Heading>
                <List>
                    {females.map(({ssn}) => (
                        <SsnItem
                            key={ssn}
                            ssn={ssn}
                        />
                    ))}
                </List>

            </ItemWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    gap: 64px;
    width: 100%;
`

const ItemWrapper = styled.div`
    flex: 1;
`

const Heading = styled.h2`
    text-align: center;
`

const List = styled.ul`
    list-style-type: none;
    padding: 0;
    padding-top: 24px;
    font-family: Roboto Mono;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    row-gap: 10px;
    width: 100%;
`

export default SsnList;
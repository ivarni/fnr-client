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
            <div>
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
            </div>
            <div>
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

            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    gap: 64px;
`

const Heading = styled.h2`
    text-align: center;
`

const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    padding-top: 24px;
    gap: 24px;
    font-family: monospace;
`

export default SsnList;
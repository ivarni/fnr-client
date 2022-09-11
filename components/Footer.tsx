import styled from "styled-components";
import Image from "next/image";
import nextJsLogo from '../public/Nextjs-logo.svg'
import ktorLogo from '../public/ktor_logo.svg';

const Footer = () => {

    return (
        <Wrapper>
            <div>
                Nilsen Solutions 2022
            </div>
            <ListWrapper>
                <div>
                    Bygget med
                </div>
                <List>
                    <li>
                        <ImageLink href="https://ktor.io/">
                            <Image
                                src={ktorLogo}
                                height={40}
                                width={100}
                            />
                        </ImageLink>
                    </li>
                    <li>
                        <ImageLink href="https://nextjs.org/">
                            <Image
                                src={nextJsLogo}
                                height={40}
                                width={100}
                            />
                        </ImageLink>
                    </li>
                </List>
            </ListWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 16px;
    margin-top: 8px;
    border-top: 1px solid;
`

const ListWrapper = styled.div`
    display: flex;
    align-items: center;    
`

const List = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 8px;
`

const ImageLink = styled.a`
    display: flex;
    justify-content: center;
`

export default Footer;
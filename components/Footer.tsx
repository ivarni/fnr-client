import styled from "styled-components";
import Image from "next/image";
import nextJsLogo from '../public/Nextjs-logo.svg'
import ktorLogo from '../public/ktor_logo.svg';

const Footer = () => {

    return (
        <Wrapper>
            <About>
                Nilsen Solutions 2022
            </About>
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
    
    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`

const About = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`

const ListWrapper = styled.div`
    display: flex;
    align-items: center;
        
    @media (max-width: 768px) {
        flex-direction: column;
    }    
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
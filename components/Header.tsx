import styled from "styled-components";
import Image from "next/image";

import logo from '../public/NilsenSolutionsBlack.svg';

const Header = () => {
    return (
        <HeaderWrapper>
            <ImageContainer>
                <Image
                    src={logo}
                    width={196 * 2/3}
                    height={138 * 2/3}
                />
            </ImageContainer>
            <Heading>
                Fødselsnummer&#8203;generator
            </Heading>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const ImageContainer = styled.div`
    flex: 1;
    min-width: 150px;
`

const Heading = styled.h1`
    text-align: center;
    width: 100%;
    flex: 5;
`

export default Header;
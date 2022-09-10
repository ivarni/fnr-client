import styled from "styled-components";

const Header = () => {
    return (
        <HeaderWrapper>
            <ImageContainer>
                <img
                    src="/NilsenSolutionsBlack.svg"
                />
            </ImageContainer>
            <Heading>
                Fødselsnummergenerator
            </Heading>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
`

const ImageContainer = styled.div`
    width: 200px;
`

const Heading = styled.h1`
    text-align: center;
    width: 100%;
`

export default Header;
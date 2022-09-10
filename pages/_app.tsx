import type {AppProps} from 'next/app'
import styled from 'styled-components';
import Navigation from "../components/Navigation";
import GlobalStyles from "../components/GlobalStyles";
import Header from "../components/Header";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <AppWrapper>
            <HeaderWrapper>
                <Header />
            </HeaderWrapper>
            <Main>
                <Menu>
                    <Navigation />
                </Menu>
                <Component {...pageProps} />
            </Main>
            <Footer>asda</Footer>
            <GlobalStyles />
        </AppWrapper>
    )
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Roboto, sans-serif;
  padding: 24px;
`

const HeaderWrapper = styled.div`
    //background-color: yellow;
`

const Menu = styled.div`
    //background-color: salmon;
    min-width: 200px;
`

const Main = styled.div`
    //background-color: blue;
    display: flex;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const Footer = styled.div`
    //background-color: red;
`

export default MyApp

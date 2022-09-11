import type {AppProps} from 'next/app'
import styled from 'styled-components';
import Navigation from "../components/Navigation";
import GlobalStyles from "../components/GlobalStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
                <ComponentWrapper>
                    <Component {...pageProps} />
                </ComponentWrapper>
            </Main>
            <FooterWrapper>
                <Footer />
            </FooterWrapper>
            <GlobalStyles />
        </AppWrapper>
    )
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Roboto, sans-serif;
  padding: 24px;
  height: 100%;
  justify-content: space-between;
`

const HeaderWrapper = styled.div`
    //background-color: yellow;
`

const Menu = styled.div`
    //background-color: salmon;
    flex: 1;
    min-width: 150px;
`

const ComponentWrapper = styled.div`
    flex: 5;
`

const Main = styled.div`
    //background-color: blue;
    display: flex;
    overflow: auto;
    
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const FooterWrapper = styled.div`
    //background-color: red;
`

export default MyApp

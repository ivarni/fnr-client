import {useState} from "react";
import type {AppProps} from 'next/app'
import styled from 'styled-components';
import {Cabin} from '@next/font/google'

import GlobalStyles from "../components/GlobalStyles";
import Header from "../components/header";
import Main from "../components/main";
import Menu from "../components/menu";
import Footer from "../components/footer";

import {DEFAULT_DATE} from "../components/menu/DatePicker";
import {Gender} from "../components/fnr-list/Fnr";

const cabin = Cabin({ subsets: ['latin'] })

function MyApp({Component, pageProps}: AppProps) {
    const [date, setDate] = useState(DEFAULT_DATE);
    const [genderList, setGenderList] = useState<Gender[]>(['MALE', 'FEMALE']);

    const updateGenderList = (gender: Gender, selected: boolean) => {
        if (selected) {
            setGenderList(genderList.concat(gender));
        } else {
            setGenderList(genderList.filter(g => g != gender));
        }
    }

    return (
        <>
            <GlobalStyles />
            <Layout className={cabin.className}>
                <Header />
                <Menu
                    onDateChange={(newDate) => setDate(newDate)}
                    onGenderChange={updateGenderList}
                />
                <Main>
                    <Component
                        {...pageProps}
                        date={date}
                        showGenders={genderList}
                    />
                </Main>
                <Footer />
            </Layout>

            {/*
        <AppWrapper>
            <HeaderWrapper>
                <OldHeader />
            </HeaderWrapper>
            <OldMain>
                <OldMenu>
                    <Navigation />
                </OldMenu>
                <ComponentWrapper>
                    <Component {...pageProps} />
                </ComponentWrapper>
            </OldMain>
            <FooterWrapper>
                <OldFooter />
            </FooterWrapper>
            <GlobalStyles />
        </AppWrapper>
            */}
        </>
    )
}

const Layout = styled.div`
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(310px, 1fr) 4fr;
  grid-template-rows: 92px 8fr 0;
  grid-template-areas: 
    "header header"
    "menu main"
    "footer footer"
  ;
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  padding: 24px;
  height: 100%;
  justify-content: space-between;
`

const HeaderWrapper = styled.div`
    //background-color: yellow;
`

const OldMenu = styled.div`
    //background-color: salmon;
    flex: 1;
    min-width: 150px;
`

const ComponentWrapper = styled.div`
    flex: 5;
`

const OldMain = styled.div`
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

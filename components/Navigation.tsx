import styled from "styled-components";
import Link from "next/link";

const Navigation = (props:{}) => {

    return (
        <NavigationWrapper>
            <Link href="/">
                Generer fødselsnummer
            </Link>
        </NavigationWrapper>
    )
}
// TODO: No navigation yet
const NavigationWrapper = styled.nav`
    visibility: hidden;
`

export default Navigation;
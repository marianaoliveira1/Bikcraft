import { HeaderContainer } from "./styles";

import imgLogo from '../../assets/bikcraft.svg'

export function Header() {
    return(
        <HeaderContainer>
            <img src={imgLogo} alt="Bikcraf" />
        </HeaderContainer>
    )
}
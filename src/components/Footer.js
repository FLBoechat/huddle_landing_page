import {StyledImage } from './styles/Image.styled'
import {StyledFooter} from './styles/Footer.styled'
import {StyledButton} from './styles/Button.styled'

import icon_message from '../images/icon-messages.svg'


function Footer (){
    return (
        <StyledFooter>
            <div>
                <StyledImage
                    src={icon_message}
                    style={{height: 25, width: 25}}
                    alt="Icon MEssage"
                />
                <h1>Huddle</h1>
            </div>
            <StyledButton footer>
                <p>Try It Free</p>
            </StyledButton>

        </StyledFooter>
    )

}

export default Footer

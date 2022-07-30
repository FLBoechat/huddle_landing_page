import Button from './Button'

import {Image} from './styles/Image.styled'
import {StyledFooter} from './styles/Footer.styled'

import icon_message from '../images/icon-messages.svg'


function Footer (){
    return (
        <StyledFooter>
            <div>
                <Image
                    src={icon_message}
                    style={{height: 25, width: 25}}
                    alt="Icon MEssage"
                />
                <h1>Huddle</h1>
            </div>
            <Button footer/>
        </StyledFooter>
    )

}

export default Footer

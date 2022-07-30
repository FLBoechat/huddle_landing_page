import {StyledGetStarted} from './styles/GetStarted.styled'
import {StyledButton} from './styles/Button.styled'
import { StyledImage2 } from './styles/Image.styled'

import screen_mockups from '../images/screen-mockups.svg'

function GetStarted () {
    return(
        <StyledGetStarted>
            <h1>
                Build The Community <br />
                Your Fans Will Love
            </h1>
            <p>
                Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
            </p>
            <StyledButton started>
                <p>Get Started For Free</p>
            </StyledButton>
            <StyledImage2
                src={screen_mockups}
                alt="Screen Mockups"
            />
        </StyledGetStarted>
    )
}

export default GetStarted
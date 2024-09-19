import Button from "../Commons/Button";
import { StyledFieldSet } from "../Commons/FieldSet";
import Header from "../Commons/Header";
import { StyledInput } from "../Commons/Input";
import { StyledLabel } from "../Commons/StyledLabel";

interface PasswordChangeProps{
    password: string;
}

export default function PasswordChange({password} : PasswordChangeProps){
    return(
        <>
            <Header>
                Change your password here. After saving, you'll be logged out.
            </Header>

            <StyledFieldSet >
                <StyledLabel htmlFor="currentPassword" >
                    Current password
                </StyledLabel>
                <StyledInput type="password" id="currentPassword" />

                <StyledLabel htmlFor="newPassword" >
                    New password
                </StyledLabel>
                <StyledInput type="password" id="newPassword" />

                <StyledLabel htmlFor="confirmPassword" >
                    Confirm password
                </StyledLabel>
                <StyledInput type="password" id="confirmPassword" />


                <Button>
                    Change Password
                </Button>
            </StyledFieldSet>
        </>
    );
}
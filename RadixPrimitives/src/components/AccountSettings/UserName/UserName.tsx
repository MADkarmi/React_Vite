
import { Gender as GenderType } from "../Data/AccountSettingsTypes";
import Header from "../Commons/Header";
import { StyledLabel } from "../Commons/StyledLabel";
import { StyledFieldSet } from "../Commons/FieldSet";
import { StyledInput } from "../Commons/Input";
import { RadioGroupIndicator, RadioGroupItem, StyledRadioGroup } from "./StyledRadioGroup";
import Button from "../Commons/Button";
import styled from "@emotion/styled";



interface UserNameProps{
    name: string;
    userName: string;
    Gender: GenderType;
}

const StyledRadioroupContent = styled.div`
    display: flex;
`;

export default function UserName({name, userName, Gender}: UserNameProps){

    // sample handler
    const handleGenderChange = (val:string) =>{
        console.log(val);
    }

    return(
        <>
            <Header>
                Make changes to your account here. Click save when you're done.
            </Header>

            <StyledFieldSet >
                <StyledLabel htmlFor="firstName" >
                    Name
                </StyledLabel>
                <StyledInput type="text" id="firstName" defaultValue={name}/>

                <StyledLabel htmlFor="username">
                Username
                </StyledLabel>
                <StyledInput id="username" defaultValue={"@"+userName} />

                <StyledLabel htmlFor="gender">
                    Gender
                </StyledLabel>
                <StyledRadioGroup id="gender" aria-label="gender" defaultValue={Gender} onValueChange={handleGenderChange}>
                    { Object.keys(GenderType).map((gender) => (
                        <StyledRadioroupContent key={gender}>
                            <RadioGroupItem value={gender} id={gender}>
                                <RadioGroupIndicator/>
                            </RadioGroupItem>
                            <StyledLabel htmlFor={gender}>
                                {gender}
                            </StyledLabel>
                        </StyledRadioroupContent>
                    ))}
                </StyledRadioGroup>


                <Button>
                    Save Changes
                </Button>
            </StyledFieldSet>
        </>
    );
}
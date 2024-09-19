import styled from "@emotion/styled";
import * as RadioGroup from '@radix-ui/react-radio-group';

const StyledRadioGroup = styled(RadioGroup.Root)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding-top: 5px;
`;

const RadioGroupItem = styled(RadioGroup.Item)`
    border: solid 1px ${({theme}) => theme.color.activeColor};
    background-color: white;
    width: 25px;
    height: 25px;
    border-radius: 100%;
    margin-right: 10px;
    :hover{
        box-shadow: 0 2px 10px ${({theme}) => theme.color.activeColor};
        cursor: pointer;
    }
`;

const RadioGroupIndicator = styled(RadioGroup.Indicator)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50%;
    position: relative;
    content: '';
    border-radius: 50%;
    background-color: ${({theme}) => theme.color.activeColor};
`;

export {StyledRadioGroup, RadioGroupIndicator, RadioGroupItem}
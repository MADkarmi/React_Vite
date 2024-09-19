import styled from "@emotion/styled";
import * as Select  from "@radix-ui/react-select";
import { NotificationType } from "../Data/AccountSettingsTypes";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

const SelectRoot = styled(Select.Root)``;

const SelectTrigger = styled(Select.Trigger)`
    display: inline-flex;
    align-items: center;
    justify-content: start;
    border: 1px solid ${({theme}) => theme.color.borderLighterColor};
    border-radius: 4px;
    padding: 0 15px;
    font-size: 13px;
    line-height: 1;
    height: 35px;
    gap: 5px;
    background-color: ${({theme}) => theme.color.backgroundColor};
    color: ${({theme}) => theme.color.activeColor};
    justify-content: space-between;
    :hover{
        cursor: pointer;
        background-color: ${({theme}) => theme.color.borderLighterColor};
    }
    :focus{
        border: 1px solid ${({theme}) => theme.color.borderLighterColor};
    }
`;

const SelectValue = styled(Select.Value)``;

const SelectIcon = styled(Select.Icon)`
    color: ${({theme}) => theme.color.activeColor};

`;

const SelectPortal = styled(Select.Portal)`
    overflow: hidden;
    background-color: ${({theme}) => theme.color.backgroundColor};
    border-radius: 4px;
    /* box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2); */
`;

const SelectContent = styled(Select.Content)``;

const SelectScrollUpButton = styled(Select.ScrollUpButton)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    background-color: white;
    color: var(--violet-11);
    cursor: default;
`;

const SelectScrollDownButton = styled(Select.ScrollDownButton)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    background-color: white;
    color: var(--violet-11);
  cursor: default;
`;

const SelectViewport = styled(Select.Viewport)`
    padding: 10px;
`;
const SelectGroup = styled(Select.Group)``;
const SelectLabel = styled(Select.Label)`
`;

const SelectItemIndicator = styled(Select.ItemIndicator)`
    position: absolute;
    left: 0;
    width: 25px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
`;

const StyledSelectItem = styled(Select.Item)`
    font-size: 13px;
    line-height: 1;
    color:  ${({theme}) => theme.color.primaryColor};
    border-radius: 3px;
    display: flex;
    align-items: center;
    height: 25px;
    padding: 0 35px 0 25px;
    position: relative;
    user-select: none;
`;


interface StyledSelectProps extends Select.SelectProps {
    notifications: NotificationType;
};


export default function StyledSelect({notifications, ...props} : StyledSelectProps ){
    return(
        <SelectRoot {...props}>
            <SelectTrigger aria-label="notifications">
                <SelectValue placeholder={notifications}/>
                <SelectIcon>
                    <ChevronDownIcon/>
                </SelectIcon>
            </SelectTrigger>

            <SelectPortal>
                <SelectContent>
                    <SelectScrollUpButton>
                        <ChevronUpIcon />
                    </SelectScrollUpButton>

                    <SelectViewport>
                        <SelectGroup>
                            {Object.keys(NotificationType).map((type) => (
                                <StyledSelectItem value={type} key={type}>
                                    <Select.ItemText>
                                        {NotificationType[type as keyof typeof NotificationType]}
                                    </Select.ItemText>
                                    <SelectItemIndicator>
                                        <CheckIcon />
                                    </SelectItemIndicator>
                                </StyledSelectItem>
                            ))}
                        </SelectGroup>
                    </SelectViewport>

                    <SelectScrollDownButton>
                        <ChevronDownIcon/>
                    </SelectScrollDownButton>
                </SelectContent>
            </SelectPortal>
        </SelectRoot>
    );
}
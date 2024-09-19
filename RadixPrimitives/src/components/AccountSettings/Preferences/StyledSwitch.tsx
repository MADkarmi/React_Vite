import styled from "@emotion/styled";
import * as Switch from '@radix-ui/react-switch';


const SwitchRoot = styled(Switch.Root)`

    width: 42px;
    height: 25px;
    background-color: ${({theme}) => theme.color.highlightedBackgroundColor};
    border-radius: 9999px;
    border: 0px;
    position: relative;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    :hover{
        cursor: pointer;
    }
    &[data-state='checked'] {
        background-color: ${({theme}) => theme.color.activeColor};
    }

`;

const SwitchThumb = styled(Switch.Thumb)`
    display: block;
    width: 21px;
    height: 21px;
    background-color: ${({theme}) => theme.color.backgroundColor};
    border-radius: 9999px;
    box-shadow: 0 2px 2px ${({theme}) => theme.color.color2};
    transition: transform 100ms;
    will-change: transform;

    &[data-state='checked'] {
        transform: translateX(9px);
    }
`;

export default function StyledSwitch({id, ...props} : Switch.SwitchProps){
    return(
        <SwitchRoot id={id} {...props}>
            <SwitchThumb/>
        </SwitchRoot>
    );
}
import * as Tabs from '@radix-ui/react-tabs';
import styled from '@emotion/styled'

const AccountsContainer = styled(Tabs.Root)`
    border-radius: 10px;
    width: 500px;
    height: 500px;
    margin-top: 120px;
    display: flex;
    justify-content: center;
    background-color: ${({theme}) => theme.color.backgroundColor};
`
const TabsList = styled(Tabs.List)`
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    margin: 5px;
    width: 32%;
    flex-shrink: 0;
    background-color: ${({theme}) => theme.color.highlightedBackgroundColor};
    border-right: 2px solid ${({theme}) => theme.color.borderLighterColor};
`


const TabsTrigger = styled(Tabs.Trigger)`
    button{
        all: unset;
    }
    border: none;
    background-color: transparent;
    color: ${({theme}) => theme.color.inactiveColor};
    height: 35px;
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-family: inherit;
    user-select: none;
    :hover {
        color: ${({theme}) => theme.color.activeColor};
        cursor: pointer;
    }
    &[data-state='active'] {
        color: ${({theme}) => theme.color.activeColor};
        box-shadow: inset -2px 0 0 currentColor, 0 0 0 0px currentColor;
    }
`
const TabContent = styled(Tabs.Content)`
    width: 78%;
    margin: 5px;
    color: ${({theme}) => theme.color.primaryColor};
    font: inherit;
`

export {AccountsContainer, TabContent, TabsList, TabsTrigger}
import styled from "@emotion/styled";

export const StyledInput = styled.input`
    all: unset;
    border-radius: 4px;
    padding: 0 10px;
    font-style: inherit;
    font-size: 15px;
    line-height: 1;
    color: ${({theme}) => theme.color.input};
    border: none;
    box-shadow: 0 0 0 1px ${({theme}) => theme.color.input};
    height: 35px;

    :focus {
        border: none;
        box-shadow: 0 0 0 2px ${({theme}) => theme.color.focus};
    }
`
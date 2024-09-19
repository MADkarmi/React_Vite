import styled from "@emotion/styled";
import * as Slider  from "@radix-ui/react-slider";

const SliderRoot = styled(Slider.Root)`
    position: relative;
    display: flex;
    align-items: center;
    user-select: none;
    touch-action: none;
    width: 200px;
    height: 20px;
`;

const SliderTrack = styled(Slider.Track)`
    background-color: ${({theme}) => theme.color.highlightedBackgroundColor};
    position: relative;
    flex-grow: 1;
    border-radius: 9999px;
    height: 5px;
`;

const SliderRange = styled(Slider.Range)`
    position: absolute;
    background-color: ${({theme}) => theme.color.activeColor};
    border-radius: 9999px;
    height: 100%;
`;

const SliderThumb = styled(Slider.Thumb)`
    display: block;
    width: 20px;
    height: 20px;
    background-color: ${({theme}) => theme.color.activeColor};;
    box-shadow: 0 2px 10px ${({theme}) => theme.color.activeColor};;
    border-radius: 10px;
    :hover{
        cursor: pointer;
    }
    :focus{
        outline:none;
    }
`;

export default function StyledSlider({...props} : Slider.SliderProps){
    return(
        <SliderRoot {...props}>
            <SliderTrack>
                <SliderRange/>
            </SliderTrack>
            <SliderThumb aria-label="frequency"/>
        </SliderRoot>
    );
}
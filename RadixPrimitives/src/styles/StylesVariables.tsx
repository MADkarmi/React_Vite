import { Theme } from "@emotion/react";
import { blackA, blue, blueDark, gray, grayDark, green, greenP3, indigo, mauve, mauveDark, violet, whiteA } from '@radix-ui/colors';


export const lightTheme : Theme = {
    type: "light",
    color: {
        backgroundColor: whiteA.whiteA12,
        highlightedBackgroundColor : indigo.indigo4,
        highlightedBackgroundColor2 : grayDark.gray5,
        primaryColor: blackA.blackA11,
        activeColor: violet.violet11,
        inactiveColor: mauve.mauve10,
        focus: violet.violet10,
        input: violet.violet9,
        color1: blackA.blackA9,
        color2: blackA.blackA7,
        color3:'#333',
        color4:'#ccc',
        color5:'#444',
        borderColor:'#555',
        borderLighterColor: indigo.indigo6,
        buttonHoverLighterGreen: green.green8,
        buttonBackgroundGreen: greenP3.green6,
        buttonColor: green.green12,
    }
}

import "@emotion/react";

type lightOrDark = "light" | "dark";

declare module "@emotion/react" {
  export interface Theme {
    type: lightOrDark;
    color: {
        backgroundColor: string;
        highlightedBackgroundColor: string;
        highlightedBackgroundColor2: string;
        primaryColor: string;
        activeColor: string;
        inactiveColor: string;
        focus: string;
        input: string;
        color1: string;
        color2: string;
        color3: string;
        color4: string;
        color5: string;
        borderColor: string;
        borderLighterColor: string;
        buttonHoverLighterGreen: string;
        buttonBackgroundGreen: string;
        buttonColor: string;
    };
  }
}
import "@emotion/react";

type lightOrDark = "light" | "dark";

declare module "@emotion/react" {
  export interface Theme {
    type: lightOrDark;
    color: {
        backgroundColor: string;
        primaryColor: string;
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
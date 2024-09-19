import { Theme } from "@emotion/react";

export const lightTheme : Theme = {
    type: "light",
    color: {
        backgroundColor: '#fff',
        primaryColor: '#333',
        color1: '#f0f0f0',
        color2: '#555',
        color3: '#eee',
        color4: '#f5f5f5',
        color5: '#f9f9f9',
        borderColor: '#ddd',
        borderLighterColor: '#ccc',
        buttonHoverLighterGreen: `#45a049`,
        buttonBackgroundGreen: `#4caf50`,
        buttonColor: `#fff`,
    }
}

export const darkTheme : Theme = {
    type: "dark",
    color: {
        backgroundColor:'#111',
        primaryColor:'#fff',
        color1:'#222',
        color2:'#ddd',
        color3:'#333',
        color4:'#ccc',
        color5:'#444',
        borderColor:'#555',
        borderLighterColor:'#666',
        buttonHoverLighterGreen: `#45a049`,
        buttonBackgroundGreen: `#4caf50`,
        buttonColor: `#fff`,
    }
}
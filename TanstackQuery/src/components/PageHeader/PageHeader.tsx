import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Theme } from '@mui/material/styles';
import { SvgIcon} from '@mui/material';
import {ThemeSwitch} from './ThemeSwitch';
import ShopLogo from '../../assets/ShopLogo.svg?react';


interface HeaderProps{
    toggleTheme: () => void;
    theme: Theme;
}

export default function PageHeader({ theme, toggleTheme}:HeaderProps){
    return(
        <AppBar position="sticky" > {/* static */}

                <Toolbar disableGutters className='flex justify-center justify-items-center space-x-80'>
                    <SvgIcon className='scale-150'
                    component={ShopLogo}
                    inheritViewBox
                    sx={{
                        display: { xs: 'none', md: 'flex'},
                        fontSize:120
                        }}
                    />
                    <ThemeSwitch defaultChecked theme={theme} onClick={toggleTheme}/>

                </Toolbar>

        </AppBar>

    );
}
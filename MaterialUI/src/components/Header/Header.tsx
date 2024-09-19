import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { Theme } from '@mui/material/styles';
import { SvgIcon} from '@mui/material';
import {ThemeSwitch} from './ThemeSwitch';
import ShopLogo from '../../assets/ShopLogo.svg?react';


interface HeaderProps{
    user: User;
    toggleTheme: () => void;
    theme: Theme;
}

interface User{
    userId: number;
    userName: string;
}

function stringAvatar(name: string) {
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

export default function Header({user, theme, toggleTheme}:HeaderProps){
    return(
        <AppBar position="sticky"> {/* static */}
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <SvgIcon
                    component={ShopLogo}
                    inheritViewBox
                    sx={{
                        display: { xs: 'none', md: 'flex'},
                        mr: 160,
                        ml: 4,
                        fontSize:100
                        }}
                    />

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title={user.userName}>
                            <IconButton sx={{ p: 0 }}>
                                <Avatar {...stringAvatar(user.userName)}/>
                            </IconButton>
                        </Tooltip>
                    </Box>

                    <ThemeSwitch sx={{ ml: 6}} defaultChecked theme={theme} onClick={toggleTheme}/>

                </Toolbar>
            </Container>
        </AppBar>

    );
}
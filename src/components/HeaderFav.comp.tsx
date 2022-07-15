import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import backArrow from '../assets/svg/backArrow.svg';
import headerIcon from '../assets/svg/headerIcon.svg';

export default function HeaderFav() {
    const navigation = useNavigate()

    const navigateToFav = () => {
        navigation("/");
    }
    return (
        <AppBar position="static" style={{ backgroundColor: 'black' }}>
            <Toolbar>
                <IconButton onClick={navigateToFav}>
                    <img src={backArrow} alt="logo" style={{ height: 16, maxWidth: 20 }} />
                </IconButton>
                <IconButton sx={{ flexGrow: 1, justifyContent: 'center' }}>
                    <img src={headerIcon} alt="logo" style={{ height: 36, maxWidth: 33 }} />
                    <span style={{ fontSize: 24, color: '#FFFFFF', fontWeight: 700, marginLeft: 15 }}>The Breaking bad</span>
                </IconButton>
                <span style={{ fontSize: 22, color: '#18CA75', fontWeight: 300 }}>Favourites</span>
            </Toolbar>
        </AppBar>
    )
}




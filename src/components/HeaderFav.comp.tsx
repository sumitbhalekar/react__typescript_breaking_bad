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
                    <img src={backArrow} alt="logo" style={styles.backIcon} />
                </IconButton>
                <IconButton sx={styles.headerMidDiv}>
                    <img src={headerIcon} alt="logo" style={styles.headerIcon} />
                    <span style={styles.textBreaking}>The Breaking bad</span>
                </IconButton>
                <span style={styles.favText}>Favourites</span>
            </Toolbar>
        </AppBar>
    )
}

const styles = {
    backIcon: {
        height: 16, maxWidth: 20
    },
    headerMidDiv: {
        flexGrow: 1, justifyContent: 'center'
    },
    textBreaking: {
        fontSize: 24, color: '#FFFFFF', fontWeight: 700, marginLeft: 15
    },
    headerIcon: {
        height: 36, maxWidth: 33
    },
    favText: {
        fontSize: 22, color: '#18CA75', fontWeight: 300
    }
}




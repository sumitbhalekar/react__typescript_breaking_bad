import { useNavigate } from "react-router-dom";
import backArrow from '../assets/svg/backArrow.svg';
import headerIcon from '../assets/svg/headerIcon.svg';

export default function HeaderFav() {
    const navigation = useNavigate()

    const navigateToFav = () => {
        navigation("/");
    }
    return (
        <div className="header" style={{ margin: 10, marginRight: 30, marginLeft: 30 }}>
            <div onClick={navigateToFav} style={{ paddingLeft: 10, cursor: 'pointer' }}>
                <img src={backArrow} alt="logo" style={styles.backIcon} />
            </div>
            <div style={{ textAlign: 'center', flexGrow: 1 }}>
                <img src={headerIcon} alt="logo" style={styles.headerIcon} />
                <span style={styles.headerText}>The Breaking bad</span>
            </div>
            <div className="headerIn">
                <div className="header-right1" style={{ paddingRight: 10 }}>
                    <span style={styles.favText}>Favourites</span>
                </div>
            </div>
        </div>
    )
}

const styles = {
    headerText: {
        flexGrow: 1, fontSize: 24, color: '#FFFFFF', fontWeight: 700, paddingLeft: 10, marginTop: 10
    },
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




import { useNavigate } from "react-router-dom";
import backArrow from '../assets/svg/backArrow.svg';
import headerIcon from '../assets/svg/headerIcon.svg';
import styles from '../screens/index.module.css';
export default function HeaderFav() {
    const navigation = useNavigate()

    const navigateToFav = () => {
        navigation("/");
    }
    return (
        <div className={styles.header} >
            <div onClick={navigateToFav} className={styles.favBackIcon}>
                <img src={backArrow} alt="logo" className={styles.backIcon} />
            </div>
            <div className={styles.favCenter}>
                <img src={headerIcon} alt="logo" className={styles.headerIcon} />
                <span className={styles.headerText}>The Breaking bad</span>
            </div>
            <div className={styles.header}>
                <div className={styles.headerRightFav} style={{ paddingRight: 10 }}>
                    <span className={styles.favText}>Favourites</span>
                </div>
            </div>
        </div>
    )
}

const stylesNew = {
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




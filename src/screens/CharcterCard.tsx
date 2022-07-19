
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import favIcon from '../assets/svg/favIcon.svg';
import primaryFav from '../assets/svg/primaryFav.svg';
import { CharacterModel } from "./Constants/Constants";
import styles from './index.module.css'



export default function CharacterCard(props: any) {
    const charData = props.props;
    const index = props.index;
    const { favourites } = useSelector((state: any) => state.breakingBadData);
    const sendData = { charDataSend: charData, indexSend: index }
    const navigation = useNavigate();

    const navigateTo = () => {
        navigation("/CharacterDetails", { state: sendData });
    }

    const showFav = (favourites?.filter((element: CharacterModel) => element.char_id === charData.char_id).length !== 0)
    return (
        <div className={styles.mainCharacterCard}>
            <div className={styles.mainDiv} >
                <div className={styles.imageDiv} onClick={navigateTo}>
                    <div className={styles.paddingMain}>
                        <img src={charData.img} alt="mainImage" className={styles.mainCardImage} />
                    </div>
                </div>
                <div className={styles.secondDiv} onClick={navigateTo}>
                    <span className={styles.nameStyle}>{charData.name}</span><br />
                    <div className={styles.paddingTop}>
                        <span className={styles.nickNameStyle}>{charData.nickname}</span><br />
                    </div>
                    <div className={styles.paddingTop}>
                        <span className={styles.potrayedMain}>{"Potrayed"}</span>
                        <span className={styles.potrayedData}>{charData.portrayed}</span>
                    </div>
                </div>
                <div onClick={props.onPressFav} className={styles.favIconSize}>
                    <img src={showFav ? favIcon : primaryFav} alt="favIcon" className={styles.favIconStyle} />
                </div>
            </div>
        </div>
    )
}
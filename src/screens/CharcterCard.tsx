
import { useNavigate } from "react-router-dom";
import primaryFav from '../assets/svg/primaryFav.svg';
import favIcon from '../assets/svg/favIcon.svg';


export default function CharacterCard(props: any) {
    let charData = props.props;
    let index = props.index;
    let sendData = { charDataSend: charData, indexSend: index }
    const navigation = useNavigate();

    const navigateTo = () => {
        navigation("/CharacterDetails", { state: sendData });
    }

    return (
        <div >
            <div className="mainCharacterCard">
                <div style={styles.mainDiv} className="mainCardView">
                    <div style={styles.imageDiv} onClick={navigateTo}>
                        <div style={{ padding: 10, }}>
                            <img src={charData.img} alt="headerIcon" style={styles.mainCardImage} />
                        </div>
                    </div>
                    <div style={styles.secondDiv} onClick={navigateTo}>
                        <span style={styles.nameStyle}>{charData.name}</span><br />
                        <div style={{ paddingTop: 10, }}>
                            <span style={styles.nickNameStyle}>{charData.nickname}</span><br />
                        </div>
                        <div style={{ paddingTop: 10, }}>
                            <span style={styles.potrayedMain}>{"Potrayed"}</span>
                            <span style={styles.potrayedData}>{charData.portrayed}</span>
                        </div>
                    </div>
                    <div onClick={props.onPressFav} style={{ width: '13vh', }} >
                        <img src={props.showFavorites ? favIcon : primaryFav} alt="favPrimaryIcon" style={styles.favIconStyle} />
                    </div>
                </div>
            </div>
        </div>
    )
}


const styles = {
    mainCardImage: {
        display: 'flex',
        borderRadius: 5,
        maxHeight: '24vh',
        maxWidth: '24vh'
    },
    mainDiv: {
        display: 'flex'
    },
    secondDiv: {
        padding: 10, width: '26vh'
    },
    imageDiv: {
        height: '27vh',
        width: '26vh',
        borderRadius: 5
    },
    favIconStyle: {
        height: 35, width: '18vh', marginTop: 15
    },
    nickNameStyle: {
        fontSize: 18, paddingTop: 20, color: '#FFFFFF', fontWeight: 300
    },
    nameStyle:
        { fontSize: 24, color: '#FFFFFF', fontWeight: 500 },
    potrayedMain: {
        fontSize: 14, color: '#18CA75', fontWeight: 300
    },
    potrayedData: {
        fontSize: 14, color: '#FFFFFF', paddingLeft: 15, fontWeight: 300
    }
}


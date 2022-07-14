
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
                <div style={{ flexDirection: 'row', display: 'flex', }} onClick={navigateTo}>
                    <div style={{ height: '22vh', width: '22vh', borderRadius: 5, }} >
                        <div style={{ padding: 10, }}>
                            <img src={charData.img} alt="headerIcon" style={{ borderRadius: 5, height: '20vh', width: "20vh" }} />
                        </div>
                    </div>
                    <div style={{ padding: 10, width: '25vh' }} >
                        <span style={{ fontSize: 24, fontFamily: 'Roboto', color: '#FFFFFF', fontWeight: 500 }}>{charData.name}</span><br />
                        <div style={{ paddingTop: 10, }}>
                            <span style={{ fontSize: 18, paddingTop: 20, color: '#FFFFFF', fontFamily: 'Roboto', fontWeight: 300 }}>{charData.nickname}</span><br />
                        </div>
                        <div style={{ paddingTop: 10, }}>
                            <span style={{ fontSize: 14, color: '#18CA75', fontFamily: 'Roboto', fontWeight: 300 }}>{"Potrayed    "}</span>
                            <span style={{ fontSize: 14, color: '#FFFFFF', fontFamily: 'Roboto', fontWeight: 300 }}>{charData.portrayed}</span>
                        </div>
                    </div>
                </div>
                <div onClick={props.onPressFav}>
                    <img src={props.showFavorites ? favIcon : primaryFav} alt="favPrimaryIcon" style={{ height: 35, width: 35, marginTop: 15 }} />
                </div>
            </div>
        </div>
    )
}


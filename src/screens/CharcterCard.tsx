
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
                <div style={{ flexDirection: 'row', display: 'flex', }} className="mainCardView">
                    <div style={{ height: '27vh', width: '26vh', borderRadius: 5 }} onClick={navigateTo}>
                        <div style={{ padding: 10, }}>
                            <img src={charData.img} alt="headerIcon" style={{
                                display: 'flex',
                                borderRadius: 5,
                                // height: 'auto',
                                maxHeight: '24vh',
                                // width: 'auto',
                                maxWidth: '24vh'
                            }} />
                        </div>
                    </div>
                    <div style={{ padding: 10, width: '26vh' }} onClick={navigateTo}>
                        <span style={{ fontSize: 24, color: '#FFFFFF', fontWeight: 500 }}>{charData.name}</span><br />
                        <div style={{ paddingTop: 10, }}>
                            <span style={{ fontSize: 18, paddingTop: 20, color: '#FFFFFF', fontWeight: 300 }}>{charData.nickname}</span><br />
                        </div>
                        <div style={{ paddingTop: 10, }}>
                            <span style={{ fontSize: 14, color: '#18CA75', fontWeight: 300 }}>{"Potrayed"}</span>
                            <span style={{ fontSize: 14, color: '#FFFFFF', paddingLeft: 15, fontWeight: 300 }}>{charData.portrayed}</span>
                        </div>
                    </div>
                    <div onClick={props.onPressFav} style={{ width: '13vh', }} >
                        <img src={props.showFavorites ? favIcon : primaryFav} alt="favPrimaryIcon" style={{ height: 35, width: '18vh', marginTop: 15 }} />
                    </div>
                </div>

            </div>


        </div>
    )
}


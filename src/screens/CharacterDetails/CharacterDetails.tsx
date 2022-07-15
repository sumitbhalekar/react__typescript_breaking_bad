
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../assets/styles/breakingBad.css';
import backArrow from '../../assets/svg/backArrow.svg';
import birthdayIcon from '../../assets/svg/birthdayIcon.svg';


export default function CharacterDetails(props: any) {
    const { state } = useLocation();
    const navigation = useNavigate();
    const { breakingBadData } = useSelector((state: any) => state.breakingBadData);
    let charDataRec: any = state;
    let charData = charDataRec?.charDataSend;
    let indexValue = charDataRec?.indexSend;

    const onBackClick = () => {
        navigation("/");
    }
    return (
        <div style={{ flexGrow: 1 }}>
            <div className='charDetails'>
                <div className='charDetailsSub'>
                    <div style={styles.mainDiv}>
                        <div>
                            <div>
                                <div style={{
                                    height: '75vh',
                                    width: '85vh',
                                    display: 'flex',
                                    background: `url(${charData.img})`,
                                    backgroundPosition: 'top',
                                    backgroundSize: 'cover',
                                    opacity: 0.3
                                }} />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '90vh',
                                    left: '5vh',
                                    justifyContent: 'center'
                                }} onClick={onBackClick}>
                                    <img src={backArrow} alt="backIcon" style={{ height: 10 }} />
                                </div>
                                <div style={{
                                    height: '27vh', width: '26vh',
                                    borderRadius: 5,
                                    position: 'absolute',
                                    bottom: '27vh',
                                    left: '32vh',
                                }}>
                                    <img src={charData.img} alt="charIcon" style={styles.innerImage} />
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <span style={styles.charName}>{charData.name}</span><br />
                                <span style={styles.charNickName}>{charData.nickname}</span>
                            </div>
                        </div>

                        <div style={{ marginLeft: 10 }}>
                            <div className='charDetails' style={{ height: '68vh', }}>
                                <div className='charDetailsSub'>
                                    <div style={{ padding: 10, }} className='charDetails'>
                                        <div className='charDetailsDate'>
                                            <span style={styles.mainSideText}>Potrayed</span><br />
                                            <span style={styles.secondText}>{charData.portrayed}</span>
                                        </div>
                                    </div>
                                    <div style={{ padding: 10, }} >
                                        <span style={styles.mainSideText}>Occupation</span><br />
                                        <span style={styles.secondText}>{charData.occupation[0]}</span><br />
                                        <span style={styles.secondText}>{charData.occupation[1]}</span>
                                    </div>
                                    <div style={{ padding: 10 }} >
                                        <span style={styles.mainSideText}>Appeared in</span>
                                        <div style={{
                                            display: 'flex'
                                        }}>
                                            {charData?.appearance?.map((item: number) => {
                                                return (
                                                    <div>
                                                        <h1 style={styles.seasonText}>{`Season ${item}`}</h1>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ padding: 10 }} className='otherChars'>
                                <div>
                                    <span style={styles.otherCharsHeading}>Other characters</span><br />
                                </div>
                                <div style={styles.otherCharDiv}>
                                    {breakingBadData?.slice(indexValue + 1, indexValue + 4).map((item: any) => {
                                        return (
                                            <div >
                                                <img src={item.img} alt="headerIcon" style={styles.otherCharImage} /><br />
                                                <span style={styles.otherCharName}>{item.name}</span><br />
                                                <span style={styles.otherCharNickName}>{item.nickname}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ top: '20vh', width: '18vh', position: 'absolute' }}>
                    <div className='charDetailsText'>
                        <div className='charDetailsDate'><img src={birthdayIcon} alt="backIcon" style={styles.birthdayIcon} />
                        </div>
                        <div className='charDetailsDate' style={{ marginLeft: 10 }}>
                            <span style={styles.birthdayText}>{charData.birthday}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

const styles = {
    mainDiv: {
        borderRadius: 5, display: 'flex', margin: 10,
    },
    innerImage: {
        height: '28vh',
        width: "21vh",
        borderRadius: 5
    },
    charName: {
        fontSize: 48, color: '#FFFFFF', fontWeight: 700
    },
    charNickName: {
        fontSize: 22, color: '#FFFFFF', fontWeight: 300
    },
    mainSideText: {
        fontSize: 20, color: '#18CA75', fontWeight: 500
    },
    secondText: {
        fontSize: 16, color: '#FFFFFF', fontWeight: 300
    },
    seasonText: {
        fontSize: 10, marginRight: 3, padding: 4, backgroundColor: '#1A1A1A', color: '#FFFFFF', fontWeight: 300
    },
    otherCharsHeading: {
        fontSize: 20, color: '#FFFFFF', fontWeight: 700
    },
    otherCharDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    otherCharImage: {
        height: '18vh', width: "14vh", borderRadius: 5, marginRight: 30
    },
    otherCharName: {
        fontSize: 12, color: '#FFFFFF', fontWeight: 700
    },
    otherCharNickName: {
        fontSize: 10, color: '#FFFFFF', fontWeight: 300
    },
    birthdayText: {
        fontSize: 18, bottom: 100, marginLeft: 10, color: '#FFFFFF', fontWeight: 300
    },
    birthdayIcon: {
        marginBottom: 4, height: 15,
    }
}



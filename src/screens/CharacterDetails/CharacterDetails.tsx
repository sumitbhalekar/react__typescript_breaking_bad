
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
                    <div style={{ borderRadius: 5, display: 'flex', margin: 10, }} >
                        <div>
                            <div>
                                <div style={{
                                    padding: 10,
                                    height: '70vh',
                                    width: '55vh',
                                    display: 'flex',
                                    background: `url(${charData.img})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat', opacity: 0.3
                                }} />
                                <div style={{ position: 'absolute', bottom: '90vh', left: '5vh', justifyContent: 'center' }} onClick={onBackClick}>
                                    <img src={backArrow} alt="backIcon" style={{ height: 10 }} />
                                </div>
                                <img src={charData.img} alt="charIcon"
                                    style={{
                                        height: '25vh',
                                        width: "20vh",
                                        position: 'absolute',
                                        bottom: '30vh',
                                        left: '18vh',
                                        borderRadius: 5
                                    }} />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <span style={{ fontSize: 48, fontFamily: 'Roboto', color: '#FFFFFF', fontWeight: 700 }}>{charData.name}</span><br />
                                <span style={{ fontSize: 22, fontFamily: 'Roboto', color: '#FFFFFF', fontWeight: 300 }}>{charData.nickname}</span>
                            </div>
                        </div>

                        <div style={{ marginLeft: 10 }}>
                            <div className='charDetails' style={{ height: '64vh', }}>
                                <div className='charDetailsSub'>
                                    <div style={{ padding: 10, }} className='charDetails'>
                                        <div className='charDetailsDate'>
                                            <span style={{ fontSize: 24, color: '#18CA75', fontFamily: 'Roboto', fontWeight: 500 }}>Portrayed</span><br />
                                            <span style={{ fontSize: 20, color: '#FFFFFF', fontFamily: 'Roboto', fontWeight: 300 }}>{charData.portrayed}</span>
                                        </div>
                                        {/* <div className='charDetailsDate' >
                                    <div >
                                        <span style={{ fontSize: 14, fontFamily: 'Roboto', bottom: 100, color: '#FFFFFF', fontWeight: 300 }}>{charData.birthday}</span>
                                    </div>
                                </div> */}
                                    </div>
                                    <div style={{ padding: 10, }} >
                                        <span style={{ fontSize: 24, color: '#18CA75', fontFamily: 'Roboto', fontWeight: 500 }}>Occupation</span><br />
                                        <span style={{ fontSize: 20, color: '#FFFFFF', fontFamily: 'Roboto', fontWeight: 300 }}>{charData.occupation[0]}</span><br />
                                        <span style={{ fontSize: 20, color: '#FFFFFF', fontFamily: 'Roboto', fontWeight: 300 }}>{charData.occupation[1]}</span>
                                    </div>
                                    <div style={{ padding: 10 }} >
                                        <span style={{ fontSize: 24, color: '#18CA75', fontFamily: 'Roboto', fontWeight: 500 }}>Appeared in</span>
                                        <div style={{
                                            display: 'flex'
                                        }}>
                                            {charData?.appearance?.map((item: number) => {
                                                return (
                                                    <div>
                                                        <h1 style={{ fontSize: 14, marginRight: 5, padding: 1, backgroundColor: '#1A1A1A', color: '#FFFFFF', fontFamily: 'Roboto', fontWeight: 300 }}>{`Season${item}`}</h1>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ padding: 10 }} className='otherChars'>
                                <div>
                                    <span style={{ fontSize: 24, color: '#FFFFFF', fontFamily: 'Roboto', fontWeight: 700 }}>Other characters</span><br />
                                </div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    {breakingBadData?.slice(indexValue + 1, indexValue + 4).map((item: any) => {
                                        return (
                                            <div >
                                                <img src={item.img} alt="headerIcon" style={{ height: '18vh', width: "13vh", borderRadius: 5, marginRight: 17 }} /><br />
                                                <span style={{ fontSize: 16, fontFamily: 'Roboto', color: '#FFFFFF', fontWeight: 700 }}>{item.name}</span><br />
                                                <span style={{ fontSize: 14, fontFamily: 'Roboto', color: '#FFFFFF', fontWeight: 300 }}>{item.nickname}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ top: '20vh', width: '15vh', position: 'absolute' }}>
                    <div className='charDetailsText'>
                        <div className='charDetailsDate'><img src={birthdayIcon} alt="backIcon" style={{ marginBottom: 4, height: 15, }} />
                        </div>
                        <div className='charDetailsDate' style={{ marginLeft: 10 }}>
                            <span style={{ fontSize: 14, fontFamily: 'Roboto', bottom: 100, marginLeft: 10, color: '#FFFFFF', fontWeight: 300 }}>{charData.birthday}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}



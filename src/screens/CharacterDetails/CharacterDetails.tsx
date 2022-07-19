import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import backArrow from '../../assets/svg/backArrow.svg';
import birthdayIcon from '../../assets/svg/birthdayIcon.svg';
import { CharacterModel } from '../Constants/Constants';
import stylesNew from './index.module.css';


export default function CharacterDetails() {
    const { state } = useLocation();
    const navigation = useNavigate();
    const { breakingBadData } = useSelector((state: any) => state.breakingBadData);
    const charDataRec: any = state;
    const indexValue = charDataRec?.indexSend;
    let charData = charDataRec?.charDataSend;

    const onBackClick = () => {
        navigation("/");
    }

    const navigateToCharDetails = (item: CharacterModel, index: number) => {
        charData = item;
        const sendData = { charDataSend: charData, indexSend: index }
        navigation("/CharacterDetails", { state: sendData });
    }
    return (
        <div className={stylesNew.upperDiv}>
            <div className={stylesNew.charDetails}>
                <div className={stylesNew.charDetailsSub}>
                    <div className={stylesNew.mainDiv}>
                        <div>
                            <div>
                                <div style={{
                                    background: `url(${charData.img})`,
                                }} className={stylesNew.backgroundImageInner} />
                                <div onClick={onBackClick} className={stylesNew.onBackClick}>
                                    <img src={backArrow} alt="backArrow" />
                                </div>
                                <div className={stylesNew.middleImage}>
                                    <img src={charData.img} alt="CharImage" className={stylesNew.innerImage} />
                                </div>
                            </div>
                            <div className={stylesNew.charNamesDiv}>
                                <span className={stylesNew.charName}>{charData.name}</span><br />
                                <span className={stylesNew.charNickName}>{charData.nickname}</span>
                            </div>
                        </div>

                        <div className={stylesNew.marginCommon}>
                            <div className={stylesNew.charDetails} style={{ height: '68vh' }}>
                                <div className={stylesNew.charDetailsSub}>
                                    <div style={{ padding: 10 }} className={stylesNew.charDetails}>
                                        <div className={stylesNew.charDetailsDate}>
                                            <span className={stylesNew.mainSideText}>Potrayed</span><br />
                                            <span className={stylesNew.secondText}>{charData.portrayed}</span>
                                        </div>
                                    </div>
                                    <div className={stylesNew.paddingCommon} >
                                        <span className={stylesNew.mainSideText}>Occupation</span><br />
                                        <span className={stylesNew.secondText}>{charData.occupation[0]}</span><br />
                                        <span className={stylesNew.secondText}>{charData.occupation[1]}</span>
                                    </div>
                                    <div className={stylesNew.paddingCommon}>
                                        <span className={stylesNew.mainSideText}>Appeared in</span>
                                        <div className={stylesNew.displayFlex}>
                                            {charData?.appearance?.map((item: number) => {
                                                return (
                                                    <div>
                                                        <h1 className={stylesNew.seasonText}>{`Season ${item}`}</h1>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ padding: 10 }} className={stylesNew.otherChars}>
                                <div>
                                    <span className={stylesNew.otherCharsHeading}>Other characters</span><br />
                                </div>
                                <div className={stylesNew.otherCharDiv}>
                                    {breakingBadData?.slice(indexValue + 1, indexValue + 4).map((item: any, index: number) => {
                                        return (
                                            <div onClick={() => { navigateToCharDetails(item, index) }}>
                                                <img src={item.img} alt="otherChar" className={stylesNew.otherCharImage} /><br />
                                                <span className={stylesNew.otherCharName}>{item.name}</span><br />
                                                <span className={stylesNew.otherCharNickName}>{item.nickname}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={stylesNew.dateMainDiv}>
                    <div className={stylesNew.charDetailsText}>
                        <div className={stylesNew.charDetailsDate}>
                            <img src={birthdayIcon} alt="birthdayIcon" className={stylesNew.birthdayIcon} />
                        </div>
                        <div className={stylesNew.charDetailsDate} style={{ marginLeft: 10 }}>
                            <span className={stylesNew.birthdayText}>{charData.birthday}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
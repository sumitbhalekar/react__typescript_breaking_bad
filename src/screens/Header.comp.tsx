import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../assets/styles/breakingBad.css';
import favIcon from '../assets/svg/favIcon.svg';
import headerIcon from '../assets/svg/headerIcon.svg';
import searchIcon from '../assets/svg/searchIcon.svg';
import { CLEAR_SEARCH_DATA, SEARCH_CHARACTER_FAILED, SEARCH_CHARACTER_REQUEST, SEARCH_CHARACTER_SUCCESS } from "../redux/action_types";
import { apiConfig } from "./Constants/Constants";
import styles from './index.module.css';

export default function Header(props: any) {
    const navigation = useNavigate()
    const [showSearch, setShowSearch] = useState(true);
    const dispatch = useDispatch();

    const navigateToFav = () => {
        navigation("/FavouriteCharacters");
    }
    const handleChange = (e: any) => {
        if (e.target.value === "") {
            dispatch({ type: CLEAR_SEARCH_DATA })
        }
        else {
            dispatch({
                type: SEARCH_CHARACTER_REQUEST
            })
            setTimeout(() => {
                searchCharacterApi(e.target.value);
            }, 1500)
        }
    };

    const searchCharacterApi = (name: string) => {
        apiConfig.get("/api/characters?name=" + name).then((response: any) => {
            if (response) {
                const payloadData = {
                    data: response.data
                }
                dispatch({
                    type: SEARCH_CHARACTER_SUCCESS,
                    payload: payloadData
                })
            }
            else {
                dispatch({
                    type: SEARCH_CHARACTER_FAILED
                })
            }
        });
    }
    return (
        <div className={styles.header}>
            <img src={headerIcon} alt="logo" className={styles.headerIcon} />
            <span className={styles.headerText}>The Breaking bad</span>
            <input onChange={handleChange} placeholder="Search" className={showSearch ? styles.textfield_active : styles.textfield} />
            <div onClick={() => { setShowSearch(!showSearch) }} className={styles.icon} >
                <img src={searchIcon} alt="logo" />
            </div>
            <div className={styles.headerIn}>
                <div className={styles.headerRight} onClick={navigateToFav} >
                    <img src={favIcon} alt="logo" className={styles.favIcon} />
                </div>
            </div>
        </div>
    )
}
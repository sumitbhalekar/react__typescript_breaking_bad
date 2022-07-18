import axios from "axios";
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../assets/styles/breakingBad.css';
import favIcon from '../assets/svg/favIcon.svg';
import headerIcon from '../assets/svg/headerIcon.svg';
import searchIcon from '../assets/svg/searchIcon.svg';
import { CLEAR_SEARCH_DATA, SEARCH_CHARACTER_SUCCESS } from "../redux/action_types";

export default function Header(props: any) {
    const navigation = useNavigate()
    const [showSearch, setShowSearch] = useState(false);
    const dispatch = useDispatch();

    const navigateToFav = () => {
        navigation("/FavouriteCharacters");
    }
    const handleChange = (e: any) => {
        if (e.target.value === "") {
            dispatch({ type: CLEAR_SEARCH_DATA })
        }
        else {
            setTimeout(() => {
                searchCharacterApi(e.target.value);
            }, 1500)
        }
    };
    const apiConfig = axios.create({
        baseURL: "https://www.breakingbadapi.com",
        headers: {
            'Access-Control-Allow-Origin': true,
            'Content-Type': 'application/json',
        },
        withCredentials: false
    });

    const searchCharacterApi = (name: string) => {
        let response: any = apiConfig.get("/api/characters?name=" + name).then((response: any) => {
            console.log("RESPONSE======>", response.data);
            if (response) {
                let payloadData = {
                    data: response.data
                }
                dispatch({
                    type: SEARCH_CHARACTER_SUCCESS,
                    payload: payloadData
                })
            }
        });
    }
    return (
        <div className="header" style={{ margin: 10, marginRight: 30, marginLeft: 30 }}>
            <img src={headerIcon} alt="logo" style={styles.headerIcon} />
            <span style={styles.headerText}>The Breaking bad</span>
            {
                showSearch ?
                    <input onChange={handleChange} type="search" placeholder="Search" /> : null
            }
            <div onClick={() => { setShowSearch(!showSearch) }} onMouseEnter={() => { setShowSearch(true) }}
                style={{ position: 'relative', padding: 7 }} className="icon">
                <img src={searchIcon} alt="logo" />
            </div>
            <div className="headerIn">
                <div className="header-right1" onClick={navigateToFav} style={{ paddingTop: 8 }}>
                    <img src={favIcon} alt="logo" style={styles.favIcon} />
                </div>
            </div>
        </div>
    )
}

const styles = {
    headerText: {
        flexGrow: 1, fontSize: 24, color: '#FFFFFF', fontWeight: 700, paddingLeft: 10
    },
    headerIcon: {
        height: 36, maxWidth: 33
    },
    favIcon: {
        height: 20, width: 22
    }
}
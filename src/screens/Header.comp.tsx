import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
    const apiConfig = axios.create({ baseURL: "http://www.breakingbadapi.com" });

    const searchCharacterApi = (name: string) => {
        let response: any = apiConfig.post("/api/characters?name=" + name).then((response: any) => {
            // console.log("RESPONSE======>", response.data);
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
        <AppBar position="static" style={{ backgroundColor: 'black' }}>
            <Toolbar>
                <IconButton >
                    <img src={headerIcon} alt="logo" style={{ height: 36, maxWidth: 33 }} />
                </IconButton>
                <Typography sx={{ flexGrow: 1, fontSize: 24, color: '#FFFFFF', fontFamily: 'Roboto', fontWeight: 700 }} >The Breaking bad
                </Typography>
                {
                    showSearch ?
                        <input onChange={handleChange} type="search" placeholder="Search" /> : null
                }
                <div onClick={() => { setShowSearch(!showSearch) }} style={{
                    position: 'relative',
                    // backgroundColor: '#232323',
                    padding: 5
                }} className="icon">
                    <img src={searchIcon} alt="logo" />
                </div>
                <IconButton onClick={navigateToFav}>
                    <img src={favIcon} alt="logo" style={{ height: 20, width: 22 }} />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}




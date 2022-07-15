import { Grid, useMediaQuery } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { ADD_TO_FAVOURITES, BREAKING_BAD_SUCCESS, CLEAR_SEARCH_DATA } from './redux/action_types';
import CharacterCard from './screens/CharcterCard';
import Header from './screens/Header.comp';



function App() {
  const dispatch = useDispatch();
  const { breakingBadData, favourites, searchedCharaters } = useSelector((state: any) => state.breakingBadData);

  useEffect(() => {
    breakingBadApi();
    return () => {
      dispatch({ type: CLEAR_SEARCH_DATA })
    }
  }, [])

  const apiConfig = axios.create({ baseURL: "http://www.breakingbadapi.com" });
  const breakingBadApi = () => {
    let response: any = apiConfig.post("/api/characters").then((response: any) => {
      // console.log("RESPONSE======>", response);
      if (response) {
        let payloadData = {
          data: response?.data
        }
        dispatch({
          type: BREAKING_BAD_SUCCESS,
          payload: payloadData
        })
      }
    });
  }

  const addFavourites = (item: any) => {
    if (favourites?.filter((element: any) => element.char_id === item.char_id).length === 0) {
      dispatch({
        type: ADD_TO_FAVOURITES,
        payload: item,
      });
    }
  }
  const matches = useMediaQuery("(min-width:600px)");
  const renderCardView = (item: any, index: number) => {
    return (
      <Grid item xs={6} sm={4}
        direction="row"
        maxWidth="lg"
      // margin={matches ? "auto auto" : "auto"}
      >
        <CharacterCard props={item} index={index} onPressFav={() => { addFavourites(item) }} showFavorites={(favourites?.filter((element: any) => element.char_id === item.char_id).length === 0) ? null : true} />
      </Grid>
    )
  }

  return (
    <>
      <Header />
      <div style={{ padding: 20, }}>
        <Grid container spacing={3}>
          {
            searchedCharaters != '' ? searchedCharaters?.map((item: any, index: number) => {
              return (renderCardView(item, index))
            }) :
              breakingBadData?.map((item: any, index: number) => {
                return (renderCardView(item, index))
              })}
        </Grid>
      </div>
    </>);
}

export default App;

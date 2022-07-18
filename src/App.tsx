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
  const apiConfig = axios.create({
    baseURL: "https://www.breakingbadapi.com",
    headers: {
      'Access-Control-Allow-Origin': true,
      'Content-Type': 'application/json',
    },
    withCredentials: false
  });
  const breakingBadApi = () => {
    let response: any = apiConfig.get("/api/characters").then((response: any) => {
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
  const renderCardView = (item: any, index: number) => {
    return (
      <div style={{ padding: 10 }}>
        <CharacterCard props={item} index={index} onPressFav={() => { addFavourites(item) }} showFavorites={(favourites?.filter((element: any) => element.char_id === item.char_id).length === 0) ? null : true} />
      </div>
    )
  }

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <div style={{ padding: 20, paddingTop: 40, display: 'flex', flexWrap: 'wrap' }}>
          {
            searchedCharaters != '' ? searchedCharaters?.map((item: any, index: number) => {
              return (renderCardView(item, index))
            }) :
              breakingBadData?.map((item: any, index: number) => {
                return (renderCardView(item, index))
              })}
        </div>
      </div>
    </>);
}

export default App;

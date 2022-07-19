import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { ADD_TO_FAVOURITES, BREAKING_BAD_SUCCESS, CLEAR_SEARCH_DATA, REMOVE_FAVOURITES } from './redux/action_types';
import CharacterCard from './screens/CharcterCard';
import Header from './screens/Header.comp';
import styles from '../src/screens/index.module.css';
import { apiConfig, CharacterModel } from './screens/Constants/Constants';


function App() {
  const dispatch = useDispatch();
  const { breakingBadData, favourites, searchedCharaters, loading } = useSelector((state: any) => state.breakingBadData);

  useEffect(() => {
    breakingBadApi();
    return () => {
      dispatch({ type: CLEAR_SEARCH_DATA })
    }
  }, [])

  const breakingBadApi = () => {
    apiConfig.get("/api/characters").then((response) => {
      if (response) {
        const payloadData = {
          data: response?.data
        }
        dispatch({
          type: BREAKING_BAD_SUCCESS,
          payload: payloadData
        })
      }
    });
  }


  const addFavourites = (item: CharacterModel) => {
    if (favourites?.filter((element: CharacterModel) => element.char_id === item.char_id).length === 0) {
      dispatch({
        type: ADD_TO_FAVOURITES,
        payload: item,
      });
    }
    else {
      dispatch({
        type: REMOVE_FAVOURITES,
        payload: item,
      });
    }
  }
  const renderCardView = (item: CharacterModel, index: number) => {
    return (
      <div className={styles.paddingMain}>
        <CharacterCard props={item} index={index} onPressFav={() => { addFavourites(item) }} />
      </div>
    )
  }

  return (
    <>
      <Header />
      <div className={styles.mainDivCard} style={{ justifyContent: loading ? 'center' : 'normal' }}>
        {loading ? <div className={styles.loader} /> :
          searchedCharaters !== '' ? searchedCharaters?.map((item: CharacterModel, index: number) => {
            return (renderCardView(item, index))
          }) :
            breakingBadData?.map((item: CharacterModel, index: number) => {
              return (renderCardView(item, index))
            })}
      </div>
    </>);
}

export default App;

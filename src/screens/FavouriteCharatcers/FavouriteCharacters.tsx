import { useDispatch, useSelector } from "react-redux";
import HeaderFav from "../../components/HeaderFav.comp";
import { REMOVE_FAVOURITES } from "../../redux/action_types";
import CharacterCard from "../CharcterCard";
import { CharacterModel } from "../Constants/Constants";
import styles from './index.module.css';

export default function FavouriteCharacters() {
    const dispatch = useDispatch();
    const { favourites } = useSelector((state: any) => state.breakingBadData);
    const removeFavourites = (item: CharacterModel) => {
        dispatch({
            type: REMOVE_FAVOURITES,
            payload: item,
        });
    }

    return (
        <>
            <HeaderFav />
            <div className={styles.mainDiv}>
                {favourites?.map((item: CharacterModel, index: number) => {
                    return (
                        <div className={styles.paddingCommon}>
                            <CharacterCard props={item} index={index} onPressFav={removeFavourites} />
                        </div>
                    )
                })}
            </div>
        </>);
}
import { useDispatch, useSelector } from "react-redux";
import HeaderFav from "../../components/HeaderFav.comp";
import { REMOVE_FAVOURITES } from "../../redux/action_types";
import CharacterCard from "../CharcterCard";


export default function FavouriteCharacters() {
    const { favourites } = useSelector((state: any) => state.breakingBadData);
    const dispatch = useDispatch();
    const removeFavourites = (item: any) => {
        let favs = favourites?.filter((element: any) => element.char_id !== item.char_id);
        dispatch({
            type: REMOVE_FAVOURITES,
            payload: favs,
        });
    }

    return (
        <>
            <HeaderFav />
            <div style={{ padding: 20, display: 'flex', flexWrap: 'wrap' }}>
                {favourites?.map((item: object, index: number) => {
                    return (
                        <div style={{ padding: 10 }}>
                            <CharacterCard props={item} index={index} onPressFav={() => { removeFavourites(item) }} showFavorites={true} />
                        </div>
                    )
                })}
            </div>
        </>);
}
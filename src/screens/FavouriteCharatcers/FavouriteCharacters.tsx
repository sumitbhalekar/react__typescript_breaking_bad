import { Grid, useMediaQuery } from "@mui/material";
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
    const matches = useMediaQuery("(min-width:600px)");


    return (
        <>
            <HeaderFav />
            <div style={{ padding: 20 }}>
                <Grid container spacing={3} >
                    {favourites?.map((item: object, index: number) => {
                        return (
                            <Grid item xs={6} sm={4}
                                direction="row"
                                maxWidth="lg"
                            // margin={matches ? "auto auto" : "auto"}
                            >
                                <CharacterCard props={item} index={index} onPressFav={() => { removeFavourites(item) }} showFavorites={true} />
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </>);
}
import { ADD_TO_FAVOURITES, BREAKING_BAD_FAILURE, BREAKING_BAD_SUCCESS, CLEAR_SEARCH_DATA, PROCESSING_BREAKING_BAD, REMOVE_FAVOURITES, SEARCH_CHARACTER_SUCCESS } from "../action_types";


const initialState = {
    breakingBadData: null,
    breakingBadStatus: '',
    loading: false,
    favourites: [],
    searchedCharaters: []
};

const characterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case PROCESSING_BREAKING_BAD:
            return {
                ...state,
                loading: true
            }
        case BREAKING_BAD_SUCCESS:
            return {
                ...state,
                breakingBadData: action.payload?.data,
                breakingBadStatus: 'SUCCESS',
                loading: false
            }
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: [...state.favourites, action.payload],
                loading: false
            }
        case SEARCH_CHARACTER_SUCCESS:
            return {
                ...state,
                searchedCharaters: action.payload.data,
                loading: false
            }
        case CLEAR_SEARCH_DATA:
            return {
                ...state,
                searchedCharaters: '',
                loading: false
            }
        case REMOVE_FAVOURITES:
            return {
                ...state,
                favourites: action.payload,
                loading: false
            }
        case BREAKING_BAD_FAILURE:
            return {
                breakingBadStatus: 'FAILURE',
                loading: false
            };
        default:
            return state;
    }
};

export default characterReducer;
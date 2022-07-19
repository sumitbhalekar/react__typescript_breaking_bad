import axios from "axios";

export interface CharacterModel {
    char_id: number;
    name: string;
    birthday: string;
    occupation: string[];
    img: string;
    status: string;
    nickname: string;
    appearance: number[];
    portrayed: string;
    category: string;
    better_call_saul_appearance: any[];
}


export const apiConfig = axios.create({
    baseURL: "https://www.breakingbadapi.com",
    headers: {
        'Access-Control-Allow-Origin': true,
        'Content-Type': 'application/json',
    },
    withCredentials: false
});
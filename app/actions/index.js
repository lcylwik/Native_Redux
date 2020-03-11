import {AsyncStorage} from "react-native";

export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const QUOTES_AVAILABLE = 'QUOTES_AVAILABLE';
export const ADD_QUOTE = 'ADD_QUOTE';
export const UPDATE_QUOTE = 'UPDATE_QUOTE';
export const DELETE_QUOTE = 'DELETE_QUOTE';

//Import the sample data
import Data from '../instructions.json';
 
export function getData(){
    return (dispatch) => {
        setTimeout(() => {
            const data  = Data.instructions;
            dispatch({type: DATA_AVAILABLE, data:data});
        }, 2000);
 
    };
}
//import {ActionCreator} from 'redux';

// Sect action "names" as constants. 
export enum ProductActionTypes {
    GET_ALL = 'GET_ALL',
    GET_ONE = 'GET_ONE'
    // Need to set as action to call them below. Similar to bind(this). 
}

// Interface for our action type(s)
export interface IProductGetAllAction {
    type: ProductActionTypes.GET_ALL
}

// Interface for our second action type. 
export interface IProductGetOneAction {
    type: ProductActionTypes.GET_ONE
}

//Gathering all of the actions (great if you add more! )
export type ProductActions = IProductGetAllAction | IProductGetOneAction; 
import { ActionTypes } from "../contants/action-types"

const initialState = {
    students : []
}

export const studentReducer = (state = initialState, {type , payload}) => {
    switch(type){
        case ActionTypes.FETCH_STUDENTS :
            return {...state, students : payload};
        
        default :
            return state;
    }
}

export const selectedStudentReducer = (state = {}, {type, payload}) => {
    switch(type) {
        case ActionTypes.SELECTED_STUDENT : 
            return {...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_STUDENT : 
            return {}
        default :
            return state;
    }
}
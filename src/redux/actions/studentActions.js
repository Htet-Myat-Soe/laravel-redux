import { api } from "../../api/api"
import { ActionTypes } from "../contants/action-types"

export const fetchStudents = () => async (dispatch) => {
        const response = await api.get('/students');
        dispatch({
            type : ActionTypes.FETCH_STUDENTS,
            payload : response.data.students
        }) 
}

export const selectedStudent = (id) => async (dispatch) => {
    const response = await api.get('/students/'+id);
    dispatch({
        type : ActionTypes.SELECTED_STUDENT,
        payload : response.data.student
    })
}

export const removeSelectedStudent = () => dispatch => {
    dispatch({
        type : ActionTypes.REMOVE_SELECTED_STUDENT
    })
}
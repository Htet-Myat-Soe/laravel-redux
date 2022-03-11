import { combineReducers } from "redux";
import { selectedStudentReducer, studentReducer } from "./studentReducer";

const reducers = combineReducers({
    allStudents : studentReducer,
    student : selectedStudentReducer,
});

export default reducers;
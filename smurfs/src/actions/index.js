import axios from 'axios';

export const FETCH_SMURFS_START = "FETCH_SMURFS_START"
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS"
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR"
export const ADD_SMURF = "ADD_SMURF"
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS"
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL"

export const fetchSmurf = () => {
    return function(dispatch) {
        dispatch({ type: FETCH_SMURFS_START })
        axios
            .get("http://localhost:3333/smurfs")
            .then(res => {
            console.log(res);
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data })
            })
            .catch(() => {
            dispatch({ type: FETCH_SMURFS_ERROR })
            })
    }
}


export const addSmurf = add => dispatch => {
    dispatch({  type: ADD_SMURF });

        axios
            .post("http://localhost:3333/smurfs", add)
            .then(res => {
            dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
            })
            .catch(err => {
            dispatch({   type:  ADD_SMURF_FAIL, payload: err })
            })
        }
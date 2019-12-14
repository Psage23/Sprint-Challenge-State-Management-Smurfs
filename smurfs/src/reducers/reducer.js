import {FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_ERROR, ADD_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_FAIL} from '../actions';



const initialState = {
    smurfs: [],
    error: "",
    isFetching: false
}

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                error: false,
                isFetching: true
            };

        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                error: false,
                isFetching: false,
                smurf: action.payload
            };

        case FETCH_SMURFS_ERROR:
            return {
                ...state,
                error: true,
                isFetching: false
            };

        case ADD_SMURF:
            return {
                ...state,
                isFetching: true,
                error: false
            };

        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: false
            };
        
        case ADD_SMURF_FAIL:
            return {
                ...state,
                isFetching: false,
                error: true
            };

        default: 
            return state;
    }
}

export default Reducer;
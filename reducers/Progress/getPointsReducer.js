import {GET_POINTS, STORE_USERNAME} from '../../actions/Progress/actionTypes';
const initialState = {
    points: 0,
    username: ''
};

const getPointsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POINTS:
            return {
                ...state,
                points: action.payload
            };
            case STORE_USERNAME:
            return {
                ...state,
                username: action.payload
            };
        default:
            return state;

    }
};

export default getPointsReducer;
import {GET_POINTS, STORE_USERNAME} from './actionTypes';

const getPoints = (points: number) => ({
    type: GET_POINTS,
    payload: points,
});
const storeUsernaem = (username: string) =>({
    type: STORE_USERNAME,
    payload: username,
})

export {getPoints, storeUsernaem}
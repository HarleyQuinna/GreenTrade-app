import {connect} from 'react-redux'
import HomeScreen from './HomeView'
import {addPoints, updatePoints, getPoint} from '../../actions/Collector/actionCreator'
import {getPoints, storeUsernaem} from '../../actions/Progress/actionCreators';

const mapStateToProps = (state) => ({
    rewardPoints: state.collectorReducer.rewardPoints,
    points: state.getPointsReducer.points,
    username: state.getPointsReducer.username
})

const mapDispatchToProps = (dispatch) => ({
    addPoints: (payload) => dispatch(addPoints(payload)),
    updatePoints: (payload) => dispatch(updatePoints(payload)),
    getPoint: (payload) => dispatch(getPoint(payload)),
    getPoints: (points) => dispatch(getPoints(points)),
    storeUsernaem: (username) => dispatch(storeUsernaem(username)),

 })
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)


import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/dashboardReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer
})

export default rootReducer //Irá concatenar todos os reducers dá aplicação
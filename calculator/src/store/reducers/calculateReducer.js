import * as types from '../types'
import calculate from '../../utils/calculate'

let initialState = {
    expression: '',
    total: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_EXPRESSION:
            let expression = state.expression + action.payload
            return{
                ...state,
                expression,
                total: calculate(expression)
            }
    
        default:
            return state
    }
}
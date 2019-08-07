export const CHANGE_X_VALUE_SUM = 'CHANGE_X_VALUE_SUM'
export const changeXValueSum = value => dispatch => {
    dispatch({
        type: CHANGE_X_VALUE_SUM,
        payload: value
    })
}

export const CHANGE_Y_VALUE_SUM = 'CHANGE_Y_VALUE_SUM'
export const changeYValueSum = value => dispatch => {
    dispatch({
        type: CHANGE_Y_VALUE_SUM,
        payload: value
    })
}

export const CHANGE_X_VALUE_MULTIPLY = 'CHANGE_X_VALUE_MULTIPLY'
export const changeXValueMultiply = value => dispatch => {
    dispatch({
        type: CHANGE_X_VALUE_MULTIPLY,
        payload: value
    })
}

export const CHANGE_Y_VALUE_MULTIPLY = 'CHANGE_Y_VALUE_MULTIPLY'
export const changeYValueMultiply = value => dispatch => {
    dispatch({
        type: CHANGE_Y_VALUE_MULTIPLY,
        payload: value
    })
}

export const CHANGE_TOTAL_PRIME_NUMBER = 'CHANGE_TOTAL_PRIME_NUMBER'
export const changeTotalPrimeNumber = value => dispatch => {
    dispatch({
        type: CHANGE_TOTAL_PRIME_NUMBER,
        payload: value
    })
}

export const CHANGE_TOTAL_FIBONACCI = 'CHANGE_TOTAL_FIBONACCI'
export const changeTotalFibonacci = value => dispatch => {
    dispatch({
        type: CHANGE_TOTAL_FIBONACCI,
        payload: value
    })
}

export default {
    changeXValueSum,
    changeYValueSum,
    changeXValueMultiply,
    changeYValueMultiply,
    changeTotalPrimeNumber,
    changeTotalFibonacci
}
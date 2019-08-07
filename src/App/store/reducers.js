import initialState from "./state";
import {
    CHANGE_X_VALUE_SUM,
    CHANGE_Y_VALUE_SUM,
    CHANGE_X_VALUE_MULTIPLY,
    CHANGE_Y_VALUE_MULTIPLY,
    CHANGE_TOTAL_PRIME_NUMBER,
    CHANGE_TOTAL_FIBONACCI
} from './action'

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case CHANGE_X_VALUE_SUM:
            return {...state,
                x_sum: Number(payload),
                result_sum: (Number(payload) + Number(state.y_sum))
            }

        case CHANGE_Y_VALUE_SUM:
            return {...state,
                y_sum: Number(payload),
                result_sum: (Number(payload) + Number(state.x_sum))
            }

        case CHANGE_X_VALUE_MULTIPLY:
            return {...state,
                x_multiply: Number(payload),
                result_multiply: (Number(payload) * Number(state.y_multiply))
            }

        case CHANGE_Y_VALUE_MULTIPLY:
            return {...state,
                y_multiply: Number(payload),
                result_multiply: (Number(payload) * Number(state.x_multiply))
            }

        case CHANGE_TOTAL_PRIME_NUMBER:
            return {...state,
                total_prime_number: Number(payload),
            }

        case CHANGE_TOTAL_FIBONACCI:
            return {...state,
                total_fibonacci: Number(payload),
            }

        default:
            return state
    }
}
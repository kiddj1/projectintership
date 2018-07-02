import * as types from './types.js';

export function counterIncrement(){
    return {
       type: types.INCREMENT,
    }
    

}
export const counterDecrement = () => {
    return {
       type: types.DECREMENT,
    }

}
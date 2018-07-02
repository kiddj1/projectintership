import * as types from './types';

const people = [
    { name: 'Nader', age: 36 },
    { name: 'Amanda', age: 24 },
    { name: 'Jason', age: 44 }
]

const getPeople = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        return resolve(people)
        }, 3000)
    })
}

export function fetchData() {
  return (dispatch) => {
    dispatch(getData())
    getPeople()
      .then((data) => {
        dispatch(getDataSuccess(data))
      })
      .catch((err) => console.log('err:', err))
  }
}

export function getData() {
    return {
      type: types.FETCHING_DATA
    }
  }
  
  export function getDataSuccess(data) {
    return {
      type: types.FETCHING_DATA_SUCCESS,
      data,
    }
  }
  
  export function getDataFailure() {
    return {
      type: types.FETCHING_DATA_FAILURE
    }
  }
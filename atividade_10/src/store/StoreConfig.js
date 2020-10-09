import {createStore, combineReducers} from 'redux'

const reducers = combineReducers(
    {
        number: function(state, action){
            return {
                numeroUm: 25,
                numeroDois: 11
            }
        }
    }
)

function StoreConfig() {
    return createStore(reducers)
}

export default StoreConfig;

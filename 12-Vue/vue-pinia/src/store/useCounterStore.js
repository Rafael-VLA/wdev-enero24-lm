import { defineStore } from 'pinia'

import { actions } from './actions';
import { state } from './state';

export const useCounterStore = defineStore('counter', {
    state,
    actions, //actions: actions,
    getters: {
        esPar: (state) => {
            return state.count % 2 === 0; // si es igual a 0 es par
        }
    }
})
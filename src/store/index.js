import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        listEmployee:[]

    },
    mutations: {
        SET_EMPLOYEE(state,employee) {
            state.listEmployee=employee;
        },
        ADD_EMPLOYEE(state,dataAboutEmployee){
            state.listEmployee.push(dataAboutEmployee);
        }

    },
 

});


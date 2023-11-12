<template>
  <div id="app">
    <FormInput @addNewEmployee="addNewEmployee" />
    <ListEmployes :items="listEmployee"/>
  </div>
</template>

<script>
import FormInput from './components/FormInput.vue'
import {mapMutations} from 'vuex';
import {mapState} from 'vuex';
import ListEmployes from './components/ListEmployes.vue';

export default {
  name: 'App',
  components: {
    FormInput,
    ListEmployes
},
 
  methods: {
    // как будто данные приходят с сервера
    fetchData() {
      return [
        { firstName: 'Иван',
          lastName: 'Иванов',
          experience: 2,
          age: 32,
          address: 'г.Архангельск, ул.Советская д.3 кв.5'
        },
        { firstName: 'Петя',
          lastName: 'Петров',
          experience: 5,
          age: 38,
          address: 'г.Архангельск, ул.Юрия Гагарина д.23 кв.12'
        },
      ]
    },
    addNewEmployee(data) {
      this.ADD_EMPLOYEE(data);
    },
    ...mapMutations(['SET_EMPLOYEE','ADD_EMPLOYEE'])
  },
  computed:{
    ...mapState(['listEmployee'])
  },
  created() {
    this.SET_EMPLOYEE(this.fetchData());
  }

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

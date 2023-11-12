<template>
  <form @submit="onSave($event)" class="modalWindow">
      <h4 class="title">Введите данные о сотруднике</h4>
      <h5 class="subtitle">Имя </h5>
      <input  type="text" required pattern="^[A-Za-zА-ЯЁа-яё]+" title="Только буквы" v-model.trim="firstName">
      <h5 class="subtitle">Фамилия </h5>
      <input type="text" pattern="^[A-Za-zА-ЯЁа-яё]+" title="Только буквы" required v-model.trim="lastName">
      <h5 class="subtitle">Стаж </h5>
      <input v-bind:class="{ errorBorder: errorNegativeNumbers }" type="number" min="0" required  :value="experience"
      @input="handleInputExperience($event)">
      <span class="error"  v-if="errorNegativeNumbers">{{ errorNegativeNumbers }}</span>
      <h5 class="subtitle">Возраст</h5>
      <input v-bind:class="{ errorBorder: errorMore18 }" type="number" min="18" required :value="age"
      @input="handleInputAge($event)">
      <span class="error"  v-if="errorMore18">{{ errorMore18 }}</span>
      <h5 class="subtitle">Адрес</h5>
      <input type="text" required v-model.trim="address" >
      <button type="submit" class="save"         :disabled="isSubmitDisabled">Добавить сотрудника</button>
  </form>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    
  },
  data() {
    return {
        errorNegativeNumbers: '',
        errorMore18:'',
        firstName: '',
        lastName: '',
        experience: '',
        age: '',
        address: ''
      }
  },
  computed: {
    isSubmitDisabled() {
      return Boolean(this.errorMore18 || this.errorNegativeNumbers)
    }
  },
  methods: {
    onSave(e) {
      e.preventDefault();
      const data={
        firstName: this.firstName,
        lastName:this.lastName,
        experience:this.experience,
        age:this.age,
        address:this.address

      }
      this.$emit('addNewEmployee',data);
      this.firstName='';
      this.lastName='';
      this.experience='';
      this.age='';
      this.address='';
    },
    handleInputExperience(e) {
      this.experience=e.target.value;
      this.errorNegativeNumbers=this.experience>0? '' :
      'Опыт не может быть меньше 0'
    },
    handleInputAge(e) {
      this.age =e.target.value;
      this.errorMore18=this.age<18 ? 'Только лица старше 18' : ''
    }
  }

}
</script>


<style scoped>
  .modalWindow {
    height: 290px;
    width: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background: beige;
    margin-bottom: 50px;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
  }
  .title {
    margin: 0;
  }
  .error {
    font-size: 8px;
    text-align: left;
    color: red;
    margin-top: 3px;
  }
  .errorBorder {
    border: 1px solid red;
  }
  .subtitle {
    margin: 5px 0 5px 0;
    text-align: left;
  }
  .save {
    width: 88px;
    height: 40px;
    font-size: 10px;
    border-radius: 10px;
    border: none;
    margin: 15px auto 0 auto;
    background: gainsboro;
    color: black;
    padding: 5px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
   
  }
  .save:hover {
    background-color: #f5f1f1;
    
  }
  input {
    outline: none;
    border:none;
    border-radius: 5px;
    height: 20px;
    padding: 0 10px;
  }
</style>

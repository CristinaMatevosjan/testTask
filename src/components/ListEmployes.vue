<template>
    <div >
        <h4 class="list">Список сотрудников:</h4>
        <table>
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Фамилия</th>
                    <th>Опыт</th>
                    <th>Возраст</th>
                    <th>Адрес</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.id">
                    <td><input type="text" v-model="item.firstName"></td>
                    <td><input type="text" v-model="item.lastName"/></td>
                    <td ><input type="number" min="0"  v-model="item.experience"/></td>
                    <td ><input type="number" min="18"  v-model="item.age" /></td>
                    <td class="address"><input type="text" v-model="item.address"/></td>
                </tr>
            </tbody>
        </table>
        
    </div>
</template>

<script>
export default {
    name: 'ListEmployes',
    props: {
        items:{
            type:Array,
            default() {
                return [];
            }
        }
    },
   
};
</script>

<style lang="css" scoped>

    table {
        border-collapse: collapse;
        margin: 0 auto;

    }
    td {
        border: 1px solid black;
    }
    th {
        border: 1px solid black;

    }
    .address {
        width: 35%;
    }
    input {
        border: none;
        outline: none;
        width: 100%;
        display: block;
        
    }
    .list {
        margin: 0 auto 15px auto;

    }
    .error {
        border: 1px solid red;

    }

</style>
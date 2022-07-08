<template>
  <div>
    <v-btn v-on:click="changeSort">Сменить сортировку</v-btn>
    <div class="drivers">
      <div class="driver" v-for="(Driver, id) in Drivers?.results" v-bind:key="id">
        <h3>Id водителя: {{ Driver?.id }}</h3>
        <h4>Имя: {{ Driver?.first_name }}</h4>
        <h4>Фамилия: {{ Driver?.last_name }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DriversPage',
  data() {
    return {
      Drivers: null,
      Sort: false, 
      }
   },
  computed: {
    ...mapGetters({
      DriversData: 'main/getDrivers',
    }),
  },
  async mounted() {
    const data = await this.DriversData
    this.Drivers = data.data
  },
  methods: {
    changeSort(){
        this.Sort = !this.Sort
    },
  }
}
</script>

<style scoped>
  .driver{
    color: black;
    background-color: white;  
    border: 1px;
    width: 300px;
    height: 120px; 
    padding: 20px;
    margin: 10px; 
  } 

  .drivers{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
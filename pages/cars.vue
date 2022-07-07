<template>
  <div>
    <div class="cars">
      <div class="car" v-for="(Car,id) in Cars?.results" v-bind:key="id">
        <h3>Id машины: {{ Car?.id }}</h3>
        <h4>Модель: {{ Car?.model }}</h4>
        <h4>Гос номер: {{ Car?.number }}</h4>
      </div>
    </div>
    <CarForm/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CarForm from "../components/forma.vue"
export default {
  name: 'CarsPage',
  components: {
    CarForm
  },
  data() {
    return {
      Cars: null,
      }
   },
  computed: {
    ...mapGetters({
      CarsData: 'main/getCars',
    }),
  },
  async mounted() {
    const data = await this.CarsData
    this.Cars = data.data
    console.log(this.Cars)
  },
}
</script>

<style scoped>
  .car{
    color: black;
    background-color: white;  
    border: 1px;
    width: 200px;
    height: 120px; 
    padding: 20px;
    margin: 10px; 
  } 

  .cars{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
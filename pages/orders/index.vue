<template>
  <div>
    <v-checkbox v-model="Done" :label="`Показать на странице только завершенные: ${Done.toString()}`"></v-checkbox>
    <div class="orders">
      <div class="order" v-for="(Order,id) in Orders?.results.filter(el=>{
        if (Done){
          return el?.status === 'DONE'
        }
        else{
          return true
        }
        })" v-bind:key="id">
        <h3>Id заказа: {{ Order?.id }}</h3>
        <h4>Id юзера: {{ Order?.user_info?.id }}</h4>
        <h4>Имя юзера: {{ Order?.user_info?.first_name }}</h4>
        <h4>Id водителя: {{ Order?.driver_info?.id }}</h4>
        <h4>Имя водителя: {{ Order?.driver_info?.first_name }}</h4>
        <h4>Id авто: {{ Order?.car_info?.id }}</h4>
        <h4>Модель авто: {{ Order?.car_info?.model }}</h4>
        <h4>Гос номер авто: {{ Order?.car_info?.number }}</h4>
        <h4>Статус заказа: {{ Order?.status }}</h4>
      </div>
    </div>
    <v-btn v-if="Orders?.previous" @click="getPaginatedOrders(Orders?.previous)">Previous</v-btn>
    <v-btn v-if="Orders?.next" @click="getPaginatedOrders(Orders?.next)">Next</v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  name: 'OrdersPage',
  data() {
    return {
      Orders: null,
      Done: false, 
      }
   },
  computed: {
    ...mapGetters({
      OrdersData: 'main/getOrders',
    }),
  },
  methods: {
    async getPaginatedOrders(url){
      const response = await axios.get(url)
      this.Orders = response.data
    }
  },
  async mounted() {
    const data = await this.OrdersData
    this.Orders = data.data
    console.log(this.Orders)
  },
}
</script>

<style scoped>
  .order{
    color: black;
    background-color: white;  
    border: 1px;
    width: 250px;
    height: 250px; 
    padding: 20px;
    margin: 10px; 
  } 

  .orders{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>

<template>
  <v-form ref="form" v-model="valid">
    <v-text-field
      v-model="model"
      :rules = "ModelRules"
      label="Модель"
      required
    ></v-text-field>

    <v-text-field
      v-model="number"
      :rules = "NumberRules"
      label="Гос номер"
      required
    ></v-text-field>
    <div v-if="NumberError">sdf</div>
    <v-btn
      :disabled="!valid"
      color="success"
      @click="send"
    >
      Сохранить
    </v-btn>
  </v-form>
</template>

<script>
import {mapActions} from "vuex"
export default {
  name: 'CarForm',
  data() {
    return {
      valid: true,
      model: "",
      number: "", 
      ModelError: false,
      NumberError: false,  
      NumberRules: [
        v => !!v || 'Number is required',
        v => /^[A-Z]{1}[0-9]{3}[A-Z]{2}[0-9]{2,3}$/.test(v) || 'Number must be valid',
      ],
      ModelRules: [
        v => !!v || 'Model is required',
      ],
      }
  },
  methods: {
    ...mapActions({newCar:"main/newCar", refetchCars:"main/refetchCars"}),
    validate () {
        this.$refs.form.validate()
    },
    async send(){
      const response = await this.newCar({model: this.model, number: this.number})
      if (response.status < 300){
        document.location.reload()
      }
    }
  },
}
</script>

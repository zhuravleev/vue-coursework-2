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
export default {
  name: 'CarForm',
  data() {
    return {
      valid: true,
      Model: "",
      Number: "", 
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
    validate () {
        this.$refs.form.validate()
    },
    send(){
    //   const numberMask = "/^[A-Z]{1}[0-9]{3}[A-Z]{2}[0-9]{2}$/gm"
      this.NumberError = !this.Number.match(/^[A-Z]{1}[0-9]{3}[A-Z]{2}[0-9]{2,3}$/gm)
    }
  },
}
</script>

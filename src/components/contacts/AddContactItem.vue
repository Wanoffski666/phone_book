<template lang="html">
  <form @submit.prevent = "onSubmit">
    <input type="text" placeholder ="Type contact name here" v-model = "name">
    <button type="submit" name="button">create</button>
  </form>
</template>

<script>
export default {
  name: 'AddContactItem',
  data() {
    return {
      name: ''
    }
  },
  methods: {
    onSubmit() {
      console.log('Submit', this.name);
      if (this.name.trim()) {
        const newContact = {
          id: Date.now(),
          name: this.name
        }

        this.$emit('add-contact', newContact)
        this.name = ''
      }
    }
  },
  components: {
  }
}
</script>

<style lang="css" scoped>
form  {
  display: flex;
}
input {
  width: 350px;
}
</style>

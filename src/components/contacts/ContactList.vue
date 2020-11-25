<template lang="html">
  <ul>
    <ContactItem
      v-for="(contact, i) of contacts"
      v-bind:contact = "contact"
      v-bind:index = "i+1"
      v-on:remove-contact="removeContact"
    />
  </ul>
</template>

<script>
import ContactItem from '@/components/contacts/ContactItem'
export default {
  name: 'ContactList',
  props: ['contacts'],
  components: {
    ContactItem
  },
  methods: {
    removeContact(id){
      //this.$emit('remove-contact', id)
      if(confirm("Do you really want to delete?")){
        this.$emit('remove-contact', id)
      }
    }
  }
}
</script>

<style lang="css" scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>

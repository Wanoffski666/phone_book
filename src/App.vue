<template>
  <div id="app">
    <h1>Phone book</h1>
    <AddContactItem
      @add-contact = "addContact"
    />
    <hr>
    <ContactList
    v-bind:contacts="contacts"
    @remove-contact="removeContact"
    />
  </div>
</template>

<script>
import ContactList from '@/components/contacts/ContactList';
import AddContactItem from '@/components/contacts/AddContactItem';
export default {
  name: 'App',
  data() {
    return {
      contacts: [
      ]
    }
  },
  components: {
    AddContactItem,
    ContactList
  },
  methods: {
    removeContact(id) {
      this.contacts = this.contacts.filter(c => c.id !== id)
    },
    addContact(contact) {
      this.contacts.push(contact)
    }
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

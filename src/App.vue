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
        {id: 1, name: 'name', number: '89262772323'},
        {id: 2, name: 'name1', number: '89262472323'},
        {id: 3, name: 'name2', number: '89262732323'}
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

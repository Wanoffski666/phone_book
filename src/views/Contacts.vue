<template>
  <div>
    <AddContactItem
      @add-contact = "addContact"
    />
    <ContactList
    v-if="contacts.length"
    v-bind:contacts="contacts"
    @remove-contact="removeContact"
    />
    <p v-else>No contacts avialable</p>
    <a href="/Info">asdasdasd</a>
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

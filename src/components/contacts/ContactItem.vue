<template lang="html">
  <li>
    <span>
      <strong>{{index}}</strong>
      {{contact.name}}
    </span>
  <div>
    <button type="button" name="button" class = "info">
      Info
    </button>
    <button type="button" name="button" class = "rm" v-on:click="$emit('remove-contact',contact.id)" onClick="return confirm('Are you sure?')">
      &times;
    </button>
  </div>
  </li>
</template>

<script>
export default {
  name: 'ContactItem',
  props: {
    contact: {
      type: Object,
      required: true
    },
      index: Number
  }
}
</script>

<style lang="css" scoped>
  li  {
    text-align: left;
    height: 35px;
    border: 2px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5re, 2rem;
    margin-bottom: 1rem;
  }
  .info {
    background: blue;
    color: #fff;
    height: 35px;
    width: 105px;
  }
  .rm {
    height: 35px;
    width: 35px;
    background: red;
    color: #fff;
  }
</style>

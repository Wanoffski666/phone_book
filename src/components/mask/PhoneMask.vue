<template>
  <the-mask
    mask="+# (###) ### ## ##"
    :masked="true"
    placeholder="+7 (000) 000 00 00"
    @input="$emit('input', $event)"
  ></the-mask>
</template>

<script>
export default {
  name: "PhoneMask",
  components: {},
  props: ["value"],
  watch: {
    value() {
      this.$el.value = this.value;
    }
  }
};
</script>

<style scoped></style>

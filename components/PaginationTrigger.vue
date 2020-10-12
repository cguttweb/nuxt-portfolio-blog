<template>
  <span @click="onClick">{{ pageNumber }}</span>
</template>

<script>
export default {
  props: {
    pageNumber: {
      type: Number,
      required: true
    }
  },
  methods: {
    onClick(){
      this.$emit('loadedPage', this.pageNumber)
    }
  }
}
</script>

<style>

</style>
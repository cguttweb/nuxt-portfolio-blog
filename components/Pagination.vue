<template>
  <div class="text-white text-center">
    <button
      :disabled="PreviousButtonDisabled"
      @click="previousPage"
    >
      ←
    </button>
        <PaginationTrigger 
    :pageNumber="currentPage"
    @loadPage="onLoadPage"
    />
    <button
      :disabled="NextButtonDisabled"
      @click="nextPage"
    >
      →
    </button>

  </div>
</template>

<script>
    export default {
        props: {
            currentPage: {
                type: Number,
                required: true
            },
            pageCount: {
                type: Number,
                required: true
            }
        },
        computed: {
            PreviousButtonDisabled(){
                return this.currentPage === 1
            },
            NextButtonDisabled(){
                return this.currentPage === this.pageCount
            }
        },
        methods: {
            nextPage(){
                this.$emit('nextPage')
            },
            previousPage(){
                this.$emit('previousPage')
            }
        }
    }
</script>
<template>
    <paginate class="flex justify-center space-between"
    :page-count="5"
    :click-handler="paginate"
    :prev-text="'Prev'"
    :next-text="'Next'"
    :container-class="pagination"
    >
    </paginate>
</template>

<script>
import Paginate from 'vuejs-paginate'

export default {
    components: {
        Paginate
    },
    methods: {
        paginate(pageNumber){
            console.log(pageNumber)
        }
    }
}
</script>

<style scoped>
.pagination {
    @apply py-2;
}
</style>
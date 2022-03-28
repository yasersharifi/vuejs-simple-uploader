<template>
    <div :class="errorList.length ? 'flex' : 'hidden'" class="col-span-4 w-full px-6 py-3 flex-col gap-6">
        <div v-for="(item, index) in errorList" 
            :key="index"
            class="px-3 py-1 bg-red-100 border border-solid border-red-300 text-red-500 flex items-center rounded-16">
            {{ item }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "DisplayErrors",
        props: {
            errorList: {
                type: Array,
                required: true,
            },
        },
    }
</script>
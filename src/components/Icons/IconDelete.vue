<template>
    <path :id="`add-${svgId}`" data-name="`add-${svgId}`" d="M9,18a9,9,0,1,1,9-9,9,9,0,0,1-9,9ZM9.818,4.909a.818.818,0,0,0-1.636,0c-.034,3.709-.034,4.678,0,8.182a.818.818,0,0,0,1.636,0Z" transform="translate(18) rotate(90)" fill="#F58888" opacity="0.7"/>
</template>

<script>
export default {
    name: "IconDelete",
    props : {
        svgId : {
            type : String,
            default : 'linear-gradient'
        }
    }
}
</script>

<style scoped>

</style>
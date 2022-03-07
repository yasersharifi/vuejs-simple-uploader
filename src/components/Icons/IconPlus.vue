<template>
    <g :id="`add-${svgId}`" transform="translate(0.75 0.75)">
        <path id="add_4_" data-name="add (4)" d="M9,0a9,9,0,1,0,9,9A9,9,0,0,0,9,0Z" transform="translate(18) rotate(90)" fill="none" stroke="#707070" stroke-width="1.5" opacity="0.7"/>
        <line id="Line_572" data-name="Line 572" x2="8" transform="translate(5 9)" fill="none" stroke="#707070" stroke-linecap="round" stroke-width="1.5"/>
        <path id="Path_3236" data-name="Path 3236" d="M0,0V8.018" transform="translate(9 5)" fill="none" stroke="#707070" stroke-linecap="round" stroke-width="1.5"/>
    </g>
</template>

<script>
export default {
    name: "IconPlus",
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
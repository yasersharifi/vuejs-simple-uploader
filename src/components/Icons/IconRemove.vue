<template>
    <path :id="`remove-${svgId}`" data-name="`remove-${svgId}`" d="M10,1a9,9,0,1,0,9,9,9,9,0,0,0-9-9Zm.818,13.091a.818.818,0,0,1-1.636,0c-.034-3.709-.034-4.678,0-8.182a.818.818,0,0,1,1.636,0Z" transform="translate(19 -1) rotate(90)" fill="#989898" opacity="0.7"/>
</template>
<script>
export default {
    props : {
        svgId : {
            type : String,
            default : 'linear-gradient'
        }
    }
}
</script>
<template>
    <drag-drop-uploader></drag-drop-uploader>
</template>

<script>
    import DragDropUploader from '@/components/DragDropUploader.vue'

    export default {
        name: "FileUploader",
        components: { DragDropUploader },
    }
</script>
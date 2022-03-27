<template>
    <label :class="images.length < 8 ? 'grid' : 'hidden'" for="file-uploader"
            class="w-full h-[200px] bg-white border border-solid border-[#D3D3D3] rounded-xl grid-cols-1 grid-rows-2 cursor-pointer relative"
            @dragover="$emit('dragover', $event)" @dragleave="$emit('dragleave', $event)" @drop="$emit('drop', $event)">
        <span class="row-span-1 text-sm font-tajawal-medium flex flex-col items-center justify-end">
            <span>Drop files here</span>
            <span>to upload</span>
        </span>
        <span class="row-span-1  text-sm font-tajawal-light flex flex-col items-center justify-center">
            <span>Images wider than</span>
            <span>1000 pixels work has</span>
        </span>

        <!-- start overlay -->
        <span class="flex w-full h-full cursor-pointer absolute top-0 left-0"></span>
        <!-- end overlay -->
    </label>
    <input v-show="false"
            type="file"
            id="file-uploader"
            @change="$emit('loadImage', $event)"
            ref="file"
            multiple>
</template>

<script>
    export default {
        name: "UploadBox",
        props: {
            images: {
                type: Array,
                required: true
            }
        }
    }
</script>
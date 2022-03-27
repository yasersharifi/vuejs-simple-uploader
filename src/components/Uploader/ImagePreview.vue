<template>
    <div v-for="(item, index) in images"
        :key="index"
        class="w-full h-[200px] rounded-xl relative z-1">
        <img :src="item.src"
                class="w-full h-full rounded-xl"
                alt="">
        <div v-click-outside="$emit('hideImageSettingModal')"
            class="flex items-center justify-center w-7 h-7 bg-[#ABABAB] absolute top-2 right-2 z-10 rounded-full cursor-pointer">
            <div class="w-full h-full flex items-center justify-center"
                    @click.stop="$emit('toggleImageSettingModal', index)">
                <icon-base type="edit"
                        classes="w-5 h-5"
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#ffffff"
                        stroke-width="2"></icon-base>
            </div>
            <!-- start popup -->
            <span :class="item.imageSettingModalIsActive ? 'flex' : 'hidden'" class="flex-col gap-3 p-4 w-[158px] h-[88] text-sm font-tajawal-medium text-[#A6A5A6] bg-white absolute top-6 -left-6 cursor-auto rounded-lg z-20">
                <button type="button"
                        @click="$emit('makeImageCover', index)">Make Cover Image</button>
                <button type="button"
                        @click="$emit('deleteImage', index)">Delete Image</button>
            </span>
            <!-- end popup -->
        </div>

        <!-- start star icon -->
        <div :class="item.isCover ? 'flex' : 'hidden'"
                class="flex items-center justify-center w-7 h-7 bg-[#ABABAB] absolute bottom-2 right-2 z-20 rounded-full cursor-pointer">
            <icon-base type="star"
                    classes="w-5 h-5"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#ffffff"
                    stroke-width="2"></icon-base>
        </div>
        <!-- end star icon -->
    </div>
</template>

<script>
    import ClickOutside from "vue-click-outside";

    export default {
        name: 'ImagePreview',
        props: {
            images: {
                type: Array,
                require: true,
            }
        },
        directives: {
            ClickOutside
        }
    }
</script>
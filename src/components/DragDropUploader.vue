<template>
    <div class="container mx-auto">
        <h1 class="block mb-6 text-2xl">File Pond</h1>
        <div class="grid grid-cols-4 p-6 gap-6 bg-[#F8F8F8] border border-solid border-[#D3D3D3] rounded-xl">
            <!-- Start Previews -->
            <div v-for="(item, index) in images"
                 :key="index"
                 class="w-full h-[200px] rounded-xl relative z-1">
                <img :src="item.src"
                     class="w-full h-full rounded-xl"
                     alt="">
                <div v-click-outside="hideImageSettingModal"
                    class="flex items-center justify-center w-7 h-7 bg-[#ABABAB] absolute top-2 right-2 z-10 rounded-full cursor-pointer">
                    <div class="w-full h-full flex items-center justify-center"
                         @click.stop="toggleImageSettingModal(index)">
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
                                @click="makeImageCover(index)">Make Cover Image</button>
                        <button type="button"
                                @click="deleteImage(index)">Delete Image</button>
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
            <!-- End Previews -->

            <!-- start upload box -->
            <label :class="images.length < 8 ? 'grid' : 'hidden'" for="file-uploader"
                   class="w-full h-[200px] bg-white border border-solid border-[#D3D3D3] rounded-xl grid-cols-1 grid-rows-2 cursor-pointer"
                   @dragover="dragover" @dragleave="dragleave" @drop="drop">
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
                    @change="loadImage($event)"
                   ref="file">
            <!-- end upload box -->
        </div>
    </div>
</template>

<script>
    import ClickOutside from "vue-click-outside";

    export default {
        name: "FilePons",
        data() {
            return {
                images: [
                    // {
                    //     src: '/assets/images/pizza1.jpg',
                    //     imageSettingModalIsActive: false,
                    //     base64: null,
                    //     isCover: false
                    // },
                ],
            }
        },
        methods: {
            hideImageSettingModal() {
                console.log('outside')
                if (this.images) {
                    this.images.forEach((item, index) => {
                        if (this.images[index].imageSettingModalIsActive) {
                            this.images[index].imageSettingModalIsActive = false; // hide modal
                        }
                    });
                }
            },
            toggleImageSettingModal(index) {
                console.log('toggle')
                this.images[index].imageSettingModalIsActive = ! this.images[index].imageSettingModalIsActive; // toggle modal
            },
            loadImage(event) {
                let selectedImg = event.target.files[0];
                let previewImg = URL.createObjectURL(selectedImg);

                //base 64
                let canvasImg = null;
                let self = this;
                const reader = new FileReader();
                reader.onload = function(e) {
                    canvasImg = e.target.result; // when success
                    // add to images array
                    self.images.push({
                        src: previewImg,
                        imageSettingModalIsActive: false,
                        base64: canvasImg,
                        isCover: false,
                    })
                    //
                    console.log(self.images)
                };
                reader.onerror = function(error) {
                    console.log(error); // when error
                };
                reader.readAsDataURL(selectedImg);

            },
            makeImageCover(imageIndex) {
                if (this.images) {
                    this.images.forEach((item, index) => {
                        if (index === imageIndex) {
                            this.images[imageIndex].isCover = true; // choose this image for cover
                        } else {
                            this.images[index].isCover = false; // clear from cover
                        }
                    });
                }
            },
            deleteImage(index) {
                if (this.images && this.images[index]) {
                    this.images.splice(index, 1); // deleted images
                }
            },
            drop(event) {
                event.preventDefault();
                let selectedImg = event.dataTransfer.files[0];
                let previewImg = URL.createObjectURL(selectedImg);

                //base 64
                let canvasImg = null;
                let self = this;
                const reader = new FileReader();
                reader.onload = function(e) {
                    canvasImg = e.target.result; // when success
                    // add to images array
                    self.images.push({
                        src: previewImg,
                        imageSettingModalIsActive: false,
                        base64: canvasImg,
                        isCover: false,
                    })
                    //
                    console.log(self.images)
                };
                reader.onerror = function(error) {
                    console.log(error); // when error
                };
                reader.readAsDataURL(selectedImg);
                event.currentTarget.classList.remove('border-dashed');
            },
            dragover(event) {
                event.preventDefault();
                // Add some visual fluff to show the user can drop its files
                if (!event.currentTarget.classList.contains('border-dashed')) {
                    event.currentTarget.classList.add('border-dashed');
                }
            },
            dragleave(event) {
                // Clean up
                event.currentTarget.classList.remove('border-dashed');
            },
        },
        directives: {
            ClickOutside
        }

    }
</script>

<style>

</style>

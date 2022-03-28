<template>
    <div :class="cropModal ? 'flex' : 'hidden'" id="defaultModal" tabindex="-1" aria-hidden="true" class="items-center justify-center w-full h-full absolute top-0 left-0 z-40" style="background-color: rgba(0, 0, 0, .5)">
        <div class="relative p-4 w-full h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow">
                <!-- Modal header -->
                <div class="flex justify-between items-start p-5 rounded-t border-b bg-[#DEDEDE]">
                    <h3 class="text-xl  lg:text-2xl text-[#707070]">
                        Crop Images
                    </h3>
                    <button @click="$emit('toggleCropModal', false)" type="button" class="text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="defaultModal">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="p-6 space-y-6">
                    <!-- Cropper Area -->
                    <div class="grid grid-cols-2">
                        <div class="col-span-1">
                            <cropper
                                class="cropper"
                                :src="cropImage"
                                :stencil-props="{
                                aspectRatio: 10/12
                            }"
                                @change="changeCrop"
                            />
                        </div>
                        <!-- Preview Area -->
                        <div class="col-span-1 flex item-center justify-center">
                            <preview
                                :width="400"
                                :height="400"
                                :image="result.image"
                                :coordinates="result.coordinates"
                            />
                        </div>
                    </div>
                    <div class="flex items-center flex-wrap gap-3 justify-center">
                        <div v-for="(item, index) in images"
                                :key="index"
                                class="w-[100px] h-[100px] rounded-xl cursor-pointer">
                            <img :src="item.src"
                                    class="w-full h-full rounded-xl"
                                    alt="">
                        </div>
                    </div>
                </div>
                <!-- Modal footer -->
                <div class="flex items-center p-4 space-x-2 rounded-b">
                    <button data-modal-toggle="defaultModal" type="button" class="text-[#2CA9C9] font-medium rounded-lg text-sm px-5 py-2.5 text-center">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Cropper, Preview } from 'vue-advanced-cropper';
    import 'vue-advanced-cropper/dist/style.css';

    export default {
        name: "CropModal",
         components: {
            Cropper,
            Preview
        },
        props: {
            images: {
                type: Array,
                required: true
            },
            cropModal: {
                type: Boolean,
                default: false
            }
        },
        data: () => ({
            cropImage: null,
            croppingImageIndex: 0,
            result: {
                coordinates: null,
                image: null
            }
        }),
        // changeCrop({ coordinates, image, canvas }) {
        //     console.log(coordinates, canvas)
        //     this.result = {
        //         coordinates,
        //         image
        //     };
        //     this.images[this.croppingImageIndex]['coordinates'] = coordinates;
        //     console.log(this.result)
        // },
        // changeDefaultCropImage(index) {
        //     // change cropper image
        //     this.croppingImageIndex = index;
        //     this.cropImage = this.images[index].src;
        // }
    }
</script>
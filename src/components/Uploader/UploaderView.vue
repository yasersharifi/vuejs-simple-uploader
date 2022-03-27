<template>
    <div class="container mx-auto">
        <h1 class="block my-6 text-2xl text-[#494949]">File Uploader</h1>
        <div class="grid grid-cols-4 p-6 gap-6 bg-[#F8F8F8] border border-solid border-[#D3D3D3] rounded-xl">
            <!-- Start Previews -->
           <image-preview :images="images"
                            @hideImageSettingModal="hideImageSettingModal"
                            @toggleImageSettingModal="toggleImageSettingModal"
                            @makeImageCover="makeImageCover"
                            @deleteImage="deleteImage">
            </image-preview>
            <!-- End Previews -->

            <!-- start upload box -->
            <upload-box :images="images"
                        @loadImage="loadImage"></upload-box>
            <!-- end upload box -->
        </div>
    </div>
</template>

<script>
    import ImagePreview from '@/components/Uploader/ImagePreview.vue';
    import UploadBox from '@/components/Uploader/UploadBox.vue';

    export default {
        name: "UploaderView",
        components: {
            ImagePreview,
            UploadBox
        },
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
            createBase64Images(event) {
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
    }
</script>

<style>

</style>

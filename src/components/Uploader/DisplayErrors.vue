<template>
    <div :class="errors.length ? 'flex' : 'hidden'" class="w-full px-6 py-3 flex-col gap-6">
        <div v-for="(item, index) in errors" 
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
            errorMessage: {
                type: Array,
                required: true,
            }
        },
        data: () => ({
            errors: [],
        }),
        computed: {
            allErrors() {
                let self = this;
                this.errorList.forEach(item => {
                    if (Object.hasOwn(self.errorMessage, item)) {
                        self.errors.push(self.errorMessage[item]);
                    }
                })
                return self.errors;
            }
        }
    }
</script>
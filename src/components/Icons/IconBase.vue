<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :class="classes"
        :width="width"
        :height="height"
        :viewBox="viewBox"
        :aria-labelledby="type"
        :fill="fill"
        role="presentation"
    >
        <component :svgId="svgId" :is="iconName" />
    </svg>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'delete',
        },
        viewBox: {
            type: String,
            default: '0 0 20 20',
        },
        svgId : {
            type : String,
            default : null
        },
        width: {
            type: [Number, String],
            default: 20,
        },
        height: {
            type: [Number, String],
            default: 20,
        },
        fill: {
            type: String,
            default: 'none'
        },
        classes: {
            type: String,
            default: 'fill-current'
        }
    },

    computed: {
        iconName() {
            return `icon-${this.type}`
        },
    },
}
</script>

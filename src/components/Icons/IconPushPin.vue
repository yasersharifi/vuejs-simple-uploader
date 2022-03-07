<template>
    <g :id="`push-pin-${svgId}`" transform="translate(-904 603.557)">
        <g id="Group_17278" data-name="Group 17278" transform="translate(2 4.072)">
            <g id="Group_17279" data-name="Group 17279">
                <circle :id="`ellipse-${svgId}`" data-name="`ellipse-${svgId}`" cx="11" cy="11" r="11" transform="translate(902 -607.629)" fill="#707070"/>
            </g>
            <path :id="`path-${svgId}`" data-name="`path-${svgId}`" d="M367.846,63.608a.7.7,0,0,0,.214-.5V61.7a.7.7,0,0,0-.7-.7H361.7a.7.7,0,0,0-.7.7v1.4a.7.7,0,0,0,.205.5l1.2,1.2v.822l-1.2,1.2a.7.7,0,0,0-.205.5v1.4a.7.7,0,0,0,.7.7h2.1v3.507a.7.7,0,1,0,1.4,0V69.416h2.151a.7.7,0,0,0,.7-.7v-1.4a.7.7,0,0,0-.214-.5l-1.236-1.2V64.8Zm-2.425,2.805,1.236,1.2v.4H362.4V67.6l1.2-1.2a.7.7,0,0,0,.206-.5v-1.4a.7.7,0,0,0-.206-.5l-1.2-1.2V62.4h4.255v.4L365.422,64a.7.7,0,0,0-.214.5v1.4A.7.7,0,0,0,365.422,66.413Z" transform="translate(548.47 -662.939)" fill="#fafafa"/>
        </g>
    </g>
</template>

<script>
export default {
    name: "IconPushPin",
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
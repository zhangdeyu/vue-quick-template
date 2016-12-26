<style lang="stylus">
#app
    display: flex;
    .name
        background: #cccccc;
        line-height: 20px;
        text-align: center;
        min-width: 60px;
        height: 20px
</style>
<template lang="pug">
#app
    .name {{name}}
    input(type="text", v-model="name")
</template>
<script>
export default {
    name: 'app',
    data() {
        return {
            name: 'Derek'
        }
    }
}
</script>
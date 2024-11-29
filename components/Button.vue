<!-- TEMPLATE -->
<template>
    <button class="btn" :class="buttonClass" :style="buttonStyle">
        <span class="m-auto">{{ buttonName }}</span>
    </button>
</template>


<!-- SCRIPT -->
<script setup lang="ts">
const global = useGlobalStore()
const buttonStyle = computed(() => {
    if (props.buttonClass === 'primary') {
        return { 
            background: global.primary,
            border: '5px solid ' + global.primary
        }
    }
})

const props = defineProps<{
    buttonClass: String,
    buttonName: String
}>()
</script>


<!-- STYLE -->
<style scoped>
.primary {
    padding-left: 20px;
    padding-right: 20px;
    height: 45px;
    width: 200px;
    color: white;
    box-shadow: 0px 5px rgb(35, 160, 35);
    border-radius: 15px;
    transition: all ease-in 0.2s;
    font-weight: 550;
}
.secondary {
    padding-left: 20px;
    padding-right: 20px;
    height: 45px;
    width: 200px;
    color: rgb(45, 190, 215);
    background: white;
    box-shadow: 0px 5px rgb(190, 190, 190);
    border: 1px solid rgb(190, 190, 190);
    border-radius: 15px;
    transition: all ease-in 0.2s;
    font-weight: 550;
}
</style>
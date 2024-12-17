<!-- TEMPLATE -->
<template>
    <div class="progress-container">
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0"
            aria-valuemin="0" aria-valuemax="100">
            <button class="btn"><img width="32"
                    src="/assets/images/icons/close.png" :alt="$t('alt.close')" @click="closeButton"></button>
            <div class="progress-bar" :style="'width:' + lessonStep * 100 / max + '%'"></div>
        </div>
    </div>
</template>


<!-- SCRIPT -->
<script setup lang="ts">
defineProps<{
    lessonStep: number,
    max: number
}>()

const globalStore = useGlobalStore()
const backgroundColor = computed(() => globalStore.backgroundColor)

const closeButton = () => {

}
</script>


<!-- STYLE -->
 <style scoped>
.progress-container {
    background-color: v-bind(backgroundColor);
    padding-top: 1rem;
    margin: 0 5rem;
}

.btn{
    position: absolute;
    left: 0;
    top: 0;
    padding: 0.5rem
}
</style>
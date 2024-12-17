<!-- TEMPLATE -->
<template>
    <div class="progress-container">
        <div v-if="step >= 2" class="progress " role="progressbar" aria-label="Basic example" aria-valuenow="0"
            aria-valuemin="0" aria-valuemax="100">
            <button v-if="step >= 3" class="btn"><img width="32"
                    src="/assets/images/icons/white_left_arrow.png" :alt="$t('alt.previous')" @click="previousStep"></button>
            <div class="progress-bar" :style="'width:' + step * 100 / max + '%'"></div>
        </div>
    </div>
</template>


<!-- SCRIPT -->
<script setup lang="ts">
defineProps<{
    step: number,
    max: number
}>()

const globalStore = useGlobalStore()
const backgroundColor = computed(() => globalStore.backgroundColor)

const previousStep = () => {
    globalStore.incrementFadeKey()
    globalStore.setBubbleText('')
    globalStore.previousStep()
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
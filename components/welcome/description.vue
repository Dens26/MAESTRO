<!-- TEMPLATE -->
<template>
    <div class="description-container">
        <img width="64" height="64" :src="'assets/logos/' + $t(src + '.img')" :alt="$t(src + '.title')">
        <div>
            <p class="title">{{ $t(src+ '.title') }}</p>
            <p class="description">{{ $t(src+ '.description') }}</p>
        </div>
    </div>
    <div class="line"></div>
</template>


<!-- SCRIPT -->
<script setup lang="ts">
defineProps<{
    src: string
}>()
</script>


<!-- STYLE -->
 <style scoped>
.description-container {
    display: flex;
    gap: 1rem;
    width: 80%;
    margin: 0 auto;
    align-items: top;
}
.title{
    color: white;
    font-size: 1rem;
    font-weight: bold;
    margin: 0;
}
.description{
    font-size: 0.9rem;
    margin: 0;
    color: rgb(190, 190, 190);
}

.line {
    height: 2px;
    background-color: gray;
    width: 80%;
    margin: 15px auto;
}
</style>
<!-- TEMPLATE -->
<template>
    <Header></Header>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <div ref="buttonRef" class="btn">
        <IndexButtonStart :width="300"></IndexButtonStart>
    </div>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    
</template>



<!-- SCRIPT -->
<script setup lang="ts">
const visibilityStore = useVisibilityStore()
const buttonRef = ref<HTMLElement | null>(null)

let observer: IntersectionObserver | null = null

const handleVisibilityChange = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
        visibilityStore.setButtonVisibility(entry.isIntersecting)
    })
}

onMounted(() => {
    observer = new IntersectionObserver(handleVisibilityChange, {
        root: null,
        rootMargin: '-75px',
        threshold: 0.1,
    });

    if (buttonRef.value) {
        observer.observe(buttonRef.value)
    }
})

onBeforeUnmount(() => {
    if (observer && buttonRef.value) {
        observer.unobserve(buttonRef.value)
        observer.disconnect()
    }
})
</script>


<!-- STYLE -->
 <style scoped>
 .btn{
    display: flex;
    justify-content: center;
 }
</style>
<!-- TEMPLATE -->
<template>
    <div class="container">
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
        <div ref="buttonRef">
            <Button :name="name.toUpperCase()"></Button>
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
    </div>
</template>


<!-- SCRIPT -->
<script setup lang="ts">

const visibilityStore = useVisibilityStore()
const globalStore = useGlobalStore()
const rootMargin = `-${globalStore.navBarHeight} 0px 0px 0px`

const name = ref("c'est parti !")
const buttonRef = ref<HTMLElement | null>(null)

let observer: IntersectionObserver | null = null

const handleVisibilityChange = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
        visibilityStore.setButtonVisibility(entry.isIntersecting);
    })
}

onMounted(() => {
    observer = new IntersectionObserver(handleVisibilityChange, {
        root: null,
        rootMargin,
        threshold: 0.1,
    });

    if (buttonRef.value) {
        observer.observe(buttonRef.value); // buttonRef.value est maintenant un HTMLElement
    }
})

onBeforeUnmount(() => {
    if (observer && buttonRef.value) {
        observer.unobserve(buttonRef.value);
        observer.disconnect();
    }
})
</script>


<!-- STYLE -->
 <style>
</style>
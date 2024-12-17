<!-- TEMPLATE -->
<template>
  <div class="footer">
    <ButtonPrimary :disabled="globalStore.step === 2 && profilStore.heard === '' ||
      globalStore.step === 3 && profilStore.why === '' ||
      globalStore.step === 4 && profilStore.knowledge === '' ||
      globalStore.step === 6 && profilStore.goal === '' ||
      globalStore.step === 7 && profilStore.start === ''"
      class="btn" @click="nextStep()">
      {{ $t('footer.button').toUpperCase() }}</ButtonPrimary>
  </div>
</template>


<!-- SCRIPT -->
<script setup lang="ts">
const globalStore = useGlobalStore()
const profilStore = useProfilStore()
const footerHeight = computed(() => globalStore.footer.heigth + 'px')
const backgroundColor = computed(() => globalStore.backgroundColor)

const nextStep = () => {
  globalStore.incrementFadeKey()
  globalStore.setBubbleText('')
  globalStore.nextStep()
  if (globalStore.step === 8) {
    if (profilStore.lesson.chapter_1.lesson_1.score < 80) {
      return navigateTo('lesson/exercise')
    }
    else {
      return navigateTo('lesson')
    }
  }
}
</script>


<!-- STYLE -->
<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 25px;
  border-top: 1px solid #ccc;
  height: v-bind(footerHeight);
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
  background-color: v-bind(backgroundColor);
}

.btn {
  height: 45px;
  color: black;
  width: 200px;
}
</style>
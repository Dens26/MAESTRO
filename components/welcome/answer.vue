<!-- TEMPLATE -->
<template>
    <div v-for="(answer, index) in answers" :key="index" class="btn-group" role="group"
        aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check choice-check" name="btnradio" :id="'btnradio_' + $t(answer + '.title')"
            autocomplete="off" @click="answerSelected(answer)">
        <label class="btn choice" :for="'btnradio_' + $t(answer + '.title')">
            <img :height="size" :width="size" :src="'/assets/logos/' + $t(answer + '.img')"
                :alt="$t(answer + '.title')">
            <div>
                <p class="title">{{ $t(answer + '.title') }}</p>
                <p v-if="globalStore.step === 7" class="description">{{ $t(answer + '.description') }}</p>
            </div>
        </label>
    </div>
</template>


<!-- SCRIPT -->
<script setup lang="ts">
const { t } = useI18n()

defineProps<{
    answers?: object
    size?: number
}>()

const profilStore = useProfilStore()
const globalStore = useGlobalStore()

const answerSelected = (answer: string) => {
    switch (answer.split('.')[2]) {
        case 'heard':
            profilStore.setHeard(t(answer + '.title'))
            break
        case 'why':
            profilStore.setWhy(t(answer + '.title'))
            break
        case 'knowledge':
            profilStore.setKnowledge(t(answer + '.title'))
            break
        case 'goal':
            profilStore.setGoal(t(answer + '.title'))
            break
        case 'start':
            profilStore.setStart(t(answer + '.title'))
            break
    }
    if (globalStore.step > 2)
        globalStore.setBubbleText(t(answer))
    globalStore.incrementFadeKey()
}
</script>


<!-- STYLE -->
<style scoped>
.choice {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 1rem;
    min-height: 65px;
    border: 2px solid rgb(55, 70, 80);
    box-shadow: 0px 2px rgb(55, 70, 80);
    border-radius: 15px;
    width: 100%;
    color: white;
}

.choice-check:checked+.btn {
    color: aqua;
}

.title {
    color: white;
    margin: 0.5rem;
    text-align: left;
}

.description {
    color: rgb(191, 191, 191);
    margin: 0.5rem;
    text-align: left;
}
</style>
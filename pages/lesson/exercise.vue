<!-- TEMPLATE -->
<template>
    <div class="main-container">
        <LessonProgressBar :lessonStep="lessonStep" :max="10"></LessonProgressBar>
        <div class="subject">{{ $t('pages.lesson.' + subject) }}</div>
        <div class="title">{{ $t('pages.lesson.chapter_1.lesson_1.first_question.question') }}</div>
        <div v-if="subject === 'chose'" class="choice-list">
            <div v-for="(answer, index) in answerList" :key="index" class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check choice-check" name="btnradio" :id="'btnradio_' + answer"
                    autocomplete="off" @click="answerSelected(answer)">
                <label class="btn choice" :for="'btnradio_' + answer">
                    {{ answer }}
                </label>
            </div>
        </div>
    </div>
</template>


<!-- SCRIPT -->
<script setup lang="ts">
const { t, tm } = useI18n()
const globalStore = useGlobalStore()
const backgroundColor = computed(() => globalStore.backgroundColor)
const lessonStep = computed(() => globalStore.lessonStep)
const subject = t('pages.lesson.chapter_1.lesson_1.first_question.subject')
const answerList = tm('pages.lesson.chapter_1.lesson_1.first_question.answer_list')

const answerSelected = (answer: string) => {

}
</script>


<!-- STYLE -->
<style scoped>
.main-container {
    background-color: v-bind(backgroundColor);
    height: 100vh;
}

.subject {
    margin: 2rem;
    color: white;
    font-size: 1.5rem;
}

.title {
    margin: 2rem;
    padding: 2rem;
    color: white;
    font-size: 1.2rem;
    border: 1px solid;
    border-radius: 1rem;
    text-align: center;
}

.choice-list{
    margin: 2rem;
    display: flex;
    gap: 0.5rem;
}

.choice {
    display: flex;
    justify-content: left;
    align-items: center;
    min-height: 65px;
    border: 2px solid rgb(55, 70, 80);
    box-shadow: 0px 2px rgb(55, 70, 80);
    border-radius: 15px;
    color: white;
}

.choice-check:checked+.btn {
    color: aqua;
}

</style>

<script setup>
    import Question from "@/components/Question.vue"
    import QuizHeader from "@/components/QuizHeader.vue"
    import Results from "@/components/Results.vue"
    import {useRoute} from "vue-router"
    import {ref, watch, computed} from "vue"
    import quizes from "@/data/quizes.json"

    const route = useRoute()
    const quizId = parseInt(route.params.id)
    const currentQuestionIndex = ref(0)
    const quiz = quizes.find(q => q.id === quizId)
    const questionStatus = computed(() => `${currentQuestionIndex.value}/${quiz.questions.length}`)
    const barStat = computed(() => `${currentQuestionIndex.value*100/quiz.questions.length}%`)
    const numCorrect = ref(0)

    const onOptSelect = (isCorrect) => {
        numCorrect.value = isCorrect ? numCorrect.value+1 : numCorrect.value
        currentQuestionIndex.value++
    }
</script> 

<template>
    <div>
        <QuizHeader :status="questionStatus" :bar = "barStat"/>
        <div>
            <Question
                v-if="currentQuestionIndex<quiz.questions.length" 
                :question="quiz.questions[currentQuestionIndex]"
                @selectOption="onOptSelect"
            /> 
            <Results
                v-else
                :quizLength = "quiz.questions.length"
                :numCorrect = "numCorrect"
            />
        </div>
    </div>
</template>



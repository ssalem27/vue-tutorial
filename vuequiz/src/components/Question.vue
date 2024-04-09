<script setup>
    import { defineProps, defineEmits } from 'vue';

    const emit = defineEmits(['selectOption'])
    const {question} = defineProps(['question'])

    const emitSelectOpt = (isCorrect) => {
        emit("selectOption",isCorrect)
    }
</script>

<template>
    <div class="question-container">
        <h1 class="question">
            {{question.text}}
        </h1>
    </div>
    <div class="option-container">
        <div 
            v-for="opt in question.options" 
            :key="opt.id" 
            class="option"
            @click="emitSelectOpt(opt.isCorrect)"
        >
            <p class="option-label">{{opt.label}}</p>
            <div class="option-val">
                <p>{{opt.text}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .question-container{
        margin-top: 20px;
    }

    .question{
        font-size: 40px;
        margin-bottom: 20px;
    }

    .option {
        display: flex;
        margin-bottom: 20px;
        cursor: pointer;
    }

    .option-label{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(142, 101, 255);
        border: 2px solid rgb(110, 58, 255);
        width: 50px;
        height: 50px;
        font-size: 35px;
        border-radius: 100%;
    }

    .option-val{
        background-color: rgb(92, 82, 123);
        padding: 0 20px;
        width: 90%;
        font-size: 30px;
        margin: 0 10px;
        border-radius: 15px;
        border: 3px solid rgb(54, 49, 69);
        display: flex;
        flex-wrap: wrap;
    }
</style>
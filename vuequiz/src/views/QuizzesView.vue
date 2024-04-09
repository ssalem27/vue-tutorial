<script setup>
  import q from "@/data/quizes.json"
  import {ref, watch} from "vue"
  import Card from "@/components/Card.vue"

  const quizes = ref(q)
  const search = ref("")
  
  watch(search, () => {
    quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
  })
</script>

<template>
      <header>
        <h1>Quizzes</h1>
        <input v-model.tri = "search" type="text" placeholder="Search...">
      </header>
      <div class="options-container">
        <RouterLink :to="`/quiz/${quiz.id}`" v-for="quiz in quizes" :key="quiz.id">
            <Card :quiz="quiz"/>
        </RouterLink>    
      </div>
  </template>

<style scoped>

header{
  margin-top: 30px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

header h1{
  font-weight: bold;
  margin-right: 30px;

}

header input{
  border: none;
  background-color: rgb(138, 138, 138);
  padding: 10px;
  border-radius: 5px;
}



.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}

.options-container a{
    text-decoration:none ;
    color: rgb(173, 173, 173);
}
</style>
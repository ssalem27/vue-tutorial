<script setup>
import {ref} from "vue";
const showModal = ref(false);
const newNote = ref("");
const errorMessage = ref("")
const notes = ref([]);

function getRandomColor() {
  return "hsl(" +Math.random()*360+",100%,75%)";
}

const addNote = () =>{
  if (note.value.length < 10){ 
    errorMessage.value = "Input must be >= 10 characters";
    return;
  }
  errorMessage.value = "";
  notes.value.push({
    id: Math.floor(Math.random() * 1000000),
    text: newNote.value,
    date: new Date(),
    backgroundColor: getRandomColor()
  });
  showModal.value = false;
  newNote.value = '';
}
</script>

<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea v-model= "newNote.trim" name="note" id="note" cols="30" rows="10"></textarea>
        <p v-if="errorMessage">{{errorMessage}}</p>
        <button @click="addNote();">Add Note</button>
        <button class="close" @click="showModal=false">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal=true">+</button>
      </header>
      <div class="card-container">
        <div 
        v-for="note in notes"
        class="card"  
        :style="{backgroundColor:note.backgroundColor}"
        :key = "note.id">
          <p class="main-test">{{note.text}}</p>
          <p class="date">{{note.date.toLocaleDateString("en-US")}}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  main{
    height: 100vh;
    width: 100vw;
  }
  .container{
    max-width: 1000px;
    padding: 10px;
    margin: 0 auto;
  }
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1{
    font-weight: bold;
    margin-bottom: 25px;
    font-size: 25px;
  }
  header button{
    border: none;
    padding: 10px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: rgb(154, 154, 154);
    border-radius: 100%;
    font-size: 20px;
  }
  .card {
    width: 225px;
    height: 225px;
    background-color: rgb(237, 182, 44);
    padding: 10px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    margin-bottom: 20px;
    color:rgb(75, 75, 75);

  }
  .overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0,0.77);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal{
    width: 750px;
    border-radius: 10px;
    background-color: jmnmb    rgb(115, 115, 115);
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .modal button{
    padding: 10px 20px;
    font-size: 20px;
    width:100%;
    background-color: blueviolet;
    border: none;
    color: white;
    cursor: pointer;
    margin-top: 15px;
  }
  .modal .close{
    background-color: rgb(193,15,15);
    margin-top: 7px;
  }
  .modal p{
    color: rgb(193,15,15);
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
  }
</style>
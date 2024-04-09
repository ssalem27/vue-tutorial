<script setup>
    import {ref} from "vue"
    import cars from "../data/cars.json"
    import {RouterLink} from "vue-router"

    const cardata = ref(cars)

</script>

<template>
    <div>
        HomeView
    </div>
    <div class = "cars-container">
        <div class = "cars">
            <RouterLink :to="`/cars/${car.id}`" v-for="car in cardata" :key="car.id">{{ car.name }}</RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .cars{
        display: flex;
    }

    .cars a{
        text-decoration:none ;
        color: white;
        box-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5);
        margin: 10px;
        width: 100%;
    }
</style>
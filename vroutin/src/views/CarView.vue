<script setup>
    import { useRoute, useRouter, RouterView } from 'vue-router';
    import cars from "../data/cars.json"
    const router = useRouter()
    const route = useRoute()
    const car = cars.find(c => c.id === parseInt(route.params.id))

    const showContact = () => {
        if(car.id===4) return;
        return router.push(`/cars/${car.id}/contact`)
    }
</script>

<template>
    <div v-if="car">
        <h1>Car View</h1>
        <p>{{ car.name }}</p>
        <p>{{ car.year }}</p>
        <p>{{ car.price }}</p>
        <button @click="showContact">click for contact</button>
        <RouterView/>
    </div>
    <div v-else>
        <h1>Car not found</h1>
    </div>
</template>
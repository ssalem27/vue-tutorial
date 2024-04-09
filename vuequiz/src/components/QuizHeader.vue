<script setup>
    import { defineProps } from 'vue';

    const {
        status,
        bar
    } = defineProps([
        'status',
        'bar'
    ])
    
</script>

<template>
    <header>
        <h4>Question {{status}}</h4>
        <div class="bar">
            <div class="completion" :style="{width:bar}"></div>
        </div>
    </header>
</template>

<style scoped>
    header{
        margin-top: 20px;
    }

    header h4{
        font-size: 30px;
    }

    .bar{
        width: 300px;
        height: 50px;
        border: 3px solid rgb(110, 58, 255);
        border-radius: 50px;
    }

    .completion{
        height: 100%;
        width: 33%;
        background-color: rgb(153, 115, 255);
        border-radius: 50px;
    }
</style>
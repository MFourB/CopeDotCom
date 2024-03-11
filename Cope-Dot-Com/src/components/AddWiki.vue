<script setup lang="ts">


import { ref, defineProps } from 'vue';

defineProps(["content"])

const title = ref('');
const content = ref('');

</script>

<template>
    <div class="flex flex-col items-center w-full fit-text-md text-gray-300">

        <div class="max-w-[90vw] w-[75vh]">

        <!-- Current Page Title Section -->
        <div class="fit-height-md w-full flex flex-col items-center justify-center">
            <h1 class="mx-[5%] fit-text-lg font-bold">
                New Post Form
            </h1>
        </div>
        <!---->

        <div class="flex flex-col bg-slate-500 pb-[5%]">
        <!-- Title Section -->
        <div class="flex flex-col my-[5%]">
            <h1 class="mx-[5%]">
                Title
            </h1>
            <input v-model="title" class="text-black mx-[5%]" placeholder="Enter Title Here"> 
        </div> 
        <!---->

        <!-- Content Section -->
        <div class="flex flex-col mb-[5%]">
            <h1 class="mx-[5%]">
                Content
            </h1>
            <input v-model="content" class="text-black mx-[5%]" placeholder="Enter Content Here"> 
        </div> 
        <!---->

        <!-- Add Button Section -->
        <div class="w-full mb-[5%] fit-height-2sm flex justify-center">
            <button @click="$emit('add', title, content)" class=" h-full flex flex-row justify-center items-center bg-blue-500 hover:bg-blue-700">
                <svg class= "fit-width-xs ml-[7%]" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" width="15%" height="100%" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                <h1 class="fit-width-2md font-bold">
                    Add Post
                </h1>
            </button>
        </div>
        <!---->
        </div>
        
        </div>
    </div> 
</template>
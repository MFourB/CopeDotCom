<script setup lang="ts">


import { ref, defineProps } from 'vue';

defineProps(["content"])

</script>

<template>
    <div class="flex flex-col items-center w-full text-gray-300">

        <div class="max-w-[90vw] w-[75vh]">

        <!-- Current Page Title Section -->
        <div class="fit-height-md w-full flex flex-col items-center justify-center">
            <h1 class="mx-[5%] fit-text-lg font-bold">
                Prompt
            </h1>
        </div>
        <!---->

        <div class="flex flex-col bg-slate-500 pb-[5%]">
        <!-- Title Section -->
        <div class="flex flex-col items-center my-[5%]">
            <h1 class="mx-[5%] fit-text-lg font-bold">
                {{ content.title }}
            </h1>
        </div> 
        <!---->

        <!-- Content Section -->
        <div class="flex flex-col items-center mb-[5%]">
            <h1 class="mx-[5%] fit-text-md">
                {{ content.content }}
            </h1>
        </div> 
        <!---->

        <!-- Add Button Section -->
        <div class="w-full mb-[5%] fit-height-2sm flex justify-center">
            <button @click="" class=" h-full flex flex-row justify-center items-center bg-blue-500 hover:bg-blue-700">
                <h1 class="fit-width-2md fit-text-md font-bold">
                    Close
                </h1>
            </button>
        </div>
        <!---->
        </div>
        
        </div>
    </div> 
</template>
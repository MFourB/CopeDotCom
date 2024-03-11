<script setup lang="ts">


import { ref, defineProps } from 'vue';

defineProps(["content"])

</script>

<template>
    <div class="flex flex-col items-center w-full text-gray-300">
        <div class="max-w-[90vw] w-[85vh]">
            
        <!-- Current Page Title Section -->
        <div class="fit-height-md flex flex-col items-center justify-center">
            <h1 class="mx-[5%] fit-text-lg font-bold">
                {{ content.title }}
            </h1>
        </div>
        <!---->

        <!-- Body -->
        <div class="w-full flex flex-row">
            <div class="p-[4%] w-3/5 bg-slate-600 flex flex-col justify-center">
                <h1 class="fit-text-md font-bold">
                    Description
                </h1>
                <p class="fit-text-sm">
                    {{ content.content }}
                </p>
            </div> 
            <div class="p-[4%] w-2/5 bg-slate-700 flex flex-col items-center">
                <h1 class="fit-text-sm font-bold">
                    Assisting Section
                </h1>
            </div> 
        </div>
        <!---->
        </div> 
    </div> 
</template>
<script setup lang="ts">

import { ref, defineEmits } from 'vue'; 

const searchID = ref(0);

/*
defineEmits(['changeScene']);

@click="$emit('changeScene', 'DownloadsList')"
*/

</script>


<template>
    <div class="flex justify-center my-[1%] fit-height-md w-full text-white bg-slate-800">
        <!-- Search Container -->
        <div class="flex flex-row items-center">
        
        <!-- Search -->
        <div class="ml-[5%] h-full flex flex-row items-center">
            <h1 class="fit-width-md fit-text-sm font-bold">Search Wiki</h1>
            <input v-model="searchID" class="w-[30%] h-full p-[5%] bg-slate-700 fit-text-sm" type="text" placeholder="Enter ID">
            <button @click="$emit('search', searchID)" class="px-[2%] h-full mr-[5%] flex flex-row justify-center items-center bg-blue-500 hover:bg-blue-700">
                <svg class="fit-width-sm" fill="#FFFFFF" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 390.704 390.704"
                    xml:space="preserve">
                <g>
                    <g>
                        <path d="M379.711,326.556L265.343,212.188c30.826-54.189,23.166-124.495-23.001-170.663c-55.367-55.366-145.453-55.366-200.818,0
                            c-55.365,55.366-55.366,145.452,0,200.818c46.167,46.167,116.474,53.827,170.663,23.001l114.367,114.369
                            c14.655,14.655,38.503,14.654,53.157,0C394.367,365.059,394.368,341.212,379.711,326.556z M214.057,214.059
                            c-39.77,39.771-104.479,39.771-144.25,0c-39.77-39.77-39.77-104.48,0-144.25c39.771-39.77,104.48-39.77,144.25,0
                            C253.828,109.579,253.827,174.29,214.057,214.059z"/>
                    </g>
                </g>
                </svg>
                <h1 class="ml-[10%] fit-text-sm font-bold">
                    Search
                </h1>
            </button>
        </div>
        <!-- End of Search -->

        <!-- List Or Add New Wiki -->
        <div class="mr-[5%] h-full flex flex-row items-center">
            <button @click="$emit('showWikis')" class=" h-full mr-[5%] flex flex-row justify-center items-center bg-blue-500 hover:bg-blue-700">
                <svg class= "ml-[10%] fit-width-xs" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M4 18L20 18" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
                <path d="M4 12L20 12" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
                <path d="M4 6L20 6" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <h1 class="fit-width-2md fit-text-sm font-bold">
                    Wiki List
                </h1>
            </button>
            <button @click="$emit('add')" class=" h-full mr-[5%] flex flex-row justify-center items-center bg-blue-500 hover:bg-blue-700">
                <svg class= "ml-[10%] fit-width-xs" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" width="15%" height="100%" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                <h1 class="fit-width-2md fit-text-sm font-bold">
                    New Post
                </h1>
            </button>
        </div>
        <!-- End of List or Add New Wiki -->
        
        </div>
        <!-- End of Search Container -->
    </div>
</template>
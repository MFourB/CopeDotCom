<script setup lang="ts">

import { Article } from '@/structures/Article';
import { ref, defineProps } from 'vue';

const props = defineProps({
    articles: Array<Article>
});

const articlesInPage = new Array<Article>();

const pageSize = ref(10);
const articlesInPageRef = ref(articlesInPage);
const goToPageNumber = ref(0);
const currentPageNumber = ref(0);

function goToPage() {
    if (goToPageNumber.value < 0) {
        return;
    }

    currentPageNumber.value = goToPageNumber.value;
    articlesInPageRef.value.length = 0;

    for (let i = (goToPageNumber.value * pageSize.value); i < (goToPageNumber.value * pageSize.value + pageSize.value); i++) {
        if (props.articles != undefined && props.articles[i] != null) {
            articlesInPageRef.value.push(props.articles[i]);
            console.log(props.articles[i].title);
        }
    }
    console.log("Local Array", articlesInPage);
    console.log("Ref Array", articlesInPageRef.value);
    console.log("Going to page: " + goToPageNumber.value * pageSize.value);
}

goToPage();

</script>

<template>
    <div class="flex flex-col items-center w-full text-gray-300">
        <!-- Page -->
        <div class="max-w-[90vw] w-[75vh]">

        <!-- Current Page Title Section -->
        <div class="fit-height-md flex flex-col items-center justify-center">
            <h1 class="mx-[5%] fit-text-lg font-bold">
                Wiki List
            </h1>
        </div>
        <!-- End Of Current Page Title Section -->

        <!-- Page Body -->
        <div class="flex flex-col bg-slate-500 pb-[5%]">
        
        <!-- Traversal Section -->
        <div class=" divide-slate-100 flex flex-row justify-between w-full fit-height-md mb-[10%]">
        <!-- Go To Button Section -->
        <div class="divide-x-2 divide-slate-100 w-full flex justify-center">
            <button @click="goToPage" class="w-full flex flex-row justify-center items-center bg-blue-500 hover:bg-blue-700">
                <h1 class="fit-width-2md fit-text-sm font-bold">
                    Go to Page
                </h1>
            </button>
            <input v-model="goToPageNumber" class="p-[5%] w-full fit-width-2md fit-text-sm bg-slate-700" type="text" placeholder="Enter ID">
        </div>
        <!-- End of Go To Button Section -->
        <!-- Traverse Buttons Section -->
        <div class="divide-x-2 divide-slate-100 w-full flex justify-center">
            <button @click="goToPageNumber=currentPageNumber-1; goToPage()" class="w-full h-full flex flex-row justify-center items-center bg-blue-500 hover:bg-blue-700">
                <h1 class="fit-width-md fit-text-sm font-bold">
                    < Last Page
                </h1>
            </button>
            <button @click="goToPageNumber=currentPageNumber+1; goToPage()" class="w-full h-full flex flex-row justify-center items-center bg-blue-500 hover:bg-blue-700">
                <h1 class="fit-width-md fit-text-sm font-bold">
                    Next Page >
                </h1>
            </button>
        </div>
        <!-- End of Traverse Buttons Section -->
        </div>
        <!-- End of Traversal Section -->

        <!-- Content Section -->
        <div class="flex flex-col items-center mb-[5%]">
            <ul class="w-[80%] divide-y divide-slate-500">
                <div v-for="(article, key) in articlesInPageRef">
                    <button @click="$emit('search', article.id)" class="w-full h-full flex flex-col bg-slate-600 hover:bg-blue-700">
                        <h1 class="pl-[3%] pt-[3%] fit-text-xs">
                            ID: {{ article.id }}
                        </h1>
                        <h1 class="pl-[3%] pb-[3%] fit-text-md font-bold">
                            {{ article.title }}
                        </h1>
                    </button>
                </div>
            </ul>
        </div> 
        <!-- End Of Content Section -->
        
        </div>
        <!-- End Of Page Body -->

        </div>
        <!-- End Of Page -->
    </div> 
</template>
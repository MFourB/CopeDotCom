<script setup lang="ts">

import WikiArticle from './components/WikiArticle.vue';
import NavBar from './components/NavigationBar.vue';
import WikiSearch from './components/WikiSearch.vue';
import AddWiki from './components/AddWiki.vue';
import Prompt from './components/Prompt.vue';
import WikiList from './components/WikiList.vue';

import { ref } from 'vue';
import { LoremIpsum } from 'lorem-ipsum';
import { Article } from './structures/Article';


const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const articles = ref(new Array<Article>());

for(let i = 0; i < 25; i++) {
  let newArticle: Article = new Article();
  newArticle.title = lorem.generateWords(1);
  newArticle.content = lorem.generateParagraphs(2);
  articles.value.push(newArticle);
}

const state = ref(0);
const currentArticle = ref({});

const promptContent = ref({});

/*
 * Create a new Class for Prompt instead of using
 * the Article Class.
 */
function showPrompt(title: string, content: string): void {
  let prompt: Article = new Article();
  prompt.title = title;
  prompt.content = content;

  promptContent.value = prompt;

  state.value = 3;
}

function search(query: number) {
  if (query < 0) {
    console.log("Article '" + query + "' is not possible! Negative number is not allowed!");
  } else if (articles.value[query] == null) {
    console.log("Article '" + query + "' does not exist!");
  } else {
    state.value = 1;
    currentArticle.value = articles.value[query];

    console.log("Article '" + articles.value[query].title + "' is selected!");
  }
}

function add() {
  state.value = 2;
  console.log("Adding New Post: Post in Creation")
}

function addArticle(title: string, content: string) {
  let newArticle: Article = new Article();
  newArticle.title = title;
  newArticle.content = content;

  articles.value.push(newArticle);

  let promptTitle = "Success";
  let promptContent = "New Article '" 
    + title 
    + "' has been created and posted!";

  showPrompt(promptTitle, promptContent);

  console.log("Adding New Post: Post Added")
}

function showWikis() {
  state.value = 0;
  console.log("Showing Wikis")
}

</script>

<template>
  <main class="bg-slate-800 w-[100vw]">
    <NavBar></NavBar>
    <WikiSearch @search="search" @add="add" @showWikis="showWikis"></WikiSearch>
    <Prompt v-if="state==3" @close="showWikis" :content="promptContent"></Prompt>
    <AddWiki v-if="state==2" @add="addArticle"></AddWiki>
    <WikiArticle v-if="state==1" :content="currentArticle"></WikiArticle>
    <WikiList v-if="state==0" @search="search" :articles="articles"></WikiList>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>./components/WikiArticle.vue

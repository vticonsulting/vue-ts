<template>
  <div>
    <form @submit.prevent="addRecipe">
      <div>
        <label>Name</label>
        <br />
        <input v-model="recipe.name" />
        <br />
        {{ !recipe.name ? "Name is required" : "" }}
      </div>
      <div>
        <label>Ingredients</label>
        <br />
        <textarea v-model="recipe.ingredients"></textarea>
        <br />
        {{ !recipe.ingredients ? "Ingredients is required" : "" }}
      </div>
      <div>
        <label>Steps</label>
        <br />
        <textarea v-model="recipe.steps"></textarea>
        <br />
        {{ !recipe.steps ? "Steps is required" : "" }}
      </div>
      <button type="submit">Add Recipe</button>
    </form>
    <div v-for="(r, index) of recipes" :key="r.id">
      <h1>{{ r.name }}</h1>
      <h2>Ingredients</h2>
      <div class="content">{{ r.ingredients }}</div>
      <h2>Steps</h2>
      <div class="content">{{ r.steps }}</div>
      <button type="button" @click="deleteRecipe(index)">Delete Recipe</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Recipe } from "../interfaces/Recipe";
import { v4 as uuidv4 } from "uuid";

export default class RecipeForm extends Vue {
  recipe: Recipe = {
    name: "",
    ingredients: "",
    steps: "",
  }

  recipes: Recipe[] = [];

  get formValid(): boolean {
    const { name, ingredients, steps } = this.recipe;
    return Boolean(name && ingredients && steps);
  }

  addRecipe() {
    if (!this.formValid) {
      return;
    }
    this.recipes.push({
      id: uuidv4(),
      ...this.recipe,
    } as Recipe);
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }
}
</script>
<style scoped>
.content {
  white-space: pre-wrap;
}
</style>

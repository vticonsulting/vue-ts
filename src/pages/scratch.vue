<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<template>
  <div>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#">Home</a>
        </li>
        <li class="breadcrumb-item">
          <a href="#">Library</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>

    <form class="form-inline">
      <div class="form-group">
        <label for="minAge" class="form-label">Min Age</label>
        <input
          id="minAge"
          v-model.number="filters.age.value.min"
          class="form-input"
          type="number"
          :min="0"
          :max="filters.age.value.max"
          @onKeyDown.prevent="() => { }"
        />
        <small
          id="minAgeHelp"
          class="text-muted form-text"
        >We'll never share your email with anyone else.</small>
      </div>

      <div class="form-group">
        <label class="form-label">Max Age:</label>
        <input
          v-model.number="filters.age.value.max"
          class="form-input"
          type="number"
          :min="filters.age.value.min"
          :max="99"
          @onKeyDown.prevent="() => { }"
        />
      </div>
    </form>
    <form>
      <div class="row">
        <div class="col">
          <input type="text" class="form-control" placeholder="First name" />
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Last name" />
        </div>
      </div>
    </form>
    <div class="form-check form-check-inline">
      <input id="inlineCheckbox1" class="form-check-input" type="checkbox" value="option1" />
      <label class="form-check-label" for="inlineCheckbox1">1</label>
    </div>
    <div class="form-check form-check-inline">
      <input id="inlineCheckbox2" class="form-check-input" type="checkbox" value="option2" />
      <label class="form-check-label" for="inlineCheckbox2">2</label>
    </div>
    <div class="form-check form-check-inline">
      <input id="inlineCheckbox3" class="form-check-input" type="checkbox" value="option3" disabled />
      <label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
    </div>

    <div class="row form-group">
      <label for="staticEmail" class="col-form-label col-sm-2">Email</label>
      <div class="col-sm-10">
        <input
          id="staticEmail"
          type="text"
          readonly
          class="form-control-plaintext"
          value="email@example.com"
        />
      </div>
    </div>

    <div class="form-group">
      <label>Filter by Name</label>
      <input v-model="filters.name.value" class="form-control form-control-sm" />
    </div>

    <div class="form-group">
      <label for="exampleFormControlSelect2">Example multiple select</label>
      <select id="exampleFormControlSelect2" multiple class="form-control form-control-sm">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>

    <div class="form-group">
      <label for="exampleFormControlFile1">Example file input</label>
      <input id="exampleFormControlFile1" type="file" class="form-control-file" />
    </div>

    <base-input></base-input>
    <base-button>My Button</base-button>\
  </div>
</template>

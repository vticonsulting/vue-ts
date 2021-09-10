<script setup lang="ts">
import { ref } from 'vue'
import users from '~/users.json'
import { SortOrder } from '~/enums/SortOrder';

function ageFilter(filterValue: any, row: Record<string, any>) {
  return row.age >= filterValue.min && row.age <= filterValue.max
}

function nameLength(row: Record<string, any>) {
  return row.name.length
}

function dateSort(a: Record<string, string>, b: Record<string, string>, sortOrder: SortOrder) {
  let date1 = new Date(a.registered).getTime();
  let date2 = new Date(b.registered).getTime();

  if (sortOrder === 1) {
    return date1 - date2
  } else if (sortOrder === -1) {
    return date2 - date1
  } else {
    return 0
  }
}

const filters = ref({
  name: { value: '', keys: ['name'] },
  age: { value: { min: 21, max: 100 }, custom: ageFilter }
})
const selectedRows: Record<string, any>[] = ref([])
</script>

<template>
  <div class="card">
    <div class="card-body">
      <label>Filter by Name:</label>
      <input v-model="filters.name.value" />
      <label class="form-label">Min Age:</label>
      <input
        class="form-input"
        type="number"
        v-model.number="filters.age.value.min"
        :min="0"
        :max="filters.age.value.max"
        @onKeyDown.prevent="() => { }"
      />
      <label class="form-label">Max Age:</label>
      <input
        class="form-input"
        type="number"
        v-model.number="filters.age.value.max"
        :min="filters.age.value.min"
        :max="99"
        @onKeyDown.prevent="() => { }"
      />
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
      <div class="alert alert-primary" role="alert">
        This is a primary alert with
        <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
      </div>
      <label>Filter by Name</label>
      <input v-model="filters.name.value" class="form-control" />
      <base-input></base-input>
      <base-button>My Button</base-button>
      <div class="mt-3 alert alert-success" role="alert">
        <h4 class="alert-heading">Well done!</h4>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        <hr />
        <p
          class="mb-0"
        >Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
      </div>
      <div class="table-responsive">
        <v-table
          ref="usersTable"
          :data="users"
          class="table table-striped table-bordered table-hover table-sm"
          :filters="filters"
          sort-icon-position="after"
          sort-header-class="d-flex align-items-center justify-content-between w-full"
          :hide-sort-icons="false"
          @stateChanged="selectedRows = $event.selectedRows"
          selectionMode="multiple"
          :selectOnClick="false"
        >
          <template #head="{ allRowsSelected, toggleAllRows }">
            <th>
              <input type="checkbox" :checked="allRowsSelected" @change="toggleAllRows" />
            </th>
            <th>Name</th>
            <th>Age</th>
            <th>State</th>
            <th>Registered at</th>
          </template>
          <template #body="{ rows }">
            <v-tr v-for="row in rows" :key="row.guid" :row="row" v-slot="{ isSelected, toggle }">
              <td>
                <input type="checkbox" :checked="isSelected" @change="toggle" />
              </td>
              <td>{{ row.name }}</td>
              <td>{{ row.age }}</td>
              <td>{{ row.address.state }}</td>
              <td>{{ row.registered }}</td>
            </v-tr>
          </template>
        </v-table>
      </div>
      <strong>Selected:</strong>
      <div v-if="selectedRows.length === 0">No rows selected</div>
      <ul>
        <li v-for="selected in selectedRows">{{ selected.name }}</li>
      </ul>
    </div>
  </div>
</template>

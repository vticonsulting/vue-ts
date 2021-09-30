<script setup lang="ts">
import { ref } from 'vue'
import users from '~/users.json'
import { SortOrder } from '~/enums/SortOrder'

function ageFilter(filterValue: any, row: Record<string, any>) {
  return row.age >= filterValue.min && row.age <= filterValue.max
}

function nameLength(row: Record<string, any>) {
  return row.name.length
}

function dateSort(a: Record<string, string>, b: Record<string, string>, sortOrder: SortOrder) {
  const date1 = new Date(a.registered).getTime()
  const date2 = new Date(b.registered).getTime()

  if (sortOrder === 1)
    return date1 - date2

  else if (sortOrder === -1)
    return date2 - date1

  else
    return 0
}

const filters = ref({
  name: { value: '', keys: ['name'] },
  age: { value: { min: 21, max: 100 }, custom: ageFilter },
})
const selectedRows: Record<string, any>[] = ref([])
</script>

<template>
  <div>
    <div class="alert">
      <strong>Selected:</strong>
      <div v-if="selectedRows.length === 0">No rows selected</div>
      {{ selectedRows.map(row => row.name).join(', ') }}
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
        selection-mode="multiple"
        :select-on-click="false"
        @stateChanged="selectedRows = $event.selectedRows"
      >
        <template #head="{ allRowsSelected, toggleAllRows }">
          <tr>
            <th class="text-center">
              <input type="checkbox" :checked="allRowsSelected" @change="toggleAllRows" />
            </th>
            <th>Name</th>
            <th>Age</th>
            <th>State</th>
            <th>Registered at</th>
          </tr>
        </template>
        <template #body="{ rows }">
          <v-tr v-for="row in rows" :key="row.guid" v-slot="{ isSelected, toggle }" :row="row">
            <td class="text-center">
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
  </div>
</template>

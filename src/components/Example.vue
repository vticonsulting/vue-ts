<template>
  <div class="card">
    <div class="card-body">
      <button
        v-shortkey="['ctrl', 'meta', '/']"
        class="btn btn-primary"
        @click="onOpen"
        @shortkey="onOpen"
      >Open</button>

      <h3>Mouse: {{ x }} x {{ y }}</h3>

      <h3>
        Counter: {{ count }}
        <a class="btn btn-secondary" style="margin-right:10px" @click="inc()">+</a>

        <a class="btn btn-secondary" @click="dec()">-</a>
      </h3>

      <v-table
        v-model:current-page="currentPage"
        :data="users"
        :page-size="5"
        @totalPagesChanged="totalPages = $event"
      >
        <thead slot="head">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>State</th>
            <th>Registered</th>
          </tr>
        </thead>

        <tbody slot="body" slot-scope="{ displayData }">
          <tr v-for="row in displayData" :key="row.guid">
            <td>{{ row.name }}</td>
            <td>{{ row.age }}</td>
            <td>{{ row.address.state }}</td>
            <td>{{ row.registered }}</td>
          </tr>
        </tbody>
      </v-table>

      <smart-pagination v-model:current-page="currentPage" :total-pages="totalPages" />
    </div>
  </div>
</template>

<script>
import { useMouse, useCounter } from '@vueuse/core'
import users from '../public/users.json'

export default {
  setup() {
    const { x, y } = useMouse()
    const { count, inc, dec } = useCounter()

    return {
      x,
      y,
      count,
      inc,
      dec,
    }
  },
  data() {
    return {
      users: users.slice(0, 30),
      currentPage: 1,
      totalPages: 0,
    }
  },
  methods: {
    onOpen() {
      console.log('onOpen')
    },
  },
}
</script>

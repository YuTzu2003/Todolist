<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">編號</th>
          <th scope="col">標題</th>
          <th scope="col">時間</th>
          <th scope="col">編輯工具</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(todo, index) in Alltodo" :key="todo.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>
            <div v-if="!todo.editing">{{ todo.title }}</div>
            <div v-else>
              <input type="text" class="form-control" v-model="todo.newTitle">
            </div>
          </td>
          <td>
            <div v-if="!todo.editing">{{ todo.time }}</div>
            <div v-else>
              <input type="text" class="form-control" v-model="todo.newTime">
            </div>
          </td>
          <td>
            <button type="button" class="btn btn-primary mx-2" @click="editOrUpdate(todo)">
              {{ todo.editing ? '更新' : '編輯' }}
            </button>
            <button type="button" class="btn btn-danger" @click="Delete(todo.id)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters(["Alltodo"])
    },

    methods: {
      ...mapActions(["Delete", "Update"]),

      editOrUpdate(todo) {
        if (todo.editing) {
          todo.title = todo.newTitle;
          todo.time = todo.newTime;
          this.Update(todo);
        } else {
          todo.newTitle = todo.title;
          todo.newTime = todo.time;
        }
        todo.editing = !todo.editing;
      }

    }
  }
</script>

<style>
  .table thead th {
      background-color: #c7dee3 !important; 
  }

</style>

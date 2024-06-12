import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      { id: 1, title: "去虎尾科技大學上課", time: "2024-06-11T20:36" },
      { id: 2, title: "逛一中街", time: "2024-06-11T20:36" },
      { id: 3, title: "搭高鐵", time: "2024-06-11T20:36" }
    ],
  },
  getters: {
    Alltodo: (state) => state.todos,
  },
  mutations: {
    Addtodos(state, todos) {
      state.todos.push(todos);
    },
    Delete(state, id) {
      state.todos = state.todos.filter((todo) => todo.id != id);
    },
    update_todo(state, todo) {
      let index = state.todos.findIndex((t) => t.id == todo.id);
      if (index != -1) {
        state.todos[index] = todo;
      }
    }
  },
  actions: {
    Addtodos({commit}, todos) {
      commit("Addtodos", todos);
    },
    Delete({commit}, id) {
      commit("Delete", id);
    },
    Update({commit}, todo) {
      commit("update_todo", todo);
    },
  },
  modules: {}
});

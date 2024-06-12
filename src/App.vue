<template>
  <div id="app" class="container text-center justify-content-between align-items-center" style="margin-top:30px">
    <TodoInput/>   
    <TodoContent/>
  </div>
</template>

<script>
  import TodoInput from './components/TodoInput.vue';
  import TodoContent from './components/TodoContent.vue';
  export default {
    name: 'App',
    components: {
      TodoInput,
      TodoContent
    }
  }
</script>

<style>
  #app {
    font-family: "Segoe UI","微軟正黑體",sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  h5{
    font-weight: bold;
  }


</style>

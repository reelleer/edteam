<template>
  <main id="app" class="ToDo-container">
    <h1>ToDo list con Vuex</h1>
    <a href="../">Regresar</a>
    <div>
      <todo-add></todo-add>
      <todo-list></todo-list>
    </div>
  </main>
</template>

<script>
import ToDoList from './components/ToDoList.vue'
import ToDoAdd from './components/ToDoAdd.vue'
export default {
  name: 'app',
  components: {
    'todo-list': ToDoList,
    'todo-add' : ToDoAdd
  }
}
</script>

<style lang="scss">
:root {
  --color-primary: #41B883;
  --color-secondary: #35495E;
}

html {
  font-family: sans-serif;
  font-size: 16px;
  line-height: 1.6;
}

body {
  margin: 0;
  height: 100vh;
  display: flex;
  background: linear-gradient(
      180deg,
      var(--color-secondary),
      var(--color-primary)
    );
  color: #333;
}

a {
  display: block;
  margin: 1rem auto;
  text-align: center;
  color: var(--color-secondary);
  transition: all .3s ease-out;
  
  &:hover {
    color: var(--color-primary);
  }
}

.ToDo {
  &-container {
    margin: auto;
    padding: 1rem;
    width: 24rem;
    background-color: #fff;
    border-radius: .5rem;
    box-shadow: 0 0 2rem regba(0, 0, 0, .25);
  }
  &-title {
    text-align: center;
    margin-top: 0;
  }
  &-input {
    width: 100%;
    padding: .5rem;
    font-size: 1rem;
    outline: none;
    border-radius: .25rem;
    border: solid 1px #eee;
    box-sizing: border-box;
  }
  &-task {
    margin-bottom: .5rem;
    
    &:hover {
      cursor: pointer;
    }
  }

  &tasks {
    padding-left: 1.5rem;
  }
}
.completed {
  text-decoration: line-through;
  color: #555;
}
</style>

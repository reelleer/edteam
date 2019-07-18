<template>
  <form v-on:submit.prevent="addToDo">
    <input
      class="ToDo-Input"
      type="text"
      placeholder="Agrega una tarea"
      v-model="task">
  </form>
</template>
<script>
export default {
  name: 'todo-add',
  data() {
    return {
      task: '',
      id: 3
    }
  },
  methods: {
    addToDo(){
      this.$store.dispatch('addTodo', this);
      this.id++;
      this.task='';
    }
  }
}
</script>

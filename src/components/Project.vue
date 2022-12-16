<template>
  <div @dblclick="$emit('toggle-active', project.id)" :class="[project.active ? 'active' : '', 'project']">
    <h3>
      {{ project.text }}
      <i @click="$emit('delete-project')" class="fas fa-times"></i>
    </h3>
    <p>{{ project.date }}</p>
  </div>

</template>

<script>
export default {
  name: 'ProjectDetail',
  props: {
    project: Object
  }
}
</script>

<style scoped>
.fas {
  color: red;
}

.project {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.project.active {
  border-left: 5px solid green;
}

.project h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
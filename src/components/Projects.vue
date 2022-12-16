<template>
    <div :key="project.id" v-for="project in projects">
        <ProjectDetail @toggle-active="$emit('toggle-active', project.id)"
            @delete-project="$emit('delete-project', project.id)" :project="project" />
    </div>
</template>

<script>
import ProjectDetail from './Project.vue'

export default {
    name: 'MyProjects',
    props: {
        projects: Array
    },
    components: {
        ProjectDetail
    },
    emits: ['delete-project', 'toggle-active']
}
</script>
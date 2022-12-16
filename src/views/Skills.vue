<template>
    <div class="row">
        <div class="col-xl-12 col-md-12">
            <h1>Skills</h1>

            <button type="button" class="btn btn-primary btn-right-top">Skill toevoegen</button>

            <div className='search-bar'>
                <input type="text" name="search" id="search" placeholder='Zoeken...'/>
            </div>

            <div class="card">
                <div class="card-block px-0 py-0">
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Skill</th>
                                    <th>Categorie</th>
                                    <th>Verwijderen</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="unread" :key="skill.id" v-for="skill in skills">
                                    <td>{{ skill.name }}</td>
                                    <td>{{ skill.category }}</td>
                                    <td><a @click="deleteProject(skill.id)" class="label theme-bg-btn-red text-white f-12"><i class="feather icon-trash-2"></i> Verwijderen</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjSkills',
    data() {
        return {
            skills: [],
            showAddProject: false
        }
    },
    methods: {
        toggleAddProject() {
            this.showAddProject = !this.showAddProject
        },

        addProject(skill) {
            this.skills = [...this.skills, skill]
        },

        async deleteProject(id) {
            if (confirm('Wil je dit project verwijderen?')) {
                this.skills = this.skills.filter((skill) => skill.id !== id)
            }
        },

        async fetchProjects() {
            const res = await fetch('api/projects', {
                method: 'GET'
            })
            const data = await res.json();
            return data;
        }

    },
    async created() {
        this.skills = [{
            id: 1,
            name: "Python",
            category: 'Software'
        },
        {
            id: 2,
            name: "PHP",
            category: 'Software'
        },
        {
            id: 3,
            name: "Javascript",
            category: 'Software'
        }]
    }
}
</script>

<style scoped>

</style>
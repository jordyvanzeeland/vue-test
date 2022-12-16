<template>
    <div class="row">
        <div class="col-xl-12 col-md-12">
            <h1>Projecten</h1>
            <button type="button" class="btn btn-primary btn-right-top">Project toevoegen</button>

            <div className='search-bar'>
                <input type="text" name="search" id="search" placeholder='Zoeken...'/>
            </div>
            <div class="card">
                <div class="card-block px-0 py-0">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Projectnaam</th>
                                    <th>Categorie</th>
                                    <th>Type</th>
                                    <th>Aangemaakt op</th>
                                    <th>Verwijderen</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="unread" :key="project.project_id" v-for="project in projects">
                                    <td>{{ project.name }}</td>
                                    <td>{{ project.categoryname }}</td>
                                    <td>{{ project.typename }}</td>
                                    <td>{{ project.projectdate }}</td>
                                    <td><a @click="deleteProject(project.id)" class="label theme-bg-btn-red text-white f-12"><i class="feather icon-trash-2"></i> Verwijderen</a></td>
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
    name: 'MyProjects',
    data() {
        return {
            projects: [],
            showAddProject: false
        }
    },
    methods: {
        toggleAddProject() {
            this.showAddProject = !this.showAddProject
        },

        addProject(project) {
            // const res = await fetch('api/projects/new', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'project_name': project.text,
            //         'project_date': project.date,
            //         'active': project.active
            //     }
            // })
            // const data = await res.json();
            // return data;

            this.projects = [...this.projects, project]
        },

        async deleteProject(id) {
            if (confirm('Wil je dit project verwijderen?')) {

                // const res = await fetch(`api/projects/${id}/delete`, {
                //     method: 'DELETE',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     }
                // })

                // res.status === 200 ? (this.projects = this.projects.filter((project) => project.project_id !== id)) : alert('Error deleteing project');
                this.projects = this.projects.filter((project) => project.id !== id)
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
        this.projects = [{
            id: 1,
            name: "Leesanalayse",
            category: 1,
            categoryname: 'Software',
            type: 1,
            typename: 'Project',
            projectdate: '11-05-2022 14:30'
        },
        {
            id: 2,
            name: "Portfolio manager",
            category: 1,
            categoryname: 'Software',
            type: 1,
            typename: 'Project',
            projectdate: '30-07-2022 10:48'
        }]
    }
}
</script>

<style scoped>

</style>
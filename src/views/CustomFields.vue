<template>
    <div class="row">
        <div class="col-xl-12 col-md-12">
            <h1>Custom Fields</h1>

            <button type="button" class="btn btn-primary btn-right-top">Veld toevoegen</button>

            <div className='search-bar'>
                <input type="text" name="search" id="search" placeholder='Zoeken...'/>
            </div>

            <div class="card">
                <div class="card-block px-0 py-0">
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Veldnaam</th>
                                    <th>Categorie</th>
                                    <th>Verwijderen</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="unread" :key="field.id" v-for="field in fields">
                                    <td>{{ field.name }}</td>
                                    <td>{{ field.category }}</td>
                                    <td><a @click="deleteProject(field.id)" class="label theme-bg-btn-red text-white f-12"><i class="feather icon-trash-2"></i> Verwijderen</a></td>
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
    name: 'CustomFields',
    data() {
        return {
            fields: [],
            showAddProject: false
        }
    },
    methods: {
        toggleAddProject() {
            this.showAddProject = !this.showAddProject
        },

        addProject(field) {
            this.fields = [...this.fields, field]
        },

        async deleteProject(id) {
            if (confirm('Wil je dit project verwijderen?')) {
                this.fields = this.fields.filter((field) => field.id !== id)
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
        this.fields = [{
            id: 1,
            name: "GitHub Repository",
            category: 'Software'
        },
        {
            id: 2,
            name: "Demo",
            category: 'Software'
        }]
    }
}
</script>

<style scoped>

</style>
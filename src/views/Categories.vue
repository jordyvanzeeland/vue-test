<template>
    <div class="row">
        <div class="col-xl-12 col-md-12">
            <h1>Categorieën</h1>

            <button type="button" class="btn btn-primary btn-right-top">Categorie toevoegen</button>

            <div className='search-bar'>
                <input type="text" name="search" id="search" placeholder='Zoeken...'/>
            </div>
            
            <div class="card">
                <div class="card-block px-0 py-0">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Categorie</th>
                                    <th>Verwijderen</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="unread" :key="category.id" v-for="category in categories">
                                    <td>{{ category.name }}</td>
                                    <td><a @click="deleteProject(category.id)" class="label theme-bg-btn-red text-white f-12"><i class="feather icon-trash-2"></i> Verwijderen</a></td>
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
    name: 'ProjCats',
    data() {
        return {
            categories: [],
            showAddProject: false
        }
    },
    methods: {
        toggleAddProject() {
            this.showAddProject = !this.showAddProject
        },

        addProject(category) {
            this.categories = [...this.categories, category]
        },

        async deleteProject(id) {
            if (confirm('Wil je dit project verwijderen?')) {
                this.categories = this.categories.filter((category) => category.id !== id)
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
        this.categories = [{
            id: 1,
            name: "Software"
        },
        {
            id: 2,
            name: "Digital art"
        },
        {
            id: 3,
            name: "Fotografie"
        }]
    }
}
</script>
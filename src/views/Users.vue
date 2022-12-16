<template>
    <div class="row">
        <div class="col-xl-12 col-md-12">
            <h1>Gebruikers</h1>

            <button type="button" class="btn btn-primary btn-right-top">Gebruiker toevoegen</button>

            <div className='search-bar'>
                <input type="text" name="search" id="search" placeholder='Zoeken...'/>
            </div>
            
            <div class="card">
                <div class="card-block px-0 py-0">
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>Gebruikersnaam</th>
                                    <th>Volledige naam</th>
                                    <th>Role</th>
                                    <th>Verwijderen</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="unread" :key="user.id" v-for="user in users">
                                    <td>{{ user.username }}</td>
                                    <td>{{ user.name }}</td>
                                    <td>{{ user.role }}</td>
                                    <td><a @click="deleteProject(user.id)" class="label theme-bg-btn-red text-white f-12"><i class="feather icon-trash-2"></i> Verwijderen</a></td>
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
    name: 'AppUsers',
    data() {
        return {
            users: [],
            showAddProject: false
        }
    },
    methods: {
        toggleAddProject() {
            this.showAddProject = !this.showAddProject
        },

        addProject(user) {
            this.users = [...this.users, user]
        },

        async deleteProject(id) {
            if (confirm('Wil je dit project verwijderen?')) {
                this.users = this.users.filter((user) => user.id !== id)
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
        this.users = [{
            id: 1,
            username: "jvanzeeland",
            name: 'Jordy van Zeeland',
            role: 'Beheerder'
        }]
    }
}
</script>

<style scoped>

</style>
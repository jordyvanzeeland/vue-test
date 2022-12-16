<template>
    <form @submit.prevent="onSubmit()" class="add-form">
        <div class="form-control">
            <label>Naam</label>
            <input type="text" v-model="text" name="text" placeholder="Projectnaam" />
        </div>
        <div class="form-control form-control-check">
            <label>Actief</label>
            <input type="checkbox" v-model="active" name="active" />
        </div>

        <span>Voorbeeld:</span>
        <div :class="[active ? 'active' : '', 'example project']">
            <h3>{{ text }}</h3>
            <p>{{ date }}</p>
        </div>

        <input type="submit" value="Save Task" class="btn btn-block" />
    </form>
</template>

<script>

const date = new Date();

var day = date.getDate();
var month = (date.getMonth() + 1)
var year = date.getFullYear();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

if (month < 10) {
    month = '0' + month;
}

if (day < 10) {
    day = '0' + day;
}

if (hours < 10) {
    hours = '0' + hours;
}

if (minutes < 10) {
    minutes = '0' + minutes;
}

if (seconds < 10) {
    seconds = '0' + seconds;
}

const dateOfToday = day + '-' + month + '-' + year + ' ' + hours + ':' + minutes + ':' + seconds;

export default {
    name: 'AddProject',
    data() {
        return {
            text: '',
            date: dateOfToday,
            active: true
        }
    },
    methods: {
        onSubmit() {

            if (!this.text) {
                alert("Vul de projectnaam in")
                return
            }

            const newProject = {
                text: this.text,
                date: this.date,
                active: this.active
            }

            this.$emit('add-project', newProject)

            this.text = ''
            this.day = dateOfToday
            this.active = true
        }
    }
}
</script>

<style scoped>
.add-form {
    margin-bottom: 40px;
}

.add-form span {
    font-weight: 600;
    font-size: 14px;
}

.form-control {
    margin: 20px 0;
}

.form-control label {
    display: block;
}

.form-control input {
    width: 100%;
    height: 40px;
    margin: 5px;
    padding: 3px 7px;
    font-size: 17px;
}

.form-control-check {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.form-control-check label {
    flex: 1;
}

.form-control-check input {
    flex: 2;
    height: 20px;
}

.project {
    background: #f4f4f4;
    margin: 5px;
    padding: 10px 20px;
    cursor: pointer;
    margin-bottom: 20px;
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
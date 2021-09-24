<template>
  <div class="tasks_box p-1 p-sm-2 p-md-3 p-lg-4 p-xl-5 bg-white shadow rounded h-100">
        <h4 class="border-start border-4 border-success ps-2 my-1">TASKS COMPLETATE</h4>
        <div @click="clearCompletedTasks()" class="my_btn btn-light w-100 border mb-2"> Svuota Lista </div>

        <div v-if="completed_tasks == '' " class="alert alert-info text-center ">Non ci sono tasks completate 💤</div>
        <div class="task my-1 ps-2 d-flex justify-content-between align-items-center" v-for="task in completed_tasks" :key="task.id"> 
            <span>{{task}}</span>
            <i @click="restoreTask(task, index)" class="fas fa-undo-alt my_btn bg-info text-white"></i>
        </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            completed_tasks : [],
            tasks: []
        }
    },
    methods: {
        restoreTask(task, index){
            this.tasks.unshift(task);
            this.saveTasks();
            this.completed_tasks.splice(index, 1);
            this.saveCompletedTasks();
        },
        clearCompletedTasks(){
            this.completed_tasks = [];
            this.saveCompletedTasks();
        },
        saveCompletedTasks() {
            const parsed = JSON.stringify(this.completed_tasks);
            localStorage.setItem('completedTasks', parsed);
        },
        saveTasks() {
            const parsed = JSON.stringify(this.tasks);
            localStorage.setItem('activeTasks', parsed);
        },
        loadTasks(){
            // active tasks
            if (localStorage.getItem('activeTasks')) {
                try {
                    this.tasks = JSON.parse(localStorage.getItem('activeTasks'));
                } catch(e) {
                    localStorage.removeItem('activeTasks');
                }
            }
            // completed tasks
            if (localStorage.getItem('completedTasks')) {
                try {
                    this.completed_tasks = JSON.parse(localStorage.getItem('completedTasks'));
                } catch(e) {
                    localStorage.removeItem('completedTasks');
                }
            }
            // trash tasks
            if (localStorage.getItem('trashTasks')) {
                try {
                    this.trash_tasks = JSON.parse(localStorage.getItem('trashTasks'));
                } catch(e) {
                    localStorage.removeItem('trashTasks');
                }
            }
        }
    },
    mounted () {
        this.loadTasks();
    }
}
</script>

<style lang='scss' scoped>
.task {
    background-color: #d1e7dd;
    color: #146c43;
}
</style>
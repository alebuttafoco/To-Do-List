<template>
 <div class="tasks_box p-1 p-sm-2 p-md-3 p-lg-4 p-xl-5 bg-white shadow rounded h-100">
     <!-- create task -->
    <div class="add_task d-flex mb-3">
        <input @keyup.enter="createTask()" type="text" class="flex-grow-1 text-center border-bottom border-3" :class=" checkTask() ? 'border-success' : 'border-danger' " placeholder="Aggiungi una nuova task 👇" v-model="task">
        <i @click='createTask()' class="fas fa-save my_btn text-white" :class=" checkTask() ? 'bg-success' : 'bg-danger' "></i>
    </div>

    <!-- SHOW tasks -->
    <p v-if="tasks == '' " class="alert alert-info text-center mt-5">Non ci sono tasks da visualizzare, inizia scrivendo qualcosa <i class="fas fa-keyboard"></i> </p>

    <div v-else class="tasks bg-light my-2 d-flex align-items-center" v-for="(active_task, index) in tasks" :key="active_task.id">
        <!-- left -->
        <div class="left d-flex align-items-center flex-grow-1">
            <div class="actions">
                <!-- complete task -->
                <i @click="completeTask(active_task, index)" class="fas fa-check btn-success my_btn"></i>
            </div>
            <!-- text of task -->
            <div class="text d-flex align-items-center flex-grow-1">
                <div class="px-2">{{active_task}} </div>
            </div>
        </div>
        <!-- right -->
        <div class="right d-flex">
            <!-- remove task -->
            <i @click="removeTask(active_task, index)" class="fas fa-trash btn-danger my_btn"></i>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            task: '',
            tasks: [],
            completed_tasks: [],
            trash_tasks: [],
            selectedTask: null,
        }
    },
    methods: {
        checkTask(){
            if (this.task.length > 0 && this.task.length < 30) {
                return true;
            } else {
                return false;
            }
        },
        createTask(){
            if (this.task.length > 0 && this.task.length < 30) {
                this.tasks.unshift(this.task);
                this.task = '';
                this.saveTasks();
            }
        },
        saveTasks() {
            const parsed = JSON.stringify(this.tasks);
            localStorage.setItem('activeTasks', parsed);
        },
        removeTask(task,index) {
            this.trash_tasks.unshift(task);
            const parsed = JSON.stringify(this.trash_tasks);
            localStorage.setItem('trashTasks', parsed);

            this.tasks.splice(index, 1);
            this.saveTasks();
        },
        completeTask(task, index) {
            this.completed_tasks.unshift(task);
            const parsed = JSON.stringify(this.completed_tasks);
            localStorage.setItem('completedTasks', parsed);

            this.tasks.splice(index, 1);
            this.saveTasks();
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

<style lang='scss'>
input {
    height: inherit;
    border: none;
    transition: .2s;

    &:focus{
        outline:none;
    }
}
</style>
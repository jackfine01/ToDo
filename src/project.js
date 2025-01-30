import { createTaskDOM } from "./DOM";

class Project { 
    constructor (title, tasks = []){
    this._title = title;
    this._tasks = tasks;
    };

    get title(){
        return this._title;
    };

    set title(newTitle){
        this._title = newTitle;
    };

    get tasks(){
        return this._tasks;
    }

    addTask( Task ){
        this._tasks.push(Task);
    };
    deleteTask(taskToDelete) {
        this._tasks = this._tasks.filter(task => task !== taskToDelete);
    }
};

function createProjectArray(){
    return [];
};

function checkProject(task, array){

    for(let i = 0; i < array; i++){

        if (array[i].title == task.project){
            console.log(`Checking: ${array[i].title} against ${task.project}`)
            return true;
        }
        else if(array[i].title != task.project){
            console.log(`Checking: ${array[i].title} against ${task.project}`)
            return false;
        };
    };
    return false;
};

function addToProject(task, array){
    if (checkProject(task, array)){
        array.tasks.push(task)
    }
};

function createProjCard(title){
    const sidebar = document.getElementById('sidebar'); 
    const card = document.createElement('div');
    card.className = 'projCard';

    const titleElement = document.createElement('div');
    titleElement.textContent = title;
    titleElement.className = '.title';

    card.appendChild(sidebar)
};
export { Project, createProjectArray, checkProject, addToProject, createProjCard};
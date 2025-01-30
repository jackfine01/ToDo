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


function createProjCard(title){
    const sidebar = document.getElementById('sidebar');

    const card = document.createElement('div');
    card.className = 'projCard';

    const titleElement = document.createElement('div');
    titleElement.textContent = title;
    titleElement.className = '.title';
    
    card.appendChild(titleElement);
    sidebar.appendChild(card);
};

function addTaskToProject(project, task){
    project.tasks.push(task);
}
function addProject(array, project){
    array.push(project)
};
export { Project, addProject, addTaskToProject, createProjectArray, createProjCard};
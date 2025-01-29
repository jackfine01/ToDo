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
    };
    return false;
};

function addToProject(task, array){
    if(checkProject(task,array)){
        array.push(task);
    };
};
export { Project, createProjectArray, checkProject, addToProject};
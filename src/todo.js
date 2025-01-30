import { addToProject, Project } from "./project.js"

class Task { 
    constructor (title, description, date){
    this._title = title;
    this._description = description;
    this._date = date;    
};

    get title(){
        return this._title;
    };

    set title(newTitle){
        this._title = newTitle;
    }

    get description(){
        return this._description;
    };

    set description(newDescription){
        this._description = newDescription;
    }

    get date(){
        return this._date;
    };

    set date(newDate){
        this._date = newDate;
    }
};
export { Task };

function createNewTask(title, description, date, project){
    const newTask = new Task(title, description, date, project)
};
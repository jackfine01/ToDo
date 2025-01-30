import { addToProject, Project } from "./project.js"

class Task { 
    constructor (title, description, date, project){
    this._title = title;
    this._description = description;
    this._date = date;    
    this._project = project;
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

    get project(){
        return this._project;
    };

    set project(newProj){
        this._project = newProj;
    }

    get date(){
        return this._date;
    };

    set date(newDate){
        this._date = newDate;
    }
};
export { Task };


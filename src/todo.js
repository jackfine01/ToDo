class Task { 
    constructor (title, description, date, notes, project){
    this.title = title;
    this.description = description;
    this.date = date;
    this.notes = notes;
    this.project = project;
    };

    getTitle(){
        return this.title;
    };
};
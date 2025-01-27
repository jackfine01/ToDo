class Task { 
    constructor (title, description, date, project){
    this.title = title;
    this.description = description;
    this.date = date;
    this.project = project;
    };

    getTitle(){
        return this.title;
    };
};
export { Task };
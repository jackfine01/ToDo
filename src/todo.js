class Task { 
    constructor (title, description, date){
    this.title = title;
    this.description = description;
    this.date = date;    };

    getTitle(){
        return this.title;
    };
};
export { Task };
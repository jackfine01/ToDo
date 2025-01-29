import { Project } from "./project.js"

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

    get date(){
        return this._date;
    };

    set date(newDate){
        this._date = newDate;
    }
};
export { Task };

function createTaskDOM(){
    const content = document.getElementById('content');
    const taskCard = document.createElement('div');
    taskCard.className = 'card';
    content.appendChild(taskCard);
    

    const id = generateID();
    const form = createForm(id);
    taskCard.appendChild(form);
};
export { createTaskDOM }

function generateID(id){
    id = Math.random().toString(36).slice(2,9);
    return id;
};



export { generateID }

function createForm(id){
    const form = document.createElement('form');


    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title'
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'title';
    form.appendChild(titleLabel)
    form.appendChild(titleInput)

    const descLabel = document.createElement('label');
    descLabel.textContent = 'Description'
    const descInput = document.createElement('input');
    descInput.type = 'text';
    descInput.name = 'description';
    form.appendChild(descLabel)
    form.appendChild(descInput)

    const projectLabel = document.createElement('label');
    projectLabel.textContent = 'Project'
    const projectInput = document.createElement('input');
    projectInput.type = 'text';
    projectInput.name = 'description';
    form.appendChild(projectLabel)
    form.appendChild(projectInput)

    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Due Date'
    const dateInput = document.createElement('input');
    dateInput.type = 'text';
    dateInput.name = 'dueDate';
    form.appendChild(dateLabel)
    form.appendChild(dateInput)

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

        form.addEventListener('submit', function (event) {
            event.preventDefault(); 
            const title = titleInput.value;
            const description = descInput.value;
            const project = projectInput.value;
            const dueDate = dateInput.value;
    
            let newTask = new Task(title, description, dueDate, project)
            form.parentElement.remove();
        });

    return form;
}

function createCard(title, description, dueDate) {
    const content = document.getElementById('content'); 
    const card = document.createElement('div');
    card.className = 'card';

    const titleElement = document.createElement('div');
    titleElement.textContent = title;
    titleElement.className = '.title';

    const descriptionElement = document.createElement('div');
    descriptionElement.textContent = description;
    descriptionElement.className = '.description';
    
    const projectElement = document.createElement('div');
    projectElement.textContent = project;
    projectElement.className = '.projNum';

    const dueDateElement = document.createElement('div');
    dueDateElement.textContent = `Due Date: ${dueDate}`;
    dueDateElement.className = '.dueDate';

    card.appendChild(titleElement);
    card.appendChild(descriptionElement);
    card.appendChild(projectElement);
    card.appendChild(dueDateElement);

    content.appendChild(card);
};
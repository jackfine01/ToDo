import { Task } from "./todo"
import { addToProject } from "./project"

function createNewTask(title, description, date, project){
    const newTask = new Task(title, description, date, project)
    addToProject(newTask, newTask.project)
};

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

function createForm(){
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

            createCard(title, description, dueDate, project);
            createNewTask(title, description, dueDate, project);
            form.parentElement.remove();
        });

    return form;
}
export { createForm };

function createCard(title, description, dueDate, project) {
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
    projectElement.textContent = `Project:  ${project}`;
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
export { createCard }

function createProjCard(title){
    const sidebar = document.getElementsByClassName('sidebar'); 
    const card = document.createElement('div');
    card.className = 'projCard';

    const titleElement = document.createElement('div');
    titleElement.textContent = title;
    titleElement.className = '.title';
    card.appendChild(titleElement);
    sidebar.appendChild(card);
};
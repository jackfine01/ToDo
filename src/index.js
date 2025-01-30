import "./styles.css";
import { Task } from "./todo.js"
import { createProjectArray, addProject, Project, addTaskToProject, createProjCard } from "./project.js"
// import { createTaskDOM, generateID, createForm, createCard } from "./DOM.js"
const newProjectDOM = document.getElementById('newToDo');

newProjectDOM.addEventListener('click', function(){
    createTaskDOM();
    console.log('creating toDo');
});

function createProjDOM(){
    const sidebar = document.getElementById('sidebar');
    const projCard = document.createElement('div');
    projCard.className = 'projCard';
    sidebar.appendChild(projCard);
    
    const form = createProjForm();
    projCard.appendChild(form);
};


const projectArray = createProjectArray();
const general = new Project("General");
addProject(projectArray, general)
const TaskOne = new Task("Task One", "Description One", "Due Date")
addTaskToProject(general, TaskOne);

const ProjectButton = document.getElementById("newProj")
ProjectButton.addEventListener('click', function(event){
    createProjDOM();
});

function displayProjectArray(){
    const cardsToDelete = document.querySelectorAll('.projCard')
    cardsToDelete.forEach(element => {
        element.remove();
    });  
    projectArray.forEach(element => {
        createProjCard(element.title)
    });  
}

function displayProjectTasks(){

}



function createTaskDOM(){
    const content = document.getElementById('content');
    const taskCard = document.createElement('div');
    taskCard.className = 'card';
    content.appendChild(taskCard);
    

    const id = generateID();
    const form = createForm();
    taskCard.appendChild(form);
};

function generateID(id){
    id = Math.random().toString(36).slice(2,9);
    return id;
};


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
            createNewTask(title, description, dueDate, project, projectArray);
            form.parentElement.remove();
        });

    return form;
}

function createProjForm(){
    const form = document.createElement('form');

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title'
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.name = 'title';
    form.appendChild(titleLabel)
    form.appendChild(titleInput)

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

        form.addEventListener('submit', function (event) {
            event.preventDefault(); 
            const title = titleInput.value;
            const newProj = new Project(title)
            createProjCard(title);
            addProject(projectArray, newProj)
            form.parentElement.remove();
            console.log(projectArray)
        });

    return form;
}

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

displayProjectArray();




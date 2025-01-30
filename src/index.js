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

let currentProject = general;
const setCurrentProject = function(project){
    currentProject = project;
}
let currentTask = TaskOne;
const setCurrentTask = function(task){
    currentTask = task;
}

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
        const card = createProjCard(element.title)
        card.addEventListener('click', function (event) {
            event.preventDefault(); 
            setCurrentProject(element);
            console.log(currentProject.title);
            displayProjectTasks(element);
            displayProjectArray()
        });
    });  
}


function displayProjectTasks(project){
    const cardsToDelete = document.querySelectorAll('.card')
    cardsToDelete.forEach(card => {
        card.remove();
    });  
    project.tasks.forEach(task => {
        createCard(task.title, task.description, task.date)
    });  
    const activeCards = document.querySelectorAll('.card')
    activeCards.forEach(card => {
        const deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.textContent = 'Delete';
    
        deleteButton.addEventListener('click', function(event){
            event.preventDefault();
            currentProject.deleteTask(currentTask);
            card.remove();
        })
        card.appendChild(deleteButton);
        card.addEventListener('mouseover', function(event){
            event.preventDefault();
            for(let i = 0; i< project.tasks.length; i++){
                if(project.tasks[i].title==card.firstChild.textContent){
                    setCurrentTask(project.tasks[i])
                    console.log(currentTask);
                };
            };
        })
    })
}

function createTaskDOM(){
    const content = document.getElementById('content');
    const taskCard = document.createElement('div');
    taskCard.className = 'card';
    content.appendChild(taskCard);



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
            const dueDate = dateInput.value;



            const newTask = new Task(title, description, dueDate)
            currentProject.tasks.push(newTask)
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

    const dueDateElement = document.createElement('div');
    dueDateElement.textContent = `Due Date: ${dueDate}`;
    dueDateElement.className = '.dueDate';



    card.appendChild(titleElement);
    card.appendChild(descriptionElement);
    card.appendChild(dueDateElement);

    content.appendChild(card);
};

displayProjectArray();




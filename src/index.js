import "./styles.css";
import { Task} from "./todo.js"
import { createProjectArray, addToProject, Project, checkProject, createProjCard } from "./project.js"
import { createTaskDOM, generateID, createForm, createCard } from "./DOM.js"
const newProjectDOM = document.getElementById('newToDo');
newProjectDOM.addEventListener('click', function(){
    createTaskDOM();
    console.log('creating toDo');
});

const projectArray = createProjectArray();
console.log(projectArray);

function displayProjectArray(){
    projectArray.forEach(element => {
        createProjCard(element.title)
    });  
}

const ProjectOne = new Project('Project 1', [])
projectArray.push(ProjectOne)
// 

const TaskOne = new Task('Task One', 'Lorem Ipsyum', '1/1/4444', 'Project 1')
console.log(TaskOne.project)
console.log(ProjectOne.title)

addToProject(TaskOne, ProjectOne);
console.log(projectArray)

displayProjectArray();


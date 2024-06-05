import { rednerFromLocalStorage } from './localStorage';
import createProject, { Project, addTaskToProject, renderProject } from './project';
import './style.css'
import './task'
import createTask from './task';

const projectButton = document.querySelector("#newProject");
projectButton.addEventListener("click", () =>{
    createProject();
});
rednerFromLocalStorage()
const body = document.querySelector(".content");
//const exampleProject = createProject("example");
//addTaskToProject(exampleProject,createTask("hello","disc","2022","urgent"));
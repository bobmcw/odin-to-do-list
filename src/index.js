import createProject from './project';
import './style.css'
import './task'
import createTask from './task';

const projectButton = document.querySelector("#newProject");
projectButton.addEventListener("click", () =>{
    createProject();
});
const body = document.querySelector(".content");
body.appendChild(createTask("hello","disc","2022","urgent"))
import createTask from "./task";

export class Project{
    constructor(name){
        this.name = name;
        this._tasks = [];
    }
   set newTask(task){
    this._tasks.push(task);
   }
   get getTasks(){
    return this._tasks;
   } 
get addTaskButton (){
    const button = document.createElement("button");
    button.classList.add("addTask");
    const text = document.createElement("h2");
    text.innerText = "+";
    button.appendChild(text);
    button.addEventListener("click", () => {
        this.newTask = createTask("example","task created from button","2024","yes");
        renderProject(this);
    });
    return button;
}
}
const newProject = (name) =>{
    return new Project(name);
}
export function addTaskToProject(project,task){
    project.newTask = task;
}
const renderProject = (project) => {
    const taskSection = document.querySelector(".content");
    taskSection.innerHTML = "";
    project.getTasks.forEach(task => {
       taskSection.appendChild(task.formatedTask) 
    });
    taskSection.appendChild(project.addTaskButton)
}
export default function createProject(name){
    const project = newProject(name);
    const projectTab = document.querySelector(".sidePanel");
    const linkToProject = Object.assign(document.createElement("button"),{innerText: project.name});
    linkToProject.addEventListener("click",() => {
        renderProject(project);
    });
    projectTab.appendChild(linkToProject);
    return project

}
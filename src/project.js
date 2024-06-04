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
       console.log(task.formaredTask)
       taskSection.appendChild(task.formaredTask) 
    });
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
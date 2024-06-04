class Project{
    constructor(name){
        this.name = name;
        this.tasks = []
    }
   set newTask(Task){
    this.tasks.append(Task);
   }
}
const newProject = () =>{
    return new Project(prompt("name"));

}
export default function createProject(){
    const project = newProject();
    const projectTab = document.querySelector(".sidePanel");
    const linkToProject = Object.assign(document.createElement("button"),{innerText: project.name});
    projectTab.appendChild(linkToProject);


}

class Task {
    constructor(name,discription,dueDate,priority){
        this.name = name;
        this.discription = discription;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    get getInfo(){
        return [this.name,this.discription,this.dueDate,this.priority];
    }
}

export default function createTask(name,discription,dueDate,priority){
    const taskItem = Object.assign(document.createElement("div"), {class: "task"});
    const info = new Task("example task","do nothing","2023","urgent");
    info.getInfo.forEach(element => {
        const temp = Object.assign(document.createElement("div"),{innerText: element});
        taskItem.appendChild(temp);
    });
    return taskItem;
}
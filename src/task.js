
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
    get formatedTask(){
        const formated = document.createElement("div");
        formated.classList.add("task");
        const header = document.createElement("div") 
        header.classList.add("taskheader");

        const name = Object.assign(document.createElement("h3"),{innerText: this.name});
        const discription = Object.assign(document.createElement("p"),{innerText: this.discription});
        const dueDate = Object.assign(document.createElement("h4"),{innerText: this.dueDate});
        const priority = Object.assign(document.createElement("h4"),{innerText: this.priority});
        header.append(name,dueDate,priority)
        formated.append(header,discription)
        return formated;
    }
}

export default function createTask(name,discription,dueDate,priority){
    const task = new Task(name,discription,dueDate,priority);
    return task.formatedTask;
}
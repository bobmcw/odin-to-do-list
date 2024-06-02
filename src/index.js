import './style.css'
import './task'
import createTask from './task';

const body = document.querySelector(".content");
body.appendChild(createTask("hello","disc","2022","urgent"))
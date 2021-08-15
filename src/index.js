// import simpleTemplate from "./templates/simple.hbs"
// import listTemplate from "./templates/list.hbs"
// import arrayTemplate from "./templates/array.hbs"
// import libsTemplate from "./templates/libs.hbs"

// import { base, frameworks, list, libs } from "./data/hbsData.js"

// const root = document.querySelector("#root")

// const markup = simpleTemplate(base);
// root.insertAdjacentHTML('beforeend', markup)

// const listMarkup = listTemplate(list)
// root.insertAdjacentHTML('beforeend', listMarkup)

// const arrayMarkup = arrayTemplate(frameworks)
// root.insertAdjacentHTML('beforeend', arrayMarkup)

// const libsMarkup = libsTemplate(libs)
// root.insertAdjacentHTML('beforeend', libsMarkup)

// Делаем to-do-list
import refs from './js/refs.js'
import { submitHandler } from './js/handlers.js'
import questionsTemplate from './templates/questions.hbs'
import serverData from './data/serverData.js'
import { createLi } from './js/templateStringHandler.js'

import "./styles/main.scss";
// 1) Получить доступ к данным формы - событие Submit
// 2) На основе данных из формы нарисовать элемент списка - hbs для отрисовки элементов

// const markup = questionsTemplate(serverData)
// refs.root.insertAdjacentHTML('beforeend', markup)

// refs.form.addEventListener('submit', submitHandler)

// localStorage.setItem('theme', 'dark')
// const theme = localStorage.getItem('theme')
// console.log(theme);

// const settings = {
//     theme: "pink",
//     fontSize: 12,
//     fontFamily: "Roboto",
// }

// const dataForStorage = JSON.stringify(settings)
// localStorage.setItem("settings", dataForStorage)

// const data = localStorage.getItem('settings')
// console.log(JSON.parse(data));


// Переписываем todo-list под шаблонную строку и сохраняем списки в локал сторедж

const storageCollection = JSON.parse(localStorage.getItem("list"))
const dataFromStorage = storageCollection ? storageCollection : [];
const result = dataFromStorage.map((string) => createLi(string)).join('')
    
refs.ul.insertAdjacentHTML('beforeend', result)
refs.form.addEventListener('submit', submitHandler)
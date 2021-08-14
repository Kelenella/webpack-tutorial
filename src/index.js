import simpleTemplate from "./templates/simple.hbs"
import listTemplate from "./templates/list.hbs"
import arrayTemplate from "./templates/array.hbs"
import libsTemplate from "./templates/libs.hbs"


import {base, frameworks, list, libs} from "./data/hbsData.js"
import "./styles/main.scss";

const root = document.querySelector("#root")

const markup = simpleTemplate(base);
root.insertAdjacentHTML('beforeend', markup)

const listMarkup = listTemplate(list)
root.insertAdjacentHTML('beforeend', listMarkup)

const arrayMarkup = arrayTemplate(frameworks)
root.insertAdjacentHTML('beforeend', arrayMarkup)

const libsMarkup = libsTemplate(libs)
root.insertAdjacentHTML('beforeend', libsMarkup)
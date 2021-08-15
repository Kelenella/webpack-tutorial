import refs from './refs.js'
import serverData from '../data/serverData.js';
import questionsTemplate from '../templates/questions.hbs';

export function submitHandler(e) {
    e.preventDefault();
    const inputValue = refs.input.value;
    if (inputValue === '') return
    serverData.push(inputValue);
    refs.input.value = '';
    const markup = questionsTemplate(serverData);
    // refs.root.insertAdjacentHTML('beforeend', markup);
    refs.root.innerHTML = markup;
    
}

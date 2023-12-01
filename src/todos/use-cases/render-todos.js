import { createTodoHML } from "./create-todo-html";

let element; 

export const renderTodos = ( elementId, todos = [] ) => {

    if (!element) 
     element = document.querySelector(elementId);

     if( !element) throw new error(`element ${elementId} not found `);
    
     element.innerHTML = '';

    todos.forEach(todo => {
        element.append (createTodoHML(todo))
    });
}
import { Todo } from "../todos/models/todo-model";

const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}

const state = {
    todos: [
        new Todo ('piedra del alma'),
        new Todo ('piedra del infinito'),
        new Todo ('piedra del tiempo'),
    ],
    filter: Filters.All,
}

const initStore = () => {
}

const loadStore = () => {
    throw new Error('no implementado');
}


const getTodos = (filter = Filters.All) => {

    switch (filter) {
        case filter.All:
            return [...state.todos];
        case filter.Completed:
            return state.todos.filter(todo => todo.done);
        case filter.Pending:
            return state.filter (todo => !todo.done);
        default:
            throw new Error(`option no valido` );
    }
}

const addTodo = (description) => {
    if (!description) throw new error('description required');

    state.todos.push (new Todo(description));

}


const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if (todo.id === todoId){
            todo.done = !todo.done;
        }
        return todo;
    })
}


const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
}


const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done);

}


const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter
}


const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}
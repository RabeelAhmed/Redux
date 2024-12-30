import { createStore } from 'redux';

// Define the initial state
const initialState = {
    task: []
};

// Define the reducer
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                task: [...state.task, action.payload]
            };
        case 'DELETE_TASK':
            return {
                ...state,
                task: state.task.filter((task, index) => index !== action.payload)
            };
        default:
            return state;
    }
};

// Create the store
export const store = createStore(taskReducer);

// Action creators
export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task
});

export const deleteTask = (index) => ({
    type: 'DELETE_TASK',
    payload: index
});

// console.log("Initial state", store.getState());

// store.dispatch(addTask('Task 1'));
// console.log("Updated state", store.getState());

// store.dispatch(addTask('Task 2'));
// console.log("Updated state", store.getState());

// store.dispatch(addTask('Task 3'));
// console.log("Updated state", store.getState());

// store.dispatch(addTask('Task 4'));
// console.log("Updated state", store.getState());

// store.dispatch(deleteTask(1));
// console.log("Updated state", store.getState());
import { ADD_TASK, REMOVE_TASK } from "./toDoTypes";

export function addTask(task){
    return(
        {
            type:ADD_TASK,
            payload:task
        }
    )
}

export function removeTask(taskId){
    return(
        {
            type:REMOVE_TASK,
            payload:taskId
        }
    )
}
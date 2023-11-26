import { ADD_TASK, REMOVE_TASK } from "./toDoTypes"

const initialsState={
    tasks:[]
}


const toDoReducer=(state=initialsState,action)=>{

    switch(action.type){
        case ADD_TASK:return{
            tasks:[...state.tasks,action.payload]
        }
        case REMOVE_TASK:return{
            tasks:state.tasks.filter((item)=>item.id!==action.payload)
        }
        default:return state
    }

}

export default toDoReducer
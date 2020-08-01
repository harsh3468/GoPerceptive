export const setTask = (task)=>(dispatch)=>{
    let allTask = JSON.parse(localStorage.getItem('task'))
    if(allTask){
        allTask[allTask.length] = task
        localStorage.setItem('task',JSON.stringify(allTask))
        dispatch({type:'SET_DATA',payload:JSON.parse(localStorage.getItem('task'))})
    }else{
        localStorage.setItem('task',JSON.stringify([task]))
        dispatch({type:'SET_DATA',payload:JSON.parse(localStorage.getItem('task'))})
    }
}

export const deleteTask = (task)=>(dispatch)=>{
    let previousTask = JSON.parse(localStorage.getItem('task'))
    let updatedTask = previousTask.filter(oldtask=>(oldtask.id!=task.id))
    localStorage.setItem('task',JSON.stringify(updatedTask))
    dispatch({type:'SET_DATA',payload:JSON.parse(localStorage.getItem('task'))})
}

export const editTask = (task)=>(dispatch)=>{
    let previousTask = JSON.parse(localStorage.getItem('task'))
    previousTask.forEach((oldtask,index)=>{
        if(oldtask.id==task.id)
        {  previousTask.splice(index,1,task) }
    })
    
    localStorage.setItem('task',JSON.stringify(previousTask))
    dispatch({type:'SET_DATA',payload:JSON.parse(localStorage.getItem('task'))})
}

export const getData = ()=>(dispatch)=>{
    if(localStorage.getItem('task')){
        dispatch({type:'SET_DATA',payload:JSON.parse(localStorage.getItem('task'))})
    }
}
export const removeAll = ()=>(dispatch)=>{
    localStorage.clear()
    dispatch({type:'SET_DATA',payload:[]})
}
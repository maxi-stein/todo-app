import { useState } from "react"
import { Header } from "./components/Header"
import { TaskCreator } from "./components/TaskCreator"
import { Task } from "./components/Task"

export const App = () => {

  const [taskList,setTaskList] = useState([])
  const [pendingTaskList,setPendingTaskList] = useState(0)

  const handleCompleted = id => {

    //finding the index por completed task
    const index = taskList.findIndex( task => task.id === id)

    //coping the taskList to a temporary task list
    const tempList = [...taskList]

    //setting pending status to false and updating the temp task list
    const taskDone = tempList[index]
    taskDone.isPending = false
    tempList[index] = taskDone

    setTaskList(tempList)

    const updatedPendingTaskList = taskList.filter( task => task.isPending === true)
    setPendingTaskList(updatedPendingTaskList.length)

  }

  //Cuando CreadorTareas agrega una tarea exitosamente, llama a esta funcion
  function addTask(task) {

    //Agregamos la tarea al listado de tareas
    setTaskList([...taskList,task])

    //Aumento en 1 la cantidad de pendingTaskList
    setPendingTaskList(pendingTaskList+1)

  }

  return (
    <>

      <Header/>

      <main className="sm:mx-24 md:mx-48 lg:mx-64 xl:mx-80">

        <TaskCreator 
          addTask={addTask}/>

        <div className="text-center my-5 bg-white rounded-lg px-2 py-2">
          <h2 className="bg-blue-900 font-bold text-white rounded-t-md py-1">Listado de Tareas (Pendientes: {pendingTaskList})</h2>

          {taskList.length==0 && <div className="italic text-gray-400 py-5">¡Agregá tu primer tarea!</div>}

          {taskList.map( task => {
            return ( <Task
                      task={task.task}
                      todoTask={task.isPending}
                      key={task.id}
                      handleCompleted={() => handleCompleted(task.id)} />
                      )
          })}

        </div>

      </main>
      
    </>
  )
  
}


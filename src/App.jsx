import { useState } from "react"
import { Header } from "./components/Header"
import { CreadorTareas } from "./components/CreadorTareas"
import { Task } from "./components/Task"

export const App = () => {

  const [listadoTareas,setListadoTareas] = useState([])
  const [pendientes,setPendientes] = useState(0)

  const handleCompleted = id => {

    //encuentro el indice en el listado
    const indice = listadoTareas.findIndex( tarea => tarea.id === id)

    //copio el listado
    const listado = [...listadoTareas]

    //le cambio el valor a false y lo guardo
    const tareaResuelta = listado[indice]
    tareaResuelta.pendiente = false
    listado[indice] = tareaResuelta

    setListadoTareas(listado)

    const listadoPendientes = listadoTareas.filter( tarea => tarea.pendiente === true)
    setPendientes(listadoPendientes.length)

  }

  //Cuando CreadorTareas agrega una tarea exitosamente, llama a esta funcion
  function agregarTarea(tarea) {

    //Agregamos la tarea al listado de tareas
    setListadoTareas([...listadoTareas,tarea])

    //Aumento en 1 la cantidad de pendientes
    setPendientes(pendientes+1)

  }

  return (
    <>

      <Header/>

      <main className="sm:mx-24 md:mx-48 lg:mx-64 xl:mx-80">

        <CreadorTareas 
          agregarTarea={agregarTarea}/>

        <div className="text-center my-5 bg-white rounded-lg px-2 py-2">
          <h2 className="bg-blue-900 font-bold text-white rounded-t-md py-1">Listado de Tareas (Pendientes: {pendientes})</h2>

          {listadoTareas.length==0 && <div className="italic text-gray-400 py-5">¡Agregá tu primer tarea!</div>}

          {listadoTareas.map( tarea => {
            return ( <Task
                      task={tarea.tarea}
                      todoTask={tarea.pendiente}
                      key={tarea.id}
                      handleCompleted={() => handleCompleted(tarea.id)} />
                      )
          })}

        </div>

      </main>
      
    </>
  )
  
}


import { useState } from "react"

export const TaskCreator = ({addTask}) => {

    const [task,setTask] = useState('')
    const [error,setError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        //If an empty task is submmited
        if(task == ''){
            setError(true)

            //Show on the UI a simple Error display for 1.5 secs.
            setTimeout(() => {
                setError(false)
            }, 1500);

            return
        }

        //If the task is not empty

        //I create an Object that contains the task itself, a generated id and 
        const taskObject = {
            id: createId(),
            task: task,
            isPending: true
        }

        //Add the taskObject to the task list
        addTask(taskObject)

        //form reset
        setTask('')
    }

    const createId = () => {
        const random = Math.random().toString(36).slice(2,);
        const date = Date.now().toString(36)
        return random + date
    }

    return (

        <>
            {error && <div className="bg-red-800 text-white text-center mt-6 py-2 uppercase font-bold rounded-md">
                <p >¡La tarea no puede estar vacía!</p>
            </div> }

            <div className="text-center my-5 bg-white rounded-lg">

                <form onSubmit={handleSubmit} className="flex flex-col p-2">

                    <label className="bg-blue-900 font-bold text-white rounded-t-md py-1">Crear una tarea</label>

                    <input
                        placeholder="Ingrese la tarea acá"
                        className="px-1 pt-2 resize-none focus:outline-none border-b-blue-900 border-solid"
                        value={task}
                        onChange={e => setTask(e.target.value)}>
                    </input>

                    <button type="submit" className="uppercase font-bold text-white bg-green-600 mt-6 mb-3 py-1 mx-40 rounded-md hover:bg-green-700">Agregar</button>

                </form>

            </div>
        </>
    )
}
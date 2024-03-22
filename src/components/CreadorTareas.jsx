import { useState } from "react"

function CreadorTareas ({setListadoTareas}) {

    const [tarea,setTarea] = useState('')
    const [error,setError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()

        //Si se ingresa una tarea vacía
        if(tarea == ''){
            setError(true)

            //al setear error a false luego de 1.5 seg, permite mostrar el cartel de error por ese tiempo unicamente 
            setTimeout(() => {
                setError(false)
            }, 1500);

            return
        }

        //en caso que no este vacia la tarea

        //creo un objeto el cual contiene la tarea y un id generado en el momento
        const objetoTarea = {
            tarea: tarea,
            id: generarId()
        }

        //Agrego el objeto al state listado de tareas
        setListadoTareas(prevListado => [...prevListado,objetoTarea])

        //reinicio el form
        setTarea('')
    }

    const generarId = () => {
        const random = Math.random().toString(36).slice(2,);
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    return (

        <>
            {error === true && <div className="bg-red-800 text-white text-center mt-6 py-2 uppercase font-bold rounded-md">
                <p >¡La tarea no puede estar vacía!</p>
            </div> }

            <div className="text-center my-5 bg-white rounded-lg">

                <form onSubmit={handleSubmit} className="flex flex-col p-2">
                    
                    <label className="bg-blue-900 font-bold text-white rounded-t-md py-1">Crear una tarea</label>

                    <input
                        placeholder="Ingrese la tarea acá"
                        className="px-1 pt-2 resize-none focus:outline-none border-b-blue-900 border-solid"
                        value={tarea}
                        onChange={e => setTarea(e.target.value)}>
                    </input>

                    <button type="submit" className="uppercase font-bold text-white bg-green-600 mt-6 mb-3 py-1 mx-40 rounded-md hover:bg-green-700">Agregar</button>

                </form>

            </div>
        </>
    )
}

export default CreadorTareas
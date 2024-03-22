export const Tarea = ({tarea, pendiente, handleCompletada}) => {

    return (
        <div className="py-1 my-2 rounded-md bg-slate-100 hover:bg-slate-300 hover:cursor-pointer active:bg-slate-500"
        
            onClick={handleCompletada}

            style={{
                textDecoration: pendiente ? 'none' : 'line-through',
                fontStyle: pendiente ?  'normal' : 'italic',
                color: pendiente ? 'inherit' : '#d0d0d0'
            }}>
                <p>{tarea}</p>

        </div>
    )
}

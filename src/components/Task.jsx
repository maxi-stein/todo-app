export const Task = ({task, todoTask , handleCompleted}) => {

    return (
        <div className="py-1 my-2 rounded-md bg-slate-100 hover:bg-slate-300 hover:cursor-pointer active:bg-slate-500"
        
            onClick={handleCompleted}

            style={{
                textDecoration: todoTask  ? 'none' : 'line-through',
                fontStyle: todoTask  ?  'normal' : 'italic',
                color: todoTask  ? 'inherit' : '#d0d0d0'
            }}>
                <p>{task}</p>

        </div>
    )
}

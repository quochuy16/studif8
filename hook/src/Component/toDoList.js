import { useState } from "react"

function ToDoList() {
    const storageSub = JSON.parse(localStorage.getItem('subs'))

    const [sub,setSub] =useState('');
    const [subs,setSubs] =useState(storageSub ?? []);
    console.log(subs);

    const addSub = () =>{
        setSubs(prev => {
            const newSub = [...prev,sub]
            const jsonSub = JSON.stringify(newSub)
            localStorage.setItem('subs',jsonSub)
            return newSub
        })
        setSub('')
    }
    const deleteSub = () =>{
        const jsondeleteSub = JSON.stringify([''])
        setSubs(localStorage.setItem('subs',jsondeleteSub))
    }

    return(
        <div>
            <input
                value={sub}
                onChange={e => setSub(e.target.value) }
            />
            <button onClick={addSub}>Add</button>
            <button onClick={deleteSub}>Delete</button>

            <ul>
                {subs.map((sub,key)=>(
                    <li key={key}>{sub}</li>
                ))}
            </ul>
        </div>
    )
}
export default ToDoList
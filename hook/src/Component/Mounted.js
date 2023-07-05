import { useState } from "react"
import UseState from "./useState"
function Mounted(){
    const [show,setShow] = useState(false)
    return(
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {show && <UseState/>}
        </div>
    )
}
export default Mounted
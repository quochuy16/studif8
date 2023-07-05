import {useState} from 'react'

const courses = [
    {
        id : '0',
        name : 'HTML, CSS'
    },
    {
        id : '1',
        name : 'Javascript'
    },
    {
        id : '2',
        name : 'ReactJS'
    }
]

const student = [
    {
        stId : '0',
        stName : 'Huy',
        stSex:'Male',
        stEmail : 'huy@123',
        stCourseId : '1'
    },
    {
        stId : '2',
        stName : 'Duong',
        stSex:'Female',
        stEmail : 'duong@123',
        stCourseId : '2'
    }
]


function TwowayBinding() {
    const [courseID, setCourseID] = useState([])
    const [name,setName] = useState(student[1].stName)
    const [email,setEmail] = useState(student[1].stEmail)

    const handleSubmit = () =>{
        console.log(
            name,
            email,
            courses[courseID-1].name
        )
    }
    console.log(courseID)
    const handleCourse = (id) =>{
        setCourseID(p => {
            if( courseID.includes(id)){
                return courseID.filter(item => item !== id)
            }else{
                return [...p,id]
            }
        })
    }

    const handleSex = () =>{

        
    }

    return(
        <div>
            <div>
                <input
                value={name}
                onChange={e => setName(e.target.value)}
                />
            </div>
            <div>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div>
                <input id='Male' type='radio' checked = {handleSex}  value={'Male'}/>
                <label htmlFor='Male'>Male</label>
                <input id='Female' type='radio'  value={'Female'}/>
                <label htmlFor='Female'>Female</label>
            </div>
            {courses.map(course => (
                <div key={course.id}>
                    
                    <input 
                        type='checkbox'
                        checked ={courseID.includes(course.id)}
                        onChange={() => handleCourse(course.id)}
                    />
                    {course.name}
                </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default TwowayBinding;
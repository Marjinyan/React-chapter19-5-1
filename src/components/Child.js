import {useState} from 'react'

function Child(props){
    const [number, setNumber] = useState( Math.floor(Math.random() * 1000))
    return props.render(number, setNumber)
}
export default Child
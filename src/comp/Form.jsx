import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function Form(){
    const [text, setText] = useState('')
    const history = useHistory ()

    function searchTank(){
        history.push('/search/'+ text)
    }
    return(
        <div className="form">
            <input type="text" placeholder="Поиск по названию" value={text} onChange={e => setText(e.target.value)} />
            <button onClick={searchTank}>
                Поиск
            </button>
        </div>
    )
}

export default Form
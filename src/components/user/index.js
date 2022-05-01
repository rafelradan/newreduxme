import { useSelector, useDispatch } from 'react-redux'
import { newName } from './actions'


function User(){
    const { name } = useSelector(state => state.user)
    const dispatch = useDispatch()

    function handleChangeName(){
        dispatch(newName())
    }

    return(
        <div>
            <h1>User -  {name}  </h1>
            <button onClick={handleChangeName}>CHANGE NAME</button>
        </div>
    )
}

export default User
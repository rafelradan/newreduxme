import { useSelector, useDispatch } from 'react-redux'
import { incrementCounter, decrementCounter } from '../../redux/counter/actions'

function Counter(){
    const { value } = useSelector(state => state.counter)
    const dispatch = useDispatch()

    function handleIncrement(){
        dispatch(incrementCounter())
    }

    function handleDecrement(){
        dispatch(decrementCounter())
    }
    return(
        <div>
            <h1>Counter - Rafael Nascimento - {value}</h1>
            <button onClick={handleIncrement}>INCREMENT</button>
            <button onClick={handleDecrement}>DECREMENT</button>
        </div>
    )
}

export default  Counter;
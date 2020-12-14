import {useState} from "react";
const Main = (props) => {
    const [tripulantes,setTripulantes] = useState(props.tripulantes)
    const anyadirTripulante=()=>{
        setTripulantes(tripulantes + 1);
    }
    return(
        <div>
            <h4>{props.nombre}</h4>
            <p>{props.eslora}</p>
            <p>{tripulantes}</p>
            <button onClick={anyadirTripulante}>Añadir tripulante</button>
        </div>
    )
}

export default Main;
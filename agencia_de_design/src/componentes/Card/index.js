import './style.css';

export default function Card(props){
    return(
        <div className="card">
            <p>{props.data}</p>
            <h3>{props.titulo}</h3>
            <p>{props.subTitulo}</p>
            <p>{props.descricao}</p>
        </div>
    )
}
export default function Card(props){
    return(
        <div>
            <p>{props.data}</p>
            <h4>{props.titulo}</h4>
            <p>{props.subTitulo}</p>
            <p>{props.descricao}</p>
        </div>
    )
}
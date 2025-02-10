
function Card(props) {
    return (
        <div id={props.id} className="card" style={{"width": "18rem"}}>
            <img src={`https://picsum.photos/1280/420?random=${props.id}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <a xlinkHref="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}



export default Card;



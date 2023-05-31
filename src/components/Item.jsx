const Item = ({item}) => {
    return (
        <>
            <div className="card" styles="width: 13rem;">
                <img src={item.imagen} className="card-img-top" alt={item.titulo}/>
                <div className="card-body">
                    <h3>{item.titulo}</h3>
                    <p className="card-text"> <span className="text-secondary">{item.descripcion}</span> <br /> ${item.precio} </p>
                </div>
            </div>
        </>
    )
}

export default Item
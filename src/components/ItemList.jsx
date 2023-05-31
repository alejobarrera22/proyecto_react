import Item from "./Item"

const ItemList = ({items}) => {
    return (
        <>
            {items.map(item => <div key={item.idx} className="col-md-4 my-3">
                    <Item item={item}/>
                </div>)}
        </>
    )
}

export default ItemList;
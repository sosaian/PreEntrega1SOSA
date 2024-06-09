import './Item.css'
import { Link } from 'react-router-dom'

export function Item({ id, img, name, price })
{
    return (
        <>
            <li>
                <img src={img} />
                <div>{name}</div>
                <div>{`$ ${price}`}</div>
                <Link to={`/item/${id}`}>
                    <button>Ver Detalle</button>
                </Link>
            </li>
        </>
    )
}
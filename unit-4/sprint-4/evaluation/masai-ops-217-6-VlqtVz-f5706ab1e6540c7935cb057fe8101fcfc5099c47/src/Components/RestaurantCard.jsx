import{Link} from "react-router-dom"
export const transfomTostring =(type)=>{
    switch(type){
        case "fine_dining":
            return "Fine Dinging";
        case "ethnic":
            return "Ethnic";
        case "fast_food":
            return "Fast_Food";
        case "cafe":
            return "Cafe";
        case "casual_dining":
            return "Casual Dining";
        default:
            return type;
    }
}

export function RestaurantCard({
    name,
    rating,
    type,
    number_of_votes,
    price_starts_from,
    id
}){
    return (
        <tr data-testid="item">
            <td data-testid="name">
            <Link to={`/restaurants/${id}`}>
                {name}
            </Link>
            </td>
            <td data-testid="rating">{rating}
            </td>
            <td data-testid="type">{transfomTostring(type)}
            </td>
            <td data-testid="votes">{number_of_votes}
            </td>
            <td data-testid="price">{price_starts_from}
            </td>
        </tr>
    )
}
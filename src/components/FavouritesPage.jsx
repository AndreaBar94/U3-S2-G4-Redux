import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FavouritesPage = () => {
    const favourites = useSelector((state) => state.favourites.content)
    return(
        <ListGroup>
            {favourites.length > 0 &&
            (favourites.map((favourite)=> 
                
                    <ListGroup.Item key={favourite._id}>
                            <Link to={`/${favourite.url}`}>{favourite.company_name}</Link>
                            <span className="mx-3">{favourite.title}</span>
                    </ListGroup.Item>
                
            ))
            }
        </ListGroup>
            
        
    )
};

export default FavouritesPage;
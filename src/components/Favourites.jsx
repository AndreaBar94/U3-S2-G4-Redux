import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";

const Favourites = () => {
    const favourites = useSelector((state) => state.favourites.content)
    return(
        <ListGroup>
            {favourites.length > 0 &&
            (favourites.map((favourite)=> 
                
                    <ListGroup.Item key={favourite._id}>
                            <span>{favourite.company_name}</span>
                    </ListGroup.Item>
                
            ))
            }
        </ListGroup>
            
        
    )
};

export default Favourites;
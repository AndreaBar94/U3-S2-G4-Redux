import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Favourites = () => {
    const favourites = useSelector(state => state.favourites.content)
    return(
        <Row>
            {favourites &&(favourites.map(favourite => {
                return(
                    <Col>{favourite.content}</Col>
                )
            }))
            }
        </Row>
    )
};

export default Favourites;
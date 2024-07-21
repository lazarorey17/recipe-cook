import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import imgCooking from '../../assets/image/Screenshot 2024-07-15 093600.png';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

const Detail = () => {
    const {recid} = useParams();
    const [detailData,setDetailData] = useState({});
    const [error,setError] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    
    useEffect(()=>{
        const fetchDetailData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8080/recipe_api/apirecipe/getrecipeingredients?recid=${recid}`);
                
                const data = await response.json();
                setDetailData(data);
                setIsLoading(false);
            } catch (error) {
                setDetailData({});
                setError(error);
                setIsLoading(false);
            }
        };
        fetchDetailData();
    },[]); 

    if(isLoading && Object.keys(detailData).length === 0){
        return  <div>Loading data...</div>;
    }

    if(Object.keys(error).length > 0){
        return <div>An error has occurred...</div>;
    }

    return(
        <div style={{textAlign:'center'}}>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Breadcrumb>
                        <Breadcrumb.Item href='/'>Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Detail</Breadcrumb.Item>
                    </Breadcrumb>
                </Container>
            </Navbar>
            <div>
                <Card>
                    <Card.Body>
                        <Card.Img variant="top" style={{width:'500px', height:'200px'}} src={imgCooking} />
                        <Card.Title>{detailData[0]?.recipeId.name}</Card.Title>
                        <Card.Text>
                            {detailData[0]?.recipeId.descriction}
                        </Card.Text>
                        <Card.Text>
                            {detailData[0]?.recipeId.instruction}
                        </Card.Text>
                        <Card.Text>
                            <h6>
                                Ingredients:<Badge bg="secondary"></Badge>
                            </h6>
                            <ListGroup as="ol" numbered>
                                {
                                    detailData?.map((item)=>
                                        <ListGroup.Item as="li" style={{border:'0'}}>{item.ingredientId.name +  '      ' + item.count + '   ' + item.unitMeasure}</ListGroup.Item>
                                    )
                                }
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )

}

export default Detail;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imagAlt from '../../../../assets/image/img-cooking.png';
import healthFilled from '../../../../assets/image/hearth-filled.png';
import healthUnfill from '../../../../assets/image/hearth-unfilled.png';

import useLikedRecipes from '../../../../hook/useLikedRecipe';

const RecipeItem = ({name,description,image,country,onRecipeClick,id}) =>{

    const {isRecipeLiked,toggleRecipeLiked} = useLikedRecipes(id);

    const handleHealthClick = () =>
    {
        toggleRecipeLiked();
    }

    return( 
        <Card>
            <div style={{ width: 120, height: 120, position:'relative' }}>
                <img src={ isRecipeLiked ? healthFilled : healthUnfill} alt='Health button' onClick={handleHealthClick} style={{position:'relative', width:'28px',top:'10px', left:'10px', height:'28px', zIndex:'1',cursor:'pointer'}}/>
                <Card.Img variant="top" w src={imagAlt} rounded/>
            </div>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary" onClick={() => onRecipeClick(id)}>See more..</Button>
            </Card.Body>
        </Card>
    );
};


export default RecipeItem;
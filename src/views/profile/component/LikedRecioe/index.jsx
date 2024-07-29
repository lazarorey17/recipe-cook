import { useEffect, useState } from "react";
import { LIKE_RECIPE_STOREGE_KEY } from "../../../../utils/constants";
import RecipeItem from "../../../../components/recipes/components/recipeItem";
import { useNavigate } from "react-router-dom";

const LikedRecipe = ()=>{

    const [recipe, setRecipe] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [error, setError] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        const fectRecipeDetails = async ()=>{
            try {
                setIsloading(true);
                const likedRecipe = JSON.parse(localStorage.getItem(LIKE_RECIPE_STOREGE_KEY)) || [];
                const result = [];
                for(const recid of likedRecipe)
                {
                    const response = await fetch(`http://localhost:8080/recipe_api/apirecipe/recipes/${recid}`);
                    const data = await response.json();
                    result.push(data);
                }
                setRecipe(result);
            } catch (error) {
                setError(error);
            }
            finally{
                setIsloading(false);
            }
        };

        fectRecipeDetails();
    }, []);

    const handleRecipeItemClick = (id) =>{
        navigate(`/detail/${id}`);
    };

    if(Object.keys(error).length > 0){
        return <div>An error has occurred!!</div>
    }
    if(isLoading){
        return <div>Loading...</div>
    }

    return(
        <div>
            {recipe.map((recipeItem,index)=> (
                <RecipeItem 
                    key={`liked-event-item-${recipeItem.id}-${index}`}
                    name={recipeItem.name}
                    info={recipeItem.descriction}
                    image={recipeItem.intruction}
                    onRecipeClick={handleRecipeItemClick}
                    id={recipeItem.id}
                />
            ))}
        </div>
    );
};

export default LikedRecipe;
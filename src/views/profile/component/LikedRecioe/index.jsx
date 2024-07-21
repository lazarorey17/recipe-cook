import { useEffect, useState } from "react";
import { LIKE_RECIPE_STOREGE_KEY } from "../../../../utils/constants";
import RecipeItem from "../../../../components/recipes/components/recipeItem";
import { useNavigate } from "react-router-dom";
import imgAlt from "../../../../assets/image/img-cooking.png";

const LikedRecipe = ()=>{

    /*const [events, setEvents] = useState([]);
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
                    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${recid}.json?apikey=${import.meta.env.VITE_TICKETMASTER_APY_KEY}`);
                    const data = await response.json();
                    result.push(data);
                }
                setEvents(result);
            } catch (error) {
                setError(error);
            }
            finally{
                setIsloading(false);
            }
        };

        fectRecipeDetails();
    }, []);

    const handleEventItemClick = (recid) =>{
        navigate(`/detail/${recid}`);
    };

    if(Object.keys(error).length > 0){
        return <div>An error has occurred!!</div>
    }
    if(isLoading){
        return <div>Loading...</div>
    }*/
    return(
        <div>Liked recipes</div>
    );
};

export default LikedRecipe;
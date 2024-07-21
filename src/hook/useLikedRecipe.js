import { useState } from "react";

const LIKED_RECIPE_STORAGE_KEY = 'likedRecipe';

const checkIsRecipeLiked = (recid) => {
    const likedRecipe = localStorage.getItem(LIKED_RECIPE_STORAGE_KEY) || [];
    return likedRecipe.includes(recid);
}

const useLikedRecipes = (recid) =>{
    const [isRecipeLiked, setIsRecipeLiked] = useState(checkIsRecipeLiked(recid));

    const toggleRecipeLiked = () =>{
        const likedRecipe = JSON.parse(localStorage.getItem(LIKED_RECIPE_STORAGE_KEY)) || [];
        const recipeIndex = likedRecipe.indexOf(recid);

        if(recipeIndex !== -1){
            likedRecipe.splice(recipeIndex,1);
            setIsRecipeLiked(false);
        }
        else{
            likedRecipe.push(recid);
            setIsRecipeLiked(true);
        }

        localStorage.setItem(LIKED_RECIPE_STORAGE_KEY,JSON.stringify(likedRecipe));
    };

    return{
        isRecipeLiked,toggleRecipeLiked,
    };
}

export default useLikedRecipes;
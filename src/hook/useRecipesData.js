import { useState } from "react";
//import dataJSON from '../data/recipes.json';

const useRecipesData = () => {
    const [data,setData] = useState([]);
    const [isloading,setIsloading] = useState(true);
    const [error,setError]=useState();

    
    const fetchRecipes = async (param) =>{
        try {
            let urlAPI = param?.length ? `http://localhost:8080/recipe_api/apirecipe/recipebyname/?searchname=${param}` : "http://localhost:8080/recipe_api/apirecipe/recipes/";
            const response = await fetch(urlAPI);
            let dataFromApi = await response.json();

            setData(dataFromApi);
            setIsloading(false);
        } catch (error) {
            setError(error);
            setIsloading(false);
        }
    }

    return{
        recipes:data || [],isloading,error,fetchRecipes,
    };
};

export default useRecipesData;
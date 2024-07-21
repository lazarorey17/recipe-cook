import RecipeItem from "./components/recipeItem";
import { useNavigate } from 'react-router-dom';

const Recipes = ({searchTerm, recipes})=>{

    const navigate = useNavigate();

    const handleRecipeClick=(id)=>{
        navigate(`detail/${id.toString()}`);
    }

    const renderRecipes=()=>{
        let filterRecipes = recipes;
        //filterRecipes = filterRecipes.filter((item)=>item.name.toLowerCase().includes(searchTerm.toLowerCase()));       

        return filterRecipes.map((recipeItem)=>(
            <RecipeItem
                key= {`recipe-item-${recipeItem.id}`}
                name={recipeItem.name}
                country={recipeItem.oririnCountry}
                image={recipeItem.urlImag}
                description={recipeItem.descriction}
                onRecipeClick={handleRecipeClick}
                id={recipeItem.id}
            />
        ))
    }

    return(
        <div>
            {renderRecipes()}
        </div>
    );
    

 
};

export default Recipes;
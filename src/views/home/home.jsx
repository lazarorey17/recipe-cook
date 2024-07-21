import { useEffect, useState} from "react";
import CNavbar from "../../components/navbar";
import Recipes from "../../components/recipes";
import useRecipesData from "../../hook/useRecipesData";
const Home = () =>{
    const { recipes, isloading, error,fetchRecipes } = useRecipesData();
    const [searchTerm,setSearchTerm] = useState('');
    //const containerRef = useRef();

    useEffect(()=>{
        fetchRecipes();
    }, []);

    const handNavbarSearch=(term)=>{
        //console.log(containerRef.current.getsomething);
        setSearchTerm(term);
        fetchRecipes(term);
    };

    return (
        <>
        <CNavbar onSearch={handNavbarSearch}/>
        { isloading ? <div>Loading data...</div> : <Recipes searchTerm={searchTerm} recipes={recipes}/>}
        {!!error && <div>An error has occurred</div>}
        </>
    );
}

export default Home;
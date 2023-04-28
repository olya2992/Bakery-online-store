import DataCakes from "../../Data/DataCakes"
import Cake from "./Cake"
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../Redux/CakesSlice";

const Cakes = () => {
    const selectedCategory = useSelector(getSelectedCategory)
    return(
        <div> 
            {DataCakes
            .filter(cake =>{
                if (selectedCategory === 'ALL') return true;
               return selectedCategory === cake.category; 
            })
            .map(cake =><Cake cake = {cake}/>)}
        
        </div>
    )
}
export default Cakes
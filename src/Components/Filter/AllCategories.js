import Filter from "./Filter"

const AllCategories = () => {
    return(
        <div> 
           
            {['SIGNATURE CAKES', 'CLASSIC CAKES', 'DESSERT BAR TREATS', "ALL" ].
            map(category =>  <Filter category={category}/> )}
           
        </div>
    )
}
export default AllCategories
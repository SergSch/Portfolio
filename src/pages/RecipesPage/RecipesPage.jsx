import {
  useGetAllRecipesQuery,
  useGetSingleRecipeQuery,
} from '../../store/apiSlice';
import classes from './../../styles/resipes/Recipes.module.css';

const RecipesPage = () => {
  // const { data, isLoading } = useGetAllRecipesQuery();
  const { data, isLoading } = useGetSingleRecipeQuery(4);
  console.log(data);

  return (
    <div className="container">
      <div className={classes.wrapper}>
        {isLoading ? (
          <p className={classes.img}>Loading ...</p>
        ) : (
          // data?.recipes?.map((elem) => <h4 key={elem.id}>{elem.name}</h4>)
          <h4>{data.name}</h4>
        )}
      </div>
    </div>
  );
};
export default RecipesPage;

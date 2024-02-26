import { useGetAllRecipesQuery } from '../../store/apiSlice';
import classes from './../../styles/resipes/Recipes.module.css';
import spinner from '../../assets/images/spinner.svg';

const RecipesPage = () => {
  const { data, isLoading, isError, error } = useGetAllRecipesQuery();
  console.log(data?.recipes);
  return (
    <div className="container">
      {isLoading ? (
        <p className={classes.img}>Loading ...</p>
      ) : (
        data?.recipes?.map((elem) => <h4 key={elem.id}>{elem.name}</h4>)
      )}
    </div>
  );
};
export default RecipesPage;

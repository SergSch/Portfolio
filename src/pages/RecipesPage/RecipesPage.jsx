import RecipeBlock from '../../layouts/RecipeBlock/RecipeBlock';
import { useGetAllRecipesQuery } from '../../store/apiSlice';
import classes from './../../styles/resipes/Recipes.module.css';

const RecipesPage = () => {
  const { data } = useGetAllRecipesQuery();
  // console.log(data);

  return (
    <div className={classes.wrapper}>
      <RecipeBlock />
    </div>
  );
};
export default RecipesPage;

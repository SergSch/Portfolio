import { useSelector } from 'react-redux';
import RecipeBlock from '../../layouts/RecipeBlock/RecipeBlock';
import classes from './../../styles/resipes/Recipes.module.css';

const RecipesPage = () => {
  const { theme } = useSelector((state) => state.theme);
  

  return (
    <div
      className={`${classes.wrapper} ${
        theme === 'dark' ? classes.wrapperDark : ''
      }`}
    >
      <RecipeBlock />
    </div>
  );
};
export default RecipesPage;

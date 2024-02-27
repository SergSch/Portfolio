import classes from '../../styles/resipes/RecipeBlock.module.css';
import { useGetSingleRecipeQuery } from '../../store/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../../store/counterSlice';
import { useState } from 'react';

const RecipeBlock = () => {
  let [isShowIngridients, setIsShowIngridients] = useState(false);
  let [isShowInstructions, setIsShowInstructions] = useState(false);

  const { counter } = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  const { data, isLoading } = useGetSingleRecipeQuery(counter);

  return (
    <div className={classes.wrapper}>
      {isLoading && <h2>Loading...</h2>}
      <div className={classes.titleBlock}>
        <h2>{data?.name}</h2>
        <img src={data?.image} alt={data?.name} className={classes.img} />
      </div>
      <div className={classes.descriptionBlock}>
        <div className={classes.ingridients}>
          <h3>Ingredients:</h3>
          <ul>
            {isShowIngridients
              ? data?.ingredients?.map((elem) => (
                  <li key={elem} className={classes.item}>
                    {elem}
                  </li>
                ))
              : data?.ingredients?.slice(0, 2).map((elem) => (
                  <li key={elem} className={classes.item}>
                    {elem} ...
                  </li>
                ))}
          </ul>
          <a
            onClick={() => setIsShowIngridients(!isShowIngridients)}
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
          >
            {isShowIngridients ? 'Show less' : 'Show more'}
          </a>
        </div>
        <div className={classes.instructions}>
          <h3>Instructions:</h3>
          <ul>
            {isShowInstructions
              ? data?.instructions?.map((elem) => (
                  <li key={elem} className={classes.item}>
                    {elem}
                  </li>
                ))
              : data?.instructions?.slice(0, 2).map((elem) => (
                  <li key={elem} className={classes.item}>
                    {elem} ...
                  </li>
                ))}
          </ul>
          <a
            onClick={() => setIsShowInstructions(!isShowInstructions)}
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
          >
            {isShowInstructions ? 'Show less' : 'Show more'}
          </a>
        </div>
        <div className={classes.btnBlock}>
          <button className={classes.btn} onClick={() => dispatch(decrease())}>
            Prev
          </button>
          <h2>Enjoy</h2>
          <button className={classes.btn} onClick={() => dispatch(increase())}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default RecipeBlock;

import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryActionCreator, unsetCategoryActionCreator } from '../states/categories/action';

function PopularCategory({ categories }) {
  const dispatch = useDispatch();

  if (categories.listCategories === null) {
    return null;
  }

  const setCategory = (category) => {
    dispatch(setCategoryActionCreator(category));
  };

  const unsetCategory = () => {
    dispatch(unsetCategoryActionCreator());
  };

  return (
    <section className="popular-category">
      <div className="hashtag">
        {categories.listCategories.map((category) => (
          categories.selectedCategory === category
            ? (
              <button key={category} type="button" onClick={() => unsetCategory()}>
                <p className="selected-category">
                  #
                  {category}
                </p>
              </button>
            )
            : (
              <button key={category} type="button" onClick={() => setCategory(category)}>
                <p>
                  #
                  {category}
                </p>
              </button>
            )
        ))}
      </div>
    </section>
  );
}

export default PopularCategory;

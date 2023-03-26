import {BiSearch} from 'react-icons/bi'

import './index.css'

const FiltersGroup = props => {
  const {
    titleSearch,
    onUserChangeFunc,
    ratingsList,
    categoryOptions,
    onCategoryChange,
    onRatingChange,
    onClearFilterFunc,
  } = props

  const onUserInput = event => {
    if (event.key === 'Enter') {
      onUserChangeFunc(event.target.value)
    }
  }

  const onCategoryButton = event => {
    onCategoryChange(event.target.id)
  }

  const onRatingButton = event => {
    onRatingChange(event.target.id)
  }

  const onClearFilter = () => {
    onClearFilterFunc()
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          onKeyDown={onUserInput}
          placeholder="Search"
          type="search"
          className="search-input"
        />
        <BiSearch className="search-icon" />
      </div>

      <h1 className="category-heading category-list">Category</h1>
      <ul className="category-container">
        {categoryOptions.map(eachItem => (
          <button
            type="button"
            onClick={onCategoryButton}
            key={eachItem.categoryId}
            className="category-button"
          >
            <p id={eachItem.categoryId} className="category-list">
              {eachItem.name}
            </p>
          </button>
        ))}
      </ul>
      <h1 className="rating-heading">Rating</h1>
      <ul className="category-container">
        {ratingsList.map(eachItem => (
          <button
            type="button"
            key={eachItem.ratingId}
            onClick={onRatingButton}
            className="rating-button"
          >
            <li className="rating-start-container">
              <img
                id={eachItem.ratingId}
                src={eachItem.imageUrl}
                alt={`rating ${eachItem.ratingId}`}
                className="rating-img"
              />
              <p className="rating-text">& up</p>
            </li>
          </button>
        ))}
      </ul>
      <button
        onClick={onClearFilter}
        type="button"
        className="clear-filter-button"
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup

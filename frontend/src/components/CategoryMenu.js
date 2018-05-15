import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    loadCategories,
    loadCategoriesLoading,
    loadCategoriesError,
} from '../selectors/categoriesSelectors'
import Loading from './Loading';

export const CategoryMenu = ({ sCategories, categoriesLoading, categoriesError }) => {
    if (categoriesLoading) {
    return <Loading />
    }

    if (categoriesError) {
        return (

            <div>
            <ul>
                <li>
                  <span>-</span>
                  Home
                </li>
            </ul>
            </div>
        )
    }

    return (


        <div>
        <ul>
            <li>
                <span>-</span>
                Home
            </li>
            {sCategories.map( (category, index) => (
            <li key={index}>
              <span>-</span>
                {category.name}
            </li>
        ))}
        </ul>
        </div>
    )
}


CategoryMenu.propTypes = {
    sCategories: PropTypes.array.isRequired,
    categoriesLoading: PropTypes.bool.isRequired,
    categoriesError: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    sCategories: loadCategories(state),
    categoriesError: loadCategoriesError(state),
    categoriesLoading: loadCategoriesLoading(state),
})

export default connect(mapStateToProps)(CategoryMenu)
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    loadCategories,
    loadCategoriesLoading,
    loadCategoriesError,
} from '../selectors/categoriesSelectors'
import Loading from './Loading';

let sCategories = [ {name: "react", path: "react"},
{name: "redux", path: "redux"},
{name: "udacity", path: "udacity"}
]

export const CategoryMenu = ({ sCategories2, categoriesLoading, categoriesError }) => {
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
    sCategories2: PropTypes.array.isRequired,
    categoriesLoading: PropTypes.bool.isRequired,
    categoriesError: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    sCategories: loadCategories(state),
    categoriesError: loadCategoriesError(state),
    categoriesLoading: loadCategoriesLoading(state),
})

export default connect(mapStateToProps)(CategoryMenu)
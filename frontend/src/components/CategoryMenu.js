import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    loadCategories,
    loadCategoriesLoading,
    loadCategoriesError,
} from '../selectors/categoriesSelectors'

const CategoryMenu = ({ categories, categoriesLoading, categoriesError }) => {
    if (categoriesLoading) {
        return ("Loading")
    }

    if (categoriesError) {
        return ("error")
    }

    return (
        {categories}
    )

}


CategoryMenu.PropTypes = {
    categories: PropTypes.array.isRequired,
    categoriesLoading: PropTypes.bool.isRequired,
    categoriesError: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    categories: loadCategories(state),
    categoriesError: loadCategoriesError(state),
    categoriesLoading: loadCategoriesLoading(state),
})

export default connect(mapStateToProps)(CategoryMenu);
export const loadCategoriesLoading = ({ categories }) => categories.status.loading
export const loadCategoriesError = ({ categories }) => categories.status.error

export const loadCategories = ({ categories }) => {
    if (categories.status.error === true) {
        return []
    }

    return categories
    
}
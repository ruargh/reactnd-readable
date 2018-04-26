export const loadCategoriesLoading = ({ categories }) => categories.status.loading
export const loadCategoriesError = ({ categories }) => categories.status.error

export const loadCategories = ({ categories }) => {
    if (categories.status.error === true) {
        return []
    }

    return Object.keys(categories)
    .filter(key => key !== 'status')
    .map(key => ({
      id: key,
      name: categories[key].name,
      path: categories[key].path,
    }))

}
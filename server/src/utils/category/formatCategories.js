const formatData = ({ _id, name, slug, parentId, type }, children) => {
  return {
    _id,
    name,
    slug,
    parentId,
    type,
    children,
  };
};

const populateSubCategory = (category, categoriesMap) => {
  const id = category._id.valueOf();

  const _children = categoriesMap[id] || [];

  const children = [];

  _children.forEach((subCat) => {
    const _sub = populateSubCategory(subCat, categoriesMap);
    children.push(_sub);
  });

  return formatData(category, children);
};

const formatCategories = (categories) => {
  const categoriesMap = { base: [] };
  categories.forEach((category) => {
    const parentId = category?.parentId?.valueOf();
    if (!parentId) {
      categoriesMap.base.push(category);
    } else {
      categoriesMap[parentId] = categoriesMap[parentId] || [];
      categoriesMap[parentId].push(category);
    }
  });
  const categoryList = [];
  categoriesMap.base.forEach((category) => {
    const newCategory = populateSubCategory(category, categoriesMap);
    categoryList.push(newCategory);
  });
  return categoryList;
};

export default formatCategories;

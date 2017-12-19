const searchItemPrice = (data) => {
  return {
    currency: data.currency_id,
    amount: Math.trunc(data.price),
    decimals: data.price.toFixed(2).replace('.', '').replace(Math.trunc(data.price), ''),
  };
};

const searchItemModel = data => ({
  id: data.id,
  title: data.title,
  price: data ? ([data]).map(searchItemPrice)[0] : { currency: '', amount: 0, decimals: '' },
  picture: data.thumbnail,
  condition: data.condition,
  free_shipping: data.shipping.free_shipping,
});

const searchCategorieModel = data => data.name;

const searchAvailableFilter = data => data.id === 'category';

const searchModel = (data) => {
  const categories = (data.available_filters.filter(searchAvailableFilter));

  if (categories.length === 0) {
    categories.push({
      values: [],
    });
  }

  return {
    author: {
      name: '',
      lastname: '',
    },
    categories: categories[0].values.map(searchCategorieModel),
    items: data.results.slice(0, 4).map(searchItemModel),
  };
};

const itemModel = data => ({
  author: {
    name: '',
    lastname: '',
  },
  item: {
    id: data.id,
    title: data.title,
    price: {
      currency: data.currency_id,
      amount: Math.trunc(data.price),
      decimals: data.price.toFixed(2).replace('.', '').replace(Math.trunc(data.price), ''),
    },
    picture: data.pictures[0].url || data.thumbnail,
    condition: data.condition,
    free_shipping: data.shipping.free_shipping,
    sold_quantity: data.sold_quantity,
  },
});

export { searchModel, itemModel };

import { createStore, applyMiddleware } from 'redux';

const initialState = {
    productList: { data: [], error: null, loading: false},
    userInfo: { data: { _id: 0, name: '', username: '', token: '' }, error: null, loading: false },
    cart: {product:[], total: { count: 0, cost: 0}, address: { address: '', city: '', country: '', postalCode: '' }, payment: ''
}
};


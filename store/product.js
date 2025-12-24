export const state = () => ({
    products: [
        {
            id: 1,
            name: 'มัจฉะลาเต้',
            category: 'Tea',
            price: 109,
            description: 'เหมาะสำหรับคนรักชาเขียว รสชาติเข้มข้น หอมกลิ่นมัจฉะแท้',
            image: '',
            rating: 4.8,
            stock: 15,
           
        },
        {
            id: 2,
            name: 'ชาไทย-มัจฉะลาเต้',
            category: 'Tea',
            price: 135,
            description: 'เหมาะสำหรับคนรักชาเขียวชาไทย รสชาติเข้มข้น หอมกลิ่นมัจฉะแท้',
            image: '',
            rating: 4.8,
            stock: 15,
            
        },
        {
            id: 3,
             name: 'โกโก้',
            category: 'Chocolate',
            price: 150,
            description: 'เหมาะสำหรับคนรักช็อกโกแลต รสชาติเข้มข้น หอมกลิ่นโกโก้แท้',
            image: '',
            rating: 4.8,
            stock: 15,
            
        },
        {
            id: 4,
             name: 'คาราเมลมัคคิอาโต้',
            category: 'coffee',
            price: 109,
            description: 'เหมาะสำหรับคนรักกาแฟ รสชาติเข้มข้น หอมกลิ่นกาแฟแท้',
            image: '',
            rating: 4.8,
            stock: 15,
        }
    ],
    categories: ['Tea', 'coffee', 'Chocolate'],
    cart: []
})

export const mutations = {
    ADD_TO_CART(state, product) {
        state.cart.push(product)
    },
    REMOVE_FROM_CART(state, productId) {
        state.cart = state.cart.filter(item => item.id !== productId)
    },
    CLEAR_CART(state) {
        state.cart = []
    }
}

export const actions = {
    addToCart({ commit }, product) {
        commit('ADD_TO_CART', product)
    },
    removeFromCart({ commit }, productId) {
        commit('REMOVE_FROM_CART', productId)
    },
    clearCart({ commit }) {
        commit('CLEAR_CART')
    }
}

export const getters = {
    productsByCategory: (state) => (category) => {
        return state.products.filter(product => product.category === category)
    },
    cartTotal: (state) => {
        return state.cart.reduce((total, item) => total + item.price, 0)
    },
    cartCount: (state) => state.cart.length
}
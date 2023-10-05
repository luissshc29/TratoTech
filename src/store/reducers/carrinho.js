import {createSlice} from "@reduxjs/toolkit"

const initialState = []

const carrinhoSlice = createSlice({
    name: 'Carrinho',
    initialState,
    reducers: {
        mudarCarrinho: (state, {payload}) => {
            if(!state.some(item => item.id === payload)) {
                return [...state, {
                    id: payload,
                    quantidade: 1
                }]
            }
            return state.filter(item => item.id !== payload)
        },
        mudarQuantidade: (state, {payload}) => {
            state = state.map(item => {
                if (item.id === payload.id) {
                    item.quantidade += payload.quantidade
                }
                return item
            })
        },
        resetarCarrinho: () => initialState
    }
})

export const { mudarCarrinho, mudarQuantidade, resetarCarrinho } = carrinhoSlice.actions

export default carrinhoSlice.reducer
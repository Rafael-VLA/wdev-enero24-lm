import { userTypes } from './userTypes'

/*
{
    type: "" - El tipo de acción a realiza
    payload: "" - La data que se usará para cambiar el estado
}
*/

export const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case userTypes.AGREGAR_USUARIO:
            return {
                ...state,
                users: payload.users
            }
        
        case userTypes.SELECCIONAR_USUARIO:
            //const { id } = payload;
            return {
                ...state,
                userSelected: state.users.find(user => user.id === payload.id)
            }
    
        default:
            return state
    }
}
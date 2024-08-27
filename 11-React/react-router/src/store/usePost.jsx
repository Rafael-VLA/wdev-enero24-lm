import { create } from 'zustand';

export const usePost = create((set) => ({ // set = función que permite cambiar el estado
    posts: [],
    // otras propiedades...
    loadPost: (newPosts) => { // Vienen de un endpoint
        
        set(state => {

            return {
                ...state,
                posts: newPosts
            }
        })
        
    }
    // otras funciones...
}));
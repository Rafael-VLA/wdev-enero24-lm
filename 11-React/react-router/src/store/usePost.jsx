import { create } from 'zustand';

export const usePost = create((set) => ({ // set = función que permite cambiar el estado
    posts: [],
    loadPost: (newPosts) => {
        
        set(state => {

            return {
                ...state,
                posts: newPosts
            }
        })
        
    }
}));
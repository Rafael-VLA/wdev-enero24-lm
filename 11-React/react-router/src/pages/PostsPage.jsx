import { useEffect } from "react";
import { usePost } from "../store/usePost";
import { jsonPlaceholderAPI } from "../api/jsonPlaceholderAPI";
import { clsx } from 'clsx'
// import axios from 'axios';



const getPost = async() => {
  // const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
  const { data } = await jsonPlaceholderAPI('/posts');
  return data;
}

export const PostsPage = () => {

  // Desestructurando el estado
  // const { posts, loadPost } = usePost();

  // Obteniendo solo una propiedad
  const posts = usePost(store => store.posts);
  const loadPost = usePost(store => store.loadPost);

  useEffect(() => {
    getPost().then(data => {
      loadPost(data)
    })
  }) // loadPost

  return (
    <div>
      <ul>
        {
          posts.map((post, i) => {

            return (
              <li key={post.id} className={clsx("classA classB classC", {
                "color-gray": (i%2 === 0) 
              })}>
              {/* <li key={post.id} className={`${ (i%2 === 0) && "color-gray" }`}> */}
                { i + 1}. { post.title }
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

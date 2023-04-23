import './home.css';
import { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import SideBar from '../../components/sidebar/SideBar';
import Posts from '../../components/posts/Posts';



export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    FetchPosts();
  }, []);
  const FetchPosts = async () => {
    let result = await fetch('https://dummyjson.com/posts');
    result = await result.json();
    console.log(result);
    setPosts(result.posts);
  }



  return (
    <>
      <Header />
      <div className='home'>
        <Posts posts={posts}/>
        <SideBar />

      </div>
    </>
  )
}

import {getDocs,collection} from 'firebase/firestore'
import {db} from '../../config/firebase'
import { useState,useEffect } from 'react';
import { Post } from './post';

export interface Post {
    title:string;
    description:string;
    username:string;
    userId:string;
    id:string;
}

export const Main = () => {
const [posts,setPosts] = useState<Post[] | null>(null);
const postsRef = collection(db,"posts");
const getPosts = async () => {
const data = await getDocs(postsRef);
setPosts(data.docs.map((doc) => ({...doc.data(),id:doc.id})) as Post[]);
}

useEffect(() => {
getPosts();
},[])
return(
<div>
{posts?.map((post)=>(
    <Post post={post}/>
))}
</div>
)
}
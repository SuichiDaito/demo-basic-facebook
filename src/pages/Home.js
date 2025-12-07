import React, { useCallback, useState, useMemo } from 'react';
import PostInput from '../component/PostInput';
import PostCard from '../component/PostCard';
import Logout from '../component/Logout';

export default function Home({user, onLogout}) {
    const [posts, setPosts] = useState([]);
    const addPost = useCallback((text, user) => {
        setPosts(prevPosts => [{id: Date.now(), text, user, liked: 0 }, ...prevPosts]);
    }, []);

    const totalLikes = useMemo(() => {
        return posts.reduce((sum, post) => sum + post.liked, 0);
    }, [posts]);
    ;

    return (
        <div>
            <h2>Total Likes: {totalLikes}</h2>
            <PostInput addPost={addPost}/>     
            {posts.map(post => <PostCard key={post.id} post={post} setPosts={setPosts} />)}
            <br></br>
            <Logout user={user} onLogout={onLogout} />
        </div>
    );
}
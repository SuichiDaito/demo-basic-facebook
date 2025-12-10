import { useCallback, useState, useMemo } from 'react';
import PostCard from '../component/PostCard';
import Logout from '../component/Logout';
import PostInput from '../component/PostInput';

export default function Home({user, onLogout}) {
    const [posts, setPosts] = useState([]);
    const addPost = useCallback((text, user) => {
        setPosts(prevPosts => [{id: Date.now(), text, user, liked: 0 }, ...prevPosts]);
    }, []);

    const totalLikes = useMemo(() => {
        return posts.reduce((sum, post) => sum + post.liked, 0);
    }, [posts]);

    return (
        <div>
        <h1>Wellcome my website</h1>
            <PostInput addPost={addPost}/>     
            {posts.map(post => { console.log('post:', post) 
            return <PostCard key={post.id} post={post} setPosts={setPosts} />})}
            <br></br>
            <h2>Total Likes: {totalLikes}</h2>
            <br></br>
            <Logout user={user} onLogout={onLogout} />
        </div>
    );
}
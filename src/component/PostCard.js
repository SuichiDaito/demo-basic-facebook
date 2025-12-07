export default function PostCard({post, setPosts}) {

    function toggleLike() {
        setPosts(prevPosts => prevPosts.map(p => {
            if (p.id === post.id) {
                return {
                    ...p,
                    liked: p.liked + 1
                };
            }
            return p;
        }));
    }


    return (
        <div>
            <p><b>{post.user}</b> {post.text}</p>
            <button onClick={toggleLike}>Like ({post.liked})</button>
        </div>
    );
}
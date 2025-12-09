export default function usePostCard ({post, setPosts}) {

    function toggleLike() {
        setPosts(prev => prev.map(
            p => p.id == post.id ? {...p, liked: p.liked + 1 } : p
        ));
    }

    return {toggleLike};

}
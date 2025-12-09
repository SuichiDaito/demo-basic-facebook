import usePostCard from "../hooks/usePostCard";
import Card from "./Card";

export default function PostCard({post, setPosts}) {

    const {toggleLike} = usePostCard({post, setPosts });

    return (
        <Card
            username={post.user.username}   
            text={post.text}
            likes={post.liked}
            onLike={toggleLike}
      />
    );
}
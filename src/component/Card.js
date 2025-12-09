// export default function PostCard({post, setPosts}) {

//     function toggleLike() {
//         setPosts(prevPosts => prevPosts.map(p => {
//             if (p.id === post.id) {
//                 return {
//                     ...p,
//                     liked: p.liked + 1
//                 };
//             }
//             return p;
//         }));
//     }

//     return (
//         <div>
//             <p><b>{post.user.username}</b> {post.text}</p>
//             <button onClick={toggleLike}>Like ({post.liked})</button>
//         </div>
//     );
// }

export default function Card({username, text, likes, onLike}) {
    return (

        <div>
            <p><b>{username}</b> {text}</p>
            <button onClick={onLike}> Like {likes}</button>
        </div>
    );
}
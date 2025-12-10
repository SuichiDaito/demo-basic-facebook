export default function Card({ username, text, likes, onLike }) {
    return (

        <div>
            <p><b>{username}</b> {text}</p>
            <button onClick={onLike}> Like {likes}</button>
        </div>
    );
}
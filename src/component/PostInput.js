import {useContext, useEffect, useRef, useState} from "react";
 import { AuthContext } from "../contexts/Authentication";

export default function PostInput({addPost}) {

    const [text, setText] = useState('');
    const inputRef = useRef(null); 
    const user = useContext(AuthContext);

   useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    function handleAddPost() {
         if(!text.trim())  return;
         addPost(text, user);
         setText('');
        }

    return (
        <div>
            <input ref={inputRef} value={text} type="text" onChange={(e) => setText(e.target.value)} placeholder="How do your feel today?"></input>
            <button onClick={handleAddPost}>Add new post</button>
        </div>
    );
}

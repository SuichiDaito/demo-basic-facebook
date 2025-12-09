import usePostInput from "../hooks/usePostInput";
import Input from "./InputField";

export default function PostInput({addPost}) {

    const { input, button } = usePostInput({addPost});

    return (
        <div>
            <Input
            ref={input.inputRef}
            value={input.value}
            onChange={(e) => input.onChange(e)}
            placeholder="What's on your mind"
            />
            <button onClick={button.onClick}>Add new post</button>
          
        </div>
    );
}
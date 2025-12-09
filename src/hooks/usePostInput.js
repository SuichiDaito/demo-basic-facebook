import { useAuth, useRef, useState } from "../contexts/AuthContext";
import useButton from "./useButton";
import { useInput } from "../hooks/useInput";

export default function usePostInput({addPost}) {
 
    const { user } = useAuth();
    const input = useInput("");

    const button = useButton (() => {
        // handle add post
        if (!input.value.trim()) return ;
        addPost(
            input.value, user
        );
        input.clearValue();
    });

    return { input, button };
   
}
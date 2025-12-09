    export default function useButton(callBack) {
 
    function onClick() {
        if (typeof callBack === 'function') {
            callBack();
        }
    }
 
    return { onClick };
}
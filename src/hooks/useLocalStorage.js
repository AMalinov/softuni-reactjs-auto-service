import { useState } from "react";

const useLocalStorage = (key, firstValue) => {

    const [state, setState] = useState(() => {

        try {
            let item = localStorage.getItem(key);

            return item ? JSON.parse(item) : firstValue;

        } catch (error) {
            console.log(error);
            return firstValue;
        }
    });

    const setItem = (value) => {
        
        try {
            localStorage.setItem(key, JSON.stringify(value));
            setState(value);
        } catch (error) {
            console.log(error);
        }
    };

    return [state, setItem];
};

export default useLocalStorage;

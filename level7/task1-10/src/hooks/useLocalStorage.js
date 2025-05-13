import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
    // Get stored value from local storage or use initial value
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error("Error reading local storage:", error);
            return initialValue;
        }
    });

    // Update local storage whenever value changes
    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error("Error writing to local storage:", error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
};

export default useLocalStorage;

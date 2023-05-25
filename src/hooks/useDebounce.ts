import {useEffect, useState} from "react";

export function useDebounce<T>(value: T, delay: number) {
    const [debouncedValue, setDebounceValue] = useState<T>(value);
    const [forcedDebounce, setForcedDebounce] = useState<boolean>(false);

    useEffect(() => {
        if (forcedDebounce)return
        const timerId = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => clearTimeout(timerId)
    }, [value, delay])

    const forceDebounce = (value: T) => {
        setForcedDebounce(true)
        setDebounceValue(value);
        setForcedDebounce(false)
    }
    return {debouncedValue, forceDebounce}
}

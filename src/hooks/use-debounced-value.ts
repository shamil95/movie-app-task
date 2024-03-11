import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export function useDebouncedValue<T>(initialState: T, delay: number = 500): [T, Dispatch<SetStateAction<T>>, T] {
    const [value, setValue] = useState<T>(initialState);
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timeout);
        };
    }, [value, delay]);

    return [value, setValue, debouncedValue];
}

import {ChangeEvent, FormEvent, FormEventHandler, useEffect, useState} from "react";
import {useDebounce} from "@hooks/useDebounce";

export const useSearchPostsInput = (onInputChange: (debouncedValue: string) => void) => {
    const [searchInput, setSearchInput] = useState<string>('');

    const {debouncedValue, forceDebounce} = useDebounce(searchInput, 1000);

    const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    }

    const cleanInput = () => {
        setSearchInput('')
        forceDebounce('')
    }

    const handleSubmitSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        forceDebounce(searchInput)
    }

    useEffect(() => {
        onInputChange(debouncedValue)
    }, [debouncedValue])

    return {searchInput, handleSearchInputChange, cleanInput, handleSubmitSearch}
}

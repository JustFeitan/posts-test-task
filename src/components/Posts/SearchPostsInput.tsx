import React, {FC} from 'react';
import {Button, Form, InputGroup} from "react-bootstrap";
import {useSearchPostsInput} from "@hooks/useSearchPostsInput";

interface SearchInputProps {
    onInputChange: (debouncedValue: string) => void;
}

const SearchPostsInput: FC<SearchInputProps> = ({onInputChange}) => {

    const {
        searchInput,
        handleSearchInputChange,
        cleanInput,
        handleSubmitSearch
    } = useSearchPostsInput(onInputChange)

    return (
        <Form
            className='w-100'
            onSubmit={handleSubmitSearch}
        >
            <InputGroup className='my-2'>
                <Form.Control
                    placeholder='Поиск...'
                    value={searchInput}
                    onChange={handleSearchInputChange}
                />
                <Button
                    className='btn-light border border-start-0'
                    style={{zIndex: "100"}}
                    onClick={() => cleanInput()}
                >
                    <i className="bi bi-x-lg"></i>
                </Button>
            </InputGroup>
        </Form>
    );
};

export default SearchPostsInput;

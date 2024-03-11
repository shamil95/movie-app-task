import React, { useEffect } from 'react';
import { Input } from '../../shared/Input/Input';
import styles from '../Header.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useDebouncedValue } from '../../../hooks/use-debounced-value';
import { moviesActions } from '../../../redux/slices/movies';
import { ReactComponent as SearchIcon } from '../../../assets/search.svg';

const SearchMovie = () => {
    const dispatch = useAppDispatch();
    const { searchValue } = useAppSelector(state => state.movies);
    const [inputValue, setInputValue, debouncedInputValue] = useDebouncedValue(searchValue);

    const onSearchChange: React.ChangeEventHandler<HTMLInputElement> = e => {
        const { value } = e.target;
        setInputValue(value);
    };

    useEffect(() => {
        if (debouncedInputValue) {
            dispatch(moviesActions.changeSearchKeyword(debouncedInputValue));
        }
    }, [debouncedInputValue]);

    return (
        <Input
            onChange={onSearchChange}
            value={inputValue}
            className={styles.inputContainer}
            icon={<SearchIcon />}
            iconPlacement={'right'}
        />
    );
};

export default SearchMovie;

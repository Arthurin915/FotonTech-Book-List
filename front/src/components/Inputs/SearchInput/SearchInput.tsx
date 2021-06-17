import React from 'react';
import { useTheme } from 'styled-components';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search_icon.svg';
import { SearchInputBox } from './styles';
import { SearchInputProps } from './types';

const SearchInput: React.FC<SearchInputProps> = ({...rest}) => {
    const theme = useTheme();

    return (
        <SearchInputBox Icon={SearchIcon} iconColor={theme.colors.white2} {...rest}/>
    )
}

export default SearchInput

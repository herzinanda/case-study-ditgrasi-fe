import React, { useState } from 'react';
import Image from 'next/image';
import searchIcon from '../../public/assets/icons/search-icon.svg';

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className="flex items-center">
            <input
                className="rounded-md bg-[#F8F8F8] p-2 pr-20 text-xs font-semibold border border-[#8FA0B1] focus-visible:ring-transparent"
                type="search"
                id="study-program-search"
                name="study-program-search"
                placeholder="CARI PROGRAM STUDI"
                value={ searchTerm }
                onChange={ handleInputChange }
            />
            <label htmlFor="study-program-search" className="relative -left-6">
                <Image src={ searchIcon } alt="Search Icon" />
            </label>
        </div>
    );
};

export default SearchBar;

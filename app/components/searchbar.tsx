import Image from 'next/image'
import React from 'react'
import searchIcon from '../../public/assets/icons/search-icon.svg'

const SearchBar = () => {
    return (
        <>
            <div className="flex items-center">
                <input className='rounded-md bg-[#F8F8F8] p-2 pr-20 text-xs font-semibold border border-[#8FA0B1] focus-visible:ring-transparent' type='search' id='study-program-search' name='study-program-search' placeholder='CARI PROGRAM STUDI' />
                <label htmlFor="study-program-search" className='relative -left-6'>
                    <Image
                        src={ searchIcon }
                        alt='Search Icon'
                        className=''
                    />
                </label>
            </div>
        </>
    )
}

export default SearchBar
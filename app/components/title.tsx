import Image from 'next/image'
import React from 'react'
import titleIcon from "../../public/assets/icons/header-icon.svg"

const Title = () => {
    return (
        <>
            <div className='flex items-center'>
                <Image
                    priority
                    src={ titleIcon }
                    alt='Title Icon'
                    className=''
                />
                <h1 className='text-xl font-semibold bg-usu-dark-green px-4 py-2 text-white max-h-10'>Sertifikat Akreditasi</h1>
            </div>
        </>
    )
}

export default Title
import React from 'react'

const Info = () => {
    return (
        <div className='bg-coal px-10'>
            <div className="container m-auto px-16 pt-16 pb-10 text-gray-300">
                <div className="flex justify-between items-center">
                    <div className='text-center w-1/3'>
                        <h3 className='font-bold after-border pb-4 mb-2'>SEND EMAIL</h3>
                        <div className='font-light text-gray-500'>example@mail.com</div>
                        <div className='font-light text-gray-500'>example-two@mail.com</div>
                    </div>
                    <div className='text-center border-l border-r border-gray-700 w-1/3 h-32 pt-5'>
                        <h3 className='font-bold after-border pb-4 mb-2'>CALL US</h3>
                        <div className='font-bold text-gray-500 text-xl'>1234567890</div>
                    </div>
                    <div className='text-center w-1/3'>
                        <h3 className='font-bold after-border pb-4 mb-2'>VISIT US</h3>
                        <div className='font-light text-gray-500'>4096 N HIGHLAND ST,</div>
                        <div className='font-light text-gray-500'>ARLINGTON VA 32101, USA</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info
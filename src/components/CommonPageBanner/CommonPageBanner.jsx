import React from 'react';
import hero from '../../assets/commonHead.jpg'

const CommonPageBanner = ({headTitle}) => {
    return (
        <div>
            <div className="relative  bg-cover bg-coal" style={{ backgroundImage: `url(${hero})` }}>
				<div className="container mx-auto content-center absuolute">
                    <div className='py-40 text-5xl font-bold text-gray-100 text-center'>
                        {headTitle}
                    </div>
    		  </div>
    		</div>
        </div>
    );
};

export default CommonPageBanner;
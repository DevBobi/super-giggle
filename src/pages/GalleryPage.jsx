import React from 'react';
import CommonPageBanner from '../components/CommonPageBanner/CommonPageBanner';
import Gallery from '../components/Gallery/Gallery';
import HomeGallery from '../components/Gallery/HomeGallery/HomeGallery';

const GalleryPage = () => {
    return (
        <div>
            <CommonPageBanner headTitle="Gallery Page" />
            <HomeGallery />
        </div>
    );
};

export default GalleryPage;
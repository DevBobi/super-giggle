import React from 'react';
import CommonPageBanner from '../components/CommonPageBanner/CommonPageBanner';
import Gallery from '../components/Gallery/Gallery';

const GalleryPage = () => {
    return (
        <div>
            <CommonPageBanner headTitle="Gallery Page" />
            <Gallery />
        </div>
    );
};

export default GalleryPage;
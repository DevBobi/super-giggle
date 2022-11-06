import React from 'react';
import CommonPageBanner from '../components/CommonPageBanner/CommonPageBanner';
import Pricing from '../components/Pricing/Pricing';

const PackagesPage = () => {
    return (
        <div>
            <CommonPageBanner headTitle="Packages Page" />
            <Pricing />
            
        </div>
    );
};

export default PackagesPage;
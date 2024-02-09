

import Format from '../layout/Format';
import ProductIntro from '../product/ProductIntro';
import ProductFeatured from '../product/ProductFeatured';
import ProductFeature2 from '../product/ProductFeature2';
import Faqs from '../product/Faqs';


const Home = () => {
    return (
        <Format>
            {/* Hero section */}
           <ProductIntro />
           <ProductFeatured />
           <ProductFeature2 />
           <Faqs />
        </Format>
    );
};

export default Home;


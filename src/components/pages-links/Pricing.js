
import Format from '../layout/Format';
import PricingIntro from '../pricing/PricingIntro';
import PricingPlan from '../pricing/PricingPlan';
import Faqs from '../product/Faqs';


// import App



const Home = () => {
    return (
        <Format>
           <PricingIntro />
           <PricingPlan />
           <Faqs />
        </Format>
    );
};

export default Home;


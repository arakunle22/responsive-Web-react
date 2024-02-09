
import Format from '../layout/Format';
import AppIntro from '../apps/AppIntro';
import AppsFeatures from '../apps/AppsFeatures';
import AppFeatures2 from '../apps/AppsFeatures2';
import AppsFeatures3 from '../apps/AppFeatures3';
// import App



const Home = () => {
    return (
        <Format>
          <AppIntro />
          <AppsFeatures />
          <AppFeatures2 />
          <AppsFeatures3 />
        </Format>
    );
};

export default Home;


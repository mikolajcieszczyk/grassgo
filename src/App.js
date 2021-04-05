import Navigation from 'components/Navigation/Navigation';
import AboutUs from 'components/AboutUs/AboutUs';
import PackagesBar from 'components/Packages/PackagesBar';
import SeaStandardPackage from 'components/Packages/SeaStandardPackage';
import SkyPremiumPackage from 'components/Packages/SkyPremiumPackage';
import EarthEcoPackage from 'components/Packages/EarthEcoPackage';
import OneOffServicesPackage from 'components/Packages/OneOffServicesPackage';
import CommercialAndPublic from 'components/CommercialAndPublic';


function App() {
  return (
    <div className="App">
      <Navigation />
      <AboutUs />
      <PackagesBar />
      <SeaStandardPackage />
      <SkyPremiumPackage />
      <EarthEcoPackage />
      <OneOffServicesPackage />
      <CommercialAndPublic />
    </div>
  );
}

export default App;
import Navigation from 'components/Navigation/Navigation';
import AboutUs from 'components/AboutUs/AboutUs';
import SeaStandardPackage from 'components/Packages/SeaStandardPackage';
import SkyPremiumPackage from 'components/Packages/SkyPremiumPackage';
import EarthEcoPackage from 'components/Packages/EarthEcoPackage';
import OneOffServicesPackage from 'components/Packages/OneOffServicesPackage';


function App() {
  return (
    <div className="App">
      <Navigation />
      <AboutUs />
      <SeaStandardPackage />
      <SkyPremiumPackage />
      <EarthEcoPackage />
      <OneOffServicesPackage />
    </div>
  );
}

export default App;
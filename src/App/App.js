import './App.css';
import data from "../data/footerData";
import sl from "../data/socialLinksData";
import Footer from '../Containers/Footer/Footer';
import SectionOne from '../Containers/SectionOne/SectionOne';
import SectionTwo from '../Containers/SectionTwo/SectionTwo';
import SectionThree from '../Containers/SectionThree/SectionThree';
import Header from '../Containers/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer data={data} sl={sl} />
    </div>
  );
}

export default App;

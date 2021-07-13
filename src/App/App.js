import './App.css';
import data from "../data/footerData";
import sl from "../data/socialLinksData";
import Footer from '../Containers/Footer/Footer';
import SectionOne from '../Containers/SectionOne/SectionOne';
import SectionTwo from '../Containers/SectionTwo/SectionTwo';
import SectionThree from '../Containers/SectionThree/SectionThree';

function App() {
  return (
    <div className="App">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <hr />
      <Footer data={data} sl={sl} />
    </div>
  );
}

export default App;

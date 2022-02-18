import logo from "./logo.svg";
import "./App.css";

import { Navbar } from "./components/Navbar";
import { CategoriesPanel } from "./components/CategoriesPanel";
import { QuotesPanel } from "./components/QuotesPanel";
import { FeaturePanel } from "./components/FeaturePanel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-wrapper">
        <CategoriesPanel />
        <QuotesPanel />
        <FeaturePanel />
      </div>
    </div>
  );
}

export default App;

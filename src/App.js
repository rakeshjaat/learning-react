import logo from "./logo.svg";
import "./App.css";
import "./assets/style.css";
import SimpleButton from "./component/SimpleButton";
import "bootstrap/dist/css/bootstrap.min.css";
import Skelten from "./component/Skelten";
import PortfolioSkeleton from "./component/PortfolioSkeleton";

function App() {
  return (
    <div className="App">
      <SimpleButton />
      <Skelten />
      <PortfolioSkeleton />
    </div>
  );
}

export default App;

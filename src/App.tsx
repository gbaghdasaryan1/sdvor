import "./App.css";
import Footer from "./Components/Footer/Footer";
import Topbar from "./Components/Topbar/Topbar";
import Home from "./Pages/Home/Home";
import { Route, Switch, Redirect } from "react-router-dom";
import SalePage from "./Pages/SalePage/SalePage";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import MainLayout from "./Layout/MainLayout";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Basket from "./Pages/Basket/Basket";
import "@szhsin/react-menu/dist/index.css";
import Category from "./Pages/Category/Category";
import Brends from "./Pages/Brends/Brends";
import Contact from "./Pages/Contact/Contact";
import ShipingAndPay from "./Pages/ShipingAndPay/ShipingAndPay";
function App() {
  //
  return (
    <div className='app'>
      <Topbar />

      <MainLayout>
        <Header />
        <Navbar />
      </MainLayout>

      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/sale-page' component={SalePage} exact={true} />
        <Route path='/categories/:id' component={Category} exact={true} />
        <Route path='/about-us' component={AboutUs} exact={true} />
        <Route path='/brends' component={Brends} />
        <Route path='/shiping-pay' component={ShipingAndPay} />
        <Route path='/contacts' component={Contact} />
        <Route path='/basket' component={Basket} exact={true} />
        <Route path='/product/:id' component={ProductDetail} />

        <Redirect to='/' />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;

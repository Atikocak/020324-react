import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Counter } from "./components/Counter";
import "./App.css";
import { ProductsPage } from "./pages/ProductsPage";
import { Link, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { HomePage } from "./pages/HomePage";
import { CounterPage } from "./pages/CounterPage";
import { ProductDetail } from "./pages/ProductDetail";
import { LoginPage } from "./pages/LoginPage";
import { ContactPage } from "./pages/ContactPage";
import { useLocalStorage } from "./hooks/useLocalStorage";

const defaultUser = { name: "", email: "" };

// Root Component
function App() {
  const [count, setCount] = useState(0);
  const [show1, setShow1] = useState(true);
  const [user, setUser] = useLocalStorage("user", defaultUser);

  const userName = "";

  const logUser = () => {
    console.log("user name: ", userName);
  };

  // Java Script Expression > JSX
  return (
    <>
      <header className="flex justify-between">
        Project Header
        <nav>
          <Link to="/"> Ana Sayfa </Link>
          <Link to="/counter"> Sayaç </Link>
          <Link to="/products"> Ürünler </Link>
          {!user.name && <Link to="/login"> Login </Link>}
          <Link to="/contact"> Contact </Link>
        </nav>
        <span>
          <span>{user.name ? user.name : "Misafir kullanıcı"}</span>
          {user.name && (
            <button onClick={() => setUser(defaultUser)}>Sign out</button>
          )}
        </span>
      </header>
      <div className="page-content">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/counter" exact>
            <CounterPage />
          </Route>
          <Route path="/login" exact>
            <LoginPage user={user} setUser={setUser} />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
          <Route path="/products" exact>
            <ProductsPage />
          </Route>
          <Route path="/product-detail/:productId/:productName" exact>
            <ProductDetail />
          </Route>
          <Route path="*">
            <h2>404 - Sayfa Bulunamadı</h2>
          </Route>
        </Switch>
      </div>
      <footer>Footer</footer>
    </>
  );
}

export default App;

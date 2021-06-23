import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import TankList from "./comp/TankList";
import Tank from "./Tank";
import Search from "./comp/Search";
import "./style.css";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="main">
      <BrowserRouter>
        <header>
          <Link to="/" className="logo">
            Tank Zones
          </Link>
          <div className="links">
             <Link to="/">Главная</Link>
             <Link to="/tanks">Танковедение</Link>
          </div>
          <div className="search">
            <div className="form">
              <input type="text" placeholder="Поиск по названию" value={text} onChange={(e) => setText(e.target.value)}/>
              <button>Поиск</button>
            </div>
          </div>
        </header>
        <Switch>
          <Route exact path="/">
            <div className="main2">
              <div className="welcome">
                <h1>Добро пожаловать!</h1>
                <h5>Здесь вы узнаете как создавалась тяжёлая техника разных классов,<br/>
                  у каждого интересная история. Хочешь узнать? <br/>
                  Тогда жми скорее на танковедение!</h5>
              </div>
            </div>
          </Route>
          <Route exact path="/tanks">
            <TankList text={text} />
          </Route>
          <div className="tank-id">
            <Route path="/tank/:id">
              <Tank />
            </Route>
          </div>
          <Route path="/search/:q">
            <Search></Search>
          </Route>
        </Switch>
        <footer>
          <hr />
          <div class="footer-links">
            <div class="footer-title">Социальные сети</div>
            <ul class="footer-list">
              <li class="footer-item">
                <a href="https://vk.com/6ekon_na_grile">Vk</a>
              </li>
              <li class="footer-item">
                <a href="https://t.me/beka_u_001">Telegram</a>
              </li>
              <li class="footer-item">
                <a href="https://www.instagram.com/beka_u_001/?hl=ru">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          Created by Bekzat
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

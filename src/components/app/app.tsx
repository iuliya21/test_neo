import { FC } from "react";
import styles from "./app.module.css";
import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";
import { Route, Routes } from "react-router-dom";
import Basket from "../../pages/basket";

const App: FC = () => {
  return (
    <div className={styles.app}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;

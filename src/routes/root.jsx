import React from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
export const Root = () => {
  const { state } = useNavigation();
  const { loading } = useSelector((store) => store.CatsReducer);

  return (
    <>
      <Loader />
      <div className="appContainer">
        <SideBar />
        <div>
          <Header />
          <Outlet />
          {(state !== "idle" || loading) && (
            <div className="loading_container">
              <div className="lds-dual-ring"></div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

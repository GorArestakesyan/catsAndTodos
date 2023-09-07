import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { API_URL } from "../../../apis/API";
import { setActiveCategory, setRmeove } from "../../../redux/actions";
import "./index.css";
function SideBar() {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const { categoryID } = useSelector((store) => store.CatsReducer);
  useEffect(() => {
    axios
      .get(`${API_URL}/v1/categories`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log("error : ", err));
  }, []);
  const filterCategories = (id) => {
    if (categoryID !== id) {
      dispatch(setActiveCategory(id));
      dispatch(setRmeove());
    }
  };
  return (
    <div className="sidebarContainer">
      <div className="categoriesContainer">
        <div className="eachCategory">
          <Link className="categoryName pageName" to="todos" replace={false}>
            Todos
          </Link>
        </div>
        <div className="eachCategory">
          <Link className="categoryName pageName" to="/">
            Cats
          </Link>
        </div>
        {categories.map((elm) => {
          return (
            <div
              className="eachCategory"
              key={elm.id}
              id={elm.id}
              title={elm.name}
              onClick={() => filterCategories(elm.id)}
            >
              <p className="categoryName">{elm.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;

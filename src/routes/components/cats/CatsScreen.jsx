import "./index.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../../apis/API";
import { addCats, setLoading } from "../../../redux/actions";
export default function CatsScreen() {
  const { cats, categoryID } = useSelector((store) => store.CatsReducer);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    axios
      .get(
        `${API_URL}/v1/images/search?limit=10&page=[${page}]&category_ids=${categoryID}`
      )
      .then((res) => {
        dispatch(addCats(res.data));
      })
      .catch((err) => console.log("error :", err))
      .finally(() => {
        dispatch(setLoading(false));
      });
  }, [dispatch, page, categoryID]);
  return (
    <>
      <div className="catsContainer">
        {cats.map((cat) => {
          return (
            <img
              className="eachCatImg"
              key={Math.random()}
              src={cat.url}
              loading="lazy"
              alt="cat_img"
            />
          );
        })}
      </div>
      <div className="loadBtnBox">
        <button
          className="loadBtn"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          LOAD MORE
        </button>
      </div>
    </>
  );
}

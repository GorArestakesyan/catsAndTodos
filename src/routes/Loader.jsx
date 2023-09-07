import React, { memo } from "react";
import { useNavigation } from "react-router-dom";

function Loader() {
  const { state } = useNavigation();
  return (
    <div>
      {state !== "idle" ? (
        <div className="loaderContainer">
          <div className="loaderCircle"></div>
        </div>
      ) : null}
    </div>
  );
}

export default memo(Loader);

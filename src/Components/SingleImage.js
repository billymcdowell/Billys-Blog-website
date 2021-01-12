import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SingleImage({ match }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const API_URL = `https://theartistmaxjude.co.uk/wp-json/wp/v2${match.url}?_embed`;
    fetch(`${API_URL}`)
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setData({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });
  }, []);

  function removeTags(str) {
    if (str === null || str === "") return false;
    else str = str.toString();

    return str.replace(/(<([^>]+)>)/gi, "");
  }

  const [fixed, setFixed] = useState(false);

  const changePosition = () => {
    if (window.scrollY >= 48) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  window.addEventListener("scroll", changePosition);

  return loading === true
    ? (() => {
        return (
          <div>
            <div className="skeleton_container">
              <div className="skeleton_text_container skeleton_loading_animation">
                <div className="skeleton_title">
                  <Link to="#"></Link>
                </div>
                <div className="skeleton_content">
                  <Link to="#"></Link>
                </div>
                <div className="skeleton_content">
                  <Link to="#"></Link>
                </div>
                <div className="skeleton_content">
                  <Link to="#"></Link>
                </div>
                <div className="skeleton_content">
                  <Link to="#"></Link>
                </div>
                <div className="skeleton_content">
                  <Link to="#"></Link>
                </div>
              </div>

              <div className="skeleton_img loading_animation"></div>
            </div>
          </div>
        );
      })()
    : (() => {
        const Content = removeTags(data.content.rendered);
        return (
          <div>
            <div className="single_img_block">
              <div>
                <div>
                  <h1
                    className={fixed ? "" : ""}
                    style={{ marginBottom: "1rem" }}
                  >
                    {data.title.rendered}
                  </h1>
                  <p className={fixed ? "" : ""}>{Content}</p>
                </div>
              </div>
              <img
                className="single_img"
                src={data._embedded["wp:featuredmedia"]["0"].source_url}
                alt={data.title.rendered}
              />
            </div>
          </div>
        );
      })();
}

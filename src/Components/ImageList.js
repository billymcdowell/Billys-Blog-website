import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://theartistmaxjude.co.uk/wp-json/wp/v2/work?_embed";

export default function ImageList() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
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

  return loading === true
    ? (() => {
        return (
          <div>
            <div className="grid-container skeleton_loading_animation">
              <Link to="#"></Link>
              <Link to="#"></Link>
              <Link to="#"></Link>
              <Link to="#"></Link>
            </div>
          </div>
        );
      })()
    : (() => {
        return (
          <div>
            <div className="grid-container">
              {data.map((post) => (
                <Link
                  to={`work/${post.id}`}
                  style={{
                    backgroundImage: `url(${post._embedded["wp:featuredmedia"]["0"].source_url})`
                  }}
                >
                  <div>
                    <div className="link-new">
                      {post.title.rendered}
                      <span>&#8594;</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })();
}

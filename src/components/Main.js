require("normalize.css/normalize.css");
require("styles/App.scss");

import React from "react";
import { IMAGES } from "../enums";

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="galleryWrapper">
          {IMAGES.map(image => {
            return (
              <div className="pictureWrapper">
                <img src={image.path} alt={image.alt} />
                <span>{image.caption}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;

require("normalize.css/normalize.css");
require("styles/App.scss");

import React from "react";
import { IMAGES } from "../enums";

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      pictureIndx: 0,
      totalImages: IMAGES.length
    };
  }

  handleClick = type => {
    const { pictureIndx, totalImages } = this.state;
    let newIndx;
    if (type === "left") {
      newIndx = pictureIndx - 1 < 0 ? totalImages - 1 : pictureIndx - 1;
    }
    if (type === "right") {
      newIndx = pictureIndx + 1 > totalImages - 1 ? 0 : pictureIndx + 1;
    }
    this.setState(() => ({ pictureIndx: newIndx }));
  };

  render() {
    const { pictureIndx } = this.state;
    const { handleClick } = this;

    console.log("+", pictureIndx);
    return (
      <div>
        <div
          className="galleryWrapper"
          style={{ transform: `translateX(-${pictureIndx}00vw)` }}
        >
          {IMAGES.map(image => {
            return (
              <div className="pictureWrapper" key={image.title}>
                <div
                  className="picture"
                  style={{ backgroundImage: `url(${image.path})` }}
                />
                <span>{image.caption}</span>
              </div>
            );
          })}
        </div>
        <div className="leftButton" onClick={() => handleClick("left")} />
        <div className="rightButton" onClick={() => handleClick("right")} />
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;

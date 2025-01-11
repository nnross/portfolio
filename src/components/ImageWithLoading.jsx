import propTypes from "prop-types";
import { useEffect, useState } from "react";

const ImageWithLoading = ({
  className,
  id,
  src,
  height,
  width,
  alt = false,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isRendering, setIsRendering] = useState(true);

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setIsRendering(false);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {imageLoaded || isRendering ? null : (
        <div
          className={className}
          style={{
            height: height,
            width: width,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          loading...
        </div>
      )}
      <img
        style={imageLoaded ? {} : { display: "none" }}
        className={className}
        id={id}
        src={src}
        alt={alt ? "" : alt}
        onLoad={() => setImageLoaded(true)}
      />
    </>
  );
};

export default ImageWithLoading;

ImageWithLoading.propTypes = {
  className: propTypes.string,
  id: propTypes.string,
  src: propTypes.string,
  height: propTypes.string,
  width: propTypes.string,
  alt: propTypes.any,
};

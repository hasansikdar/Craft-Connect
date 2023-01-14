import React from 'react';

const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
        carouselState: { currentSlide, deviceType }
      } = rest;
    return <button onClick={() => onClick()}>hell</button>
};

export default CustomLeftArrow;
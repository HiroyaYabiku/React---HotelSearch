import React from 'react';
import PropTypes from 'prop-types';


const GeocodeResult = ({ address, location }) => (
  <ul className="geocode-result">
    {/* {console.log(location)} */}
    <li>住所：{address}</li>
    <li>緯度：{location.lat}</li>
    <li>経度：{location.lng}</li>
  </ul>
);

GeocodeResult.propTypes = {
  address: PropTypes.string,
  location: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default GeocodeResult;
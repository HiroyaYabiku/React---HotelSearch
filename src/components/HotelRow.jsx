import React from 'react';
import PropTypes from 'prop-types';

const HotelRow = ({ hotel }) => (
  <tr>
    <td className="hotel-img"><img src={hotel.thumbUrl} alt="hotel.name" /></td>
    <td className="hotel-name"><a href={hotel.url} target="_blank" rel="noopener noreferrer">{hotel.name}</a></td>
    <td>{hotel.price ? hotel.price + '円' : '空室なし'}</td>
    <td>{hotel.reviewAverage}</td>
    <td>{hotel.reviewCount}</td>
    <td>{hotel.distance}</td>
  </tr>
);

HotelRow.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
    thumbUrl: PropTypes.string,
    price: PropTypes.number,
    reviewAverage: PropTypes.number,
    reviewCount: PropTypes.number,
    distance: PropTypes.number,
  }).isRequired,
};

export default HotelRow;

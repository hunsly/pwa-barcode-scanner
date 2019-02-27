import React from 'react';
import localization from '../localization';

const ProductDisplayTitle = ({productName, code, thumb}) => (
  <div className="productDisplay__titleContainer">
    <div className="productDisplay__thumbContainer">
      {thumb ?
        <img src={thumb} alt="Product front image" />
        :
        <div className="skeleton__image">
          {localization.ProductDisplayTitle__pictureNotFound}
        </div>
      }
    </div>
    <div className="productDisplay__textContainer">
      <h2 className="productDisplay__title">{productName}</h2>
      <div className="productDisplay__barcode">{code}</div>
    </div>
  </div>
);

export default ProductDisplayTitle;

import React from 'react';
import localization from '../localization';

const DietaryData = (product) => (
  <div className="productDisplay__section">
    <h3 className="productDisplay__sectionTitle">{localization.DietaryData__special_dieats}</h3>
    <div className="productDisplay__list--item">
      <span>{localization.DietaryData__plantBased}</span>
      <span className="productDisplay__list--value">
        {product.product.isPlantBased() === undefined ?
        localization.DietaryData__unknown
        :
        product.product.isPlantBased() ? localization.DietaryData__yes : localization.DietaryData__no}
      </span>
    </div>
    <div className="productDisplay__list--item">
      <span>{localization.DietaryData__Gluten}</span>
      <span className="productDisplay__list--value">
        {product.product.containsGluten() === undefined ?
        localization.DietaryData__unknown
        :
        product.product.containsGluten() ? localization.DietaryData__yes : localization.DietaryData__no}
      </span>
    </div>
    <div className="productDisplay__list--item">
      <span>{localization.DietaryData__Lactose}</span>
      <span className="productDisplay__list--value">
        {product.product.containsLactose() === undefined ?
        localization.DietaryData__unknown
        :
        product.product.containsLactose() ? localization.DietaryData__yes : localization.DietaryData__no}
      </span>
    </div>
    <div className="productDisplay__list--item">
      <span>{localization.DietaryData__PalmOil}</span>
      <span className="productDisplay__list--value">
        {product.product.containsPalmOil() === undefined ?
        localization.DietaryData__unknown
        :
        product.product.containsPalmOil() ? localization.DietaryData__yes : localization.DietaryData__no}
      </span>
    </div>
  </div>
);

export default DietaryData;

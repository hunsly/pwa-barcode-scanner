import React from 'react';
import localization from '../localization';

const NutrientLevels = (product) => (
  <section className="productDisplay__section">
    <h3 className="productDisplay__sectionTitle">{localization.NutrientLevels__title}</h3>
    {product.product.nutrientLevels() !== undefined ?
      product.product.nutrientLevels().map((x, i) =>
      <div className="productDisplay__list--item" key={i}>
        <span className="productDisplay__list--label">{(localization["NutrientLevels__title_"+x.title] == undefined) ? x.title : localization["NutrientLevels__title_"+x.title]}</span>
        <span className={`productDisplay__list--value ${x.value}`}>{(localization["NutrientLevels__value_"+x.value] == undefined) ? x.value : localization["NutrientLevels__value_"+x.value]}</span>
      </div>)
      :
      <div className="produtList__unknown">{localization.NutrientLevels__unknown}</div>
    }
  </section>
);

export default NutrientLevels;

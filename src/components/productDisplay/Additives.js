import React from 'react';
import localization from '../localization';

const Additives = (product) => (
  <section className="productDisplay__section">
    <h3 className="productDisplay__sectionTitle">{localization.additives__additives}</h3>
    {product.product.additives() !== undefined ?
      product.product.additives().length === 0 ?
      <div>{localization.additives__none}</div>
      :
      product.product.additives().map((x, i, arr) =>
      <span key={i} className="productDisplay__additive">
        <a target="_blank" href={`https://${localization.subdomain}.openfoodfacts.org/additive/${x}`}>{x}</a>
        {i+1 === arr.length ?
          ''
          :
          ','
        }
      </span>)
      :
      <div>{localization.additives__unknown}</div>
    }
  </section>
);

export default Additives;

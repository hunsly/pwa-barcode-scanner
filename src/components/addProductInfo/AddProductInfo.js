import React from 'react';
import localization from '../localization';

import styles from './addProductInfo.css';

const AddProductInfo = (status) => (
  <div className="off_disclaimer">
    <p>
    {localization.formatString(localization.AddProductInfo__off_link,<a target="_blank" href="https://world.openfoodfacts.org/">{localization.AddProductInfo__off}</a>)}
    </p>
    <div>
    {status.status === 1 ?
      <p>{localization.formatString(localization.AddProductInfo__extend_information,<a target="_blank" href={`https://world.openfoodfacts.org/product/${status.barcode}`}>{localization.AddProductInfo__here}</a>)}</p>
      :
      <p>{localization.formatString(localization.AddProductInfo__contribute,<a target="_blank" href="https://world.openfoodfacts.org/contribute">{localization.AddProductInfo__here}</a>)}
      </p>
    }
    </div>
  </div>
);

export default AddProductInfo;

import React from 'react';

import SHOP_DATA from '../shop/shop.data.js';

import Preview from './preview/preview.components';;


class CosmeticsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA[2]
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        
          <Preview key={collections.id} title={collections.title} items={collections.items} />
        
      </div>
    );
  }
}

export default CosmeticsPage;

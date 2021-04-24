import React from 'react';
import { Link } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items,routeName }) => (
  <div className='collection-preview'>
  {
    (title==='Wallets and Clutches')?(
      <>
        <Link className='option' to='/walletsandclutches'>
        <h1 className='title'>{title.toUpperCase()}</h1>
      </Link>    
      </>
    ):
    (title==='Accessories')?(
      <>
        <Link className='option' to='/accessories'>
        <h1 className='title'>{title.toUpperCase()}</h1>
      </Link>    
      </>
    ):
    (title==='Cosmetics')?(
      <>
        <Link className='option' to='/cosmetics'>
        <h1 className='title'>{title.toUpperCase()}</h1>
      </Link>    
      </>
    ):
    (title==='Traditional Wear')?(
      <>
        <Link className='option' to='/traditional'>
        <h1 className='title'>{title.toUpperCase()}</h1>
      </Link>    
      </>
    ):
    (
      <Link className='option' to='/western'>
        <h1 className='title'>{title.toUpperCase()}</h1>
      </Link>
    )
  }
  
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;

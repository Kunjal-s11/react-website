import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';


class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'wallets and clutches',
          imageUrl: 'https://tacticafashion.com/wp-content/uploads/2020/05/drawing-from-concealed-carry-purse.jpg',
          id: 1,
          linkUrl: 'walletsandclutches'
        },
        {
          title: 'accessories',
          imageUrl: 'https://cdn12.caratlane.com/static/images/V4/2019/03-MAR/caratlane-newsite/Model_1.jpg',
          id: 2,
          linkUrl: 'accessories'
        },
        {
          title: 'cosmetics',
          imageUrl: 'https://post.healthline.com/wp-content/uploads/2020/04/makeup_composition_overhead-732x549-thumbnail.jpg',
          id: 3,
          linkUrl: 'cosmetics'
        },
        {
          title: 'traditional wear',
          imageUrl: 'https://www.benzerworld.com/pub/media/mageplaza/blog/post/h/o/home-cat1.png',
          size: 'large',
          id: 4,
          linkUrl: 'traditional'
        },
        {
          title: 'western wear',
          imageUrl: 'https://images.ctfassets.net/i4peodo0jfdd/5HA9VFVWuQwlL9PF5vfUGV/230ce9b9896322dfe62627ba972f856c/Scallop_Shirt_385.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'western'
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;

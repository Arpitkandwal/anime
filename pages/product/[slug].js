import React from 'react';
import { client ,urlFor } from '../../lib/client';

const ProductDetails = () => {
  return (
    <div>
        <div className="product-detail-container">
            <div>
                <div className='image-container'>
                    <img src="" alt="" />
                </div>
            </div>

        </div>
    </div>
  )
}

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);
  
    const bannerquery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerquery);
  
    return {
      props: { products, bannerData }
    }
  }

export default ProductDetails;

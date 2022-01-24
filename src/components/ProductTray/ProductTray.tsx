import React from "react";
import privacyPolicyImage from "../../assets/images/Rectangle 124.png";
import termsAndConditionsImage from "../../assets/images/Rectangle 125.png";
import domainNameImage from "../../assets/images/Rectangle 126.png";
import invoiceImage from "../../assets/images/Rectangle 127.png";
import Product from "../Product/Product";

const ProductTray: React.FC = () => {
  return (
    <div className='bg-black-100 px-8 py-4 md:px-40 md:py-20 flex-col'>
      <h1 className='font-semibold text-4xl tracking-tight text-left mb-12'>
        Try our other free products
      </h1>
      <div className='flex-col md:grid md:grid-cols-2 gap-4 lg:grid-cols-4'>
        <Product
          title='Privacy Policy Generator'
          description='Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.'
          image={privacyPolicyImage}
        />
        <Product
          title='Terms and Conditions Generator'
          description='Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.'
          image={termsAndConditionsImage}
        />
        <Product
          title='Domain Name Generator'
          description='Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.'
          image={domainNameImage}
        />
        <Product
          title='Invoice Generator'
          description='Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.'
          image={invoiceImage}
        />
      </div>
    </div>
  );
};

export default ProductTray;

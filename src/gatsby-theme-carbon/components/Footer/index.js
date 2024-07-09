import React from 'react';
import Footer from 'gatsby-theme-carbon/src/components/Footer';

const Content = ({ buildTime }) => (
  <>
  </>
);

const links = {
  firstCol: [
    { href: 'https://www.ibm.com/cloud/sevone-network-performance-management', linkText: 'IBM SevOne NPM' }
  ],
  secondCol: [
    { href: 'https://www.ibm.com/products/rapid-network-automation', linkText: 'IBM Remote Network Automation' }
    ],
};

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;

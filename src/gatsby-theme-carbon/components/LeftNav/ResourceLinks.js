import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'IBM SevOne NPM Site',
    href: 'https://www.ibm.com/cloud/sevone-network-performance-management',
  },
  {
    title: 'IBM RNA Site',
    href: 'https://www.ibm.com/products/rapid-network-automation',
  },
  
 {
    title: 'IBM AIOps Site',
    href: 'https://www.ibm.com/cloud/aiops',
  },
  {
    title: 'PTEG - Partner Enablement',
    href: 'https://ibm.seismic.com/Link/Content/DCGdFfFmRb3Rb8TRTHhHPXjbCDWj',
  },
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;

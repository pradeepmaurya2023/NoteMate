import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slateGray text-center py-4 text-white">
      <p>© {new Date().getFullYear()} NoteMate. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
import { ScriptProps } from 'next/script';
import React from 'react';
import Navbar from '../Navbar/Navbar';

const Layout: React.FC<ScriptProps> = ({children}) => {
    return (
      <>
        <Navbar/>
        {children}
      </>
    )
}
export default Layout;
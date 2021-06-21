import React from 'react';
import './index.css';

function HeaderView({children}) {
    return (
            <header className="Searchbar">
                {children}
            </header>
         );
}
 
export default HeaderView;
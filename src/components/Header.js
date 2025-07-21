import React from 'react';

function Header(){
    return(
        <header style={{backgroundColor: '#f7f7f7', padding: '1rem'}}>
            <h1>🌸 Fleurie</h1>
            <nav>
                <a href="/"> Acceuil </a> | <a href="/boutique"> Boutique</a>
            </nav>
        </header>
    );
}

export default Header;
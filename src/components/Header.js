import React from 'react';
import NavHero from './NavHero';
import NavSticky from './NavSticky';

const Header = ({ onInputChange, onCLickRunQuery, onInputHitEnter }) =>{

    return(
    <section className=''>
        <NavHero onInputChange={onInputChange} onCLickRunQuery={onCLickRunQuery} onInputHitEnter={onInputHitEnter} />
        <NavSticky onInputChange={onInputChange} onCLickRunQuery={onCLickRunQuery} onInputHitEnter={onInputHitEnter} />
    </section>
    )
}
export default Header;
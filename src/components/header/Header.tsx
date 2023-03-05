import * as React from 'react';
import './Header.scss';

interface  HeaderProps {
}

const Header: React.FunctionComponent< HeaderProps> = (props) => {
  return (
    <div className='header'>
        <div className='header__name'>
            JS Test
        </div>
        <ul className='header__info'>
            <li>
                ул. Ворошилова, 12, Челябинск, Челябинская обл.
            </li>
            <li>
                +7999-9999-99-99
            </li>
        </ul>
    </div>
  );
};

export default Header;

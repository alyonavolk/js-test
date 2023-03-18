import * as React from 'react';
import './Header.scss';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className='header'>
        <div className='header__name'>
            JS Test
        </div>
        <ul className='header__info'>
            <li>
                ул. Ворошилова, 12, Челябинск, Чел. обл.
            </li>
            <li>
                +7999-9999-99-99
            </li>
        </ul>
    </div>
  );
};

export default Header;

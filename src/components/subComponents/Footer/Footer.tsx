import * as React from 'react';
import './Footer.scss';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <div className='footer'>
        Выполнили: Волкова Алёна и Васильева Юлия П-37
    </div>
  );
};

export default Footer;

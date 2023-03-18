import * as React from 'react';
import './pageTitle.scss';
import { NavLink } from 'react-router-dom';

interface IPageTitleProps {
    title: string;
    back: string;
    forward: string;
    left?: boolean;
    right?: boolean;
}

const PageTitle: React.FunctionComponent<IPageTitleProps> = ({title, back, forward, left = true, right = true}) => {
  return (
    <div className='pageTitle'>
        {left && <NavLink className='pageTitle__link' exact to={back}>&#60;</NavLink>}
        <p className='pageTitle__title'>{title}</p>
        {right && <NavLink className='pageTitle__link' exact to={forward}>&#62;</NavLink>}
    </div>
  );
};

export default PageTitle;

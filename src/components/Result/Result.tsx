import * as React from 'react';
import './result.scss';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../ROUTES';

interface IResultProps {
}

const Result: React.FunctionComponent<IResultProps> = (props) => {
  return (
    <div className='result'>
        <div className='result__title'>
            <p>Вы прошли тест на</p>
            <p>5 б.</p>
        </div>
        <div className='result__false'>
            <p className='result__false_title'>Вы ответили неправильно на вопросы:</p>
            <p>Вопрос 1</p>
            <p>Вопрос 5</p>
        </div>
        <NavLink className='result__btn' exact to={ROUTES.main}>Главная</NavLink>
    </div>
  );
};

export default Result;

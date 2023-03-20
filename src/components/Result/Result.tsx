import * as React from 'react';
import { useEffect } from 'react';
import './result.scss';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../ROUTES';

interface IResultProps {
  result: number;
  response: string[];
}

const Result: React.FC<IResultProps> = ({result, response}) => {

  useEffect(() => {
        console.log('result', response);
  }, [response])

  return (
    <div className='result'>
      <div className='result__content'>
        <div className='result__title'>
            <p>Вы прошли тест на</p>
            <p>{result} б.</p>
        </div>
        <div className='result__false'>
            <p className='result__false_title'>Ваши ответы:</p>
            {response.map((res, index) => (<p key={index}>Вопрос {index+1}: {res}</p>))}
            
            {/* <p>Вопрос 2:</p>
            <p>Вопрос 3:</p>
            <p>Вопрос 4:</p>
            <p>Вопрос 5:</p>
            <p>Вопрос 6:</p>
            <p>Вопрос 7:</p>
            <p>Вопрос 8:</p>
            <p>Вопрос 9:</p>
            <p>Вопрос 10:</p> */}
        </div>
      </div>
        <NavLink className='result__btn' exact to={ROUTES.main}>Главная</NavLink>
    </div>
  );
};

export default Result;

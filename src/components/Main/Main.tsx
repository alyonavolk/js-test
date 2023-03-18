import * as React from 'react';
import './main.scss';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '../../ROUTES';

interface IMainProps {
}

const Main: React.FunctionComponent<IMainProps> = (props) => {
  return (
    <div className='main'>
    <p className='main__descr'>
      <span>JavaScript</span> — это язык программирования, который в первую очередь применяют в вебе. Его ещё называют главным языком фронтенда — «лицевой» стороны сайта, с которой взаимодействуют пользователи. Проверь себя, насколько хорошо ты знаешь основы <span>JavaScript</span>.
    </p>
      <NavLink className='main__btn' exact to={ROUTES.question1}>Начать тест</NavLink>
    </div>
  );
};

export default Main;

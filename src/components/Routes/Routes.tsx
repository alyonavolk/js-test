import React, { useState } from 'react';
import './Routes.scss';
import { Route, Switch, useLocation } from 'react-router-dom';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import { NavLink } from 'react-router-dom';
import TextBoxQuestion from '../textBoxQuestion/textBoxQuestion';
import PageTitle from '../subComponents/pageTitle/PageTitle';
import Main from '../Main/Main';

import { ROUTES } from '../../ROUTES';
import RadioQuestion from '../RadioQuestion/RadioQuestion';
import DefinitionQuestion from '../DefinitionQuestion/DefinitionQuestion';
import ChekBoxQuestion from '../ChekBoxQuestion/ChekBoxQuestion';
import Result from '../Result/Result';

interface IRoutesProps {
}

const Routes: React.FC<IRoutesProps> = (props) => {
    const [location, setLocation] = useState('');

    const lock = useLocation();
    console.log(lock.pathname);

  return (
    <TransitionGroup>
        <CSSTransition timeout = {800}
              classNames = 'fade'
              key={lock.pathname}>
              <Switch location={lock}>
                <Route exact path={ROUTES.main}>
                    <div className='routes'>
                        <Main />
                    </div>
                </Route>
                <Route exact path={ROUTES.question1}>
                    <div className='routes'>
                        <PageTitle title='Вопрос 1' 
                        back={ROUTES.question1} forward={ROUTES.question2}
                        left={false} />
                        <TextBoxQuestion 
                        title='Запишите следующую конструкцию на JavaScript, используя тернарный оператор «?»' 
                        condition={`if (a + b < 4)  { 
                            ㅤalert('Мало') ;} 
                            else { 
                            ㅤalert('Много');}
                            `}
                        placeholder='(a...'
                        value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                </Route>
                <Route exact path={ROUTES.question2}>
                    <div className='routes'>
                        <PageTitle title='Вопрос 2' 
                        back={ROUTES.question1} forward={ROUTES.question3}/>
                        <RadioQuestion
                            title='В чем разница между методами shift и pop при работе с массивами в JavaScript?'
                            answer1='shift удаляет последний элемент массива, а pop первый элемент'
                            changeAnswer1={() => console.log()}
                            answer2='shift добавляет элемент в начало массива, а pop удаляет первый элемент массива'
                            changeAnswer2={() => console.log()}
                            answer3='shift удаляет первый элемент массива, а pop последний элемент'
                            changeAnswer3={() => console.log()}
                        />
                    </div>
                </Route>
                <Route exact path={ROUTES.question3}>
                    <div className='routes'>
                        <PageTitle title='Вопрос 3' 
                        back={ROUTES.question2} forward={ROUTES.question4}/>
                        <DefinitionQuestion value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                </Route>
                <Route exact path={ROUTES.question4}>
                    <div className='routes'>
                        <PageTitle title='Вопрос 4' 
                        back={ROUTES.question3} forward={ROUTES.question5}/>
                        <ChekBoxQuestion title='Какие типы данных поддерживает файл JSON? Выберите несколько вариантов ответа'
                        answer1='Массивы' changeAnswer1={() => console.log()}
                        answer2='Функции' changeAnswer2={() => console.log()}
                        answer3='Примитивы (число, строка, логические значения, null)' changeAnswer3={() => console.log()}
                        changeAnswer4={() => console.log()}
                        changeAnswer5={() => console.log()}
                        five={true} />
                    </div>
                </Route>
                <Route exact path={ROUTES.question5}>
                    <div className='routes'>
                        <PageTitle title='Вопрос 5' 
                        back={ROUTES.question4} forward={ROUTES.question6}/>
                        <TextBoxQuestion 
                        title='Чему будет равна переменная rez, после выполнения следующего кода?' 
                        condition={`let rez = 0; 
                            for (let i = 0; i < 3; i++) { 
                                ㅤrez += i;
                            }
                        `}
                        placeholder='1234...'
                        value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                </Route>
                <Route exact path={ROUTES.question6}>
                    <div className='routes'>
                        <PageTitle title='Вопрос 6' 
                        back={ROUTES.question5} forward={ROUTES.question7}/>
                        <ChekBoxQuestion title={`Работа со строками в JavaScript. Как можно получить символ «о» из следующей переменной? \nㅤㅤlet str = \`Hello\`; `}
                        answer1='alert ( str[str.length - 1] );' changeAnswer1={() => console.log()}
                        answer2='alert ( str.at(-1) );' changeAnswer2={() => console.log()}
                        answer3='alert ( str[4] );' changeAnswer3={() => console.log()}
                        changeAnswer4={() => console.log()}
                        changeAnswer5={() => console.log()} />
                    </div>
                </Route>
                <Route exact path={ROUTES.question7}>
                    <div className='routes'>
                        <PageTitle title='Вопрос 7' 
                        back={ROUTES.question6} forward={ROUTES.question8}/>
                        <TextBoxQuestion 
                        title='Какую директиву необходимо написать вначале скрипта JavaScript, для того чтобы код работал в «современном» режиме?' 
                        condition={''}
                        placeholder='""'
                        value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                </Route>
                <Route exact path={ROUTES.question8}>
                    <div className='routes'>
                        <PageTitle title='Вопрос 8' 
                        back={ROUTES.question7} forward={ROUTES.question9}/>
                        
                        <RadioQuestion
                            title='Что представляет из себя конструкция «switch» в JavaScript?'
                            answer1='это один из видов записи цикла'
                            changeAnswer1={() => console.log()}
                            answer2='это способ сравнить выражение сразу с несколькими вариантами'
                            changeAnswer2={() => console.log()}
                            answer3='это одна из встроенных функций языка'
                            changeAnswer3={() => console.log()}
                        />
                    </div>
                </Route>
                <Route exact path={ROUTES.question9}>
                    <div className='routes'>
                        <PageTitle title='Вопрос 9' 
                        back={ROUTES.question8} forward={ROUTES.question10}/>
                        <TextBoxQuestion 
                        title='Напишите функцию min (a,b) на JavaScript, которая возвращает меньшее из чисел a и b. Используйте тернарный оператор «?».' 
                        condition={`Пример вызова функции: \n min(2, 5) == 2`}
                        placeholder='function...'
                        value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                </Route>
                <Route exact path={ROUTES.question10}>
                    <div className='routes'>
                        <PageTitle title='Вопрос 10' 
                        back={ROUTES.question9} forward={ROUTES.results}
                        />
                        
                        <RadioQuestion
                            title='В JavaScript существует встроенная функция confirm. За что она отвечает?'
                            answer1='Отображает модальное окно с сообщением и кнопкой ОК'
                            changeAnswer1={() => console.log()}
                            answer2='Отображает модальное окно с текстом, полем для ввода текста и кнопками OK/Отмена'
                            changeAnswer2={() => console.log()}
                            answer3='Отображает модальное окно с текстом вопроса и двумя кнопками OK и Отмена'
                            changeAnswer3={() => console.log()}
                        />
                    </div>
                </Route>
                <Route exact path={ROUTES.results}>
                    <div className='routes'>
                        <Result />
                    </div>
                </Route>
              </Switch>
        </CSSTransition>
        </TransitionGroup>
  );
};

export default Routes;

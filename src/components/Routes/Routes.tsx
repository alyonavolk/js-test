import React, { useState, useEffect } from 'react';
import './Routes.scss';
import { Route, Switch, useLocation } from 'react-router-dom';
import {CSSTransition, TransitionGroup } from 'react-transition-group';
import TextBoxQuestion from '../textBoxQuestion/textBoxQuestion';
import PageTitle from '../subComponents/pageTitle/PageTitle';
import Main from '../Main/Main';

import { ROUTES } from '../../ROUTES';
import { Response } from '../../Response';
import RadioQuestion from '../RadioQuestion/RadioQuestion';
import DefinitionQuestion from '../DefinitionQuestion/DefinitionQuestion';
import CheckBoxQuestion from '../CheckBoxQuestion/CheckBoxQuestion';
import Result from '../Result/Result';

const Routes: React.FC = () => {
    const lock = useLocation();

    const [score, setScore] = useState<number>(0);
    const [response, sertResponse] = useState<string[]>([]);

    const [textQuestion1, setTextQuestion1] = useState<string>('');
    const [textQuestion4, setTextQuestion4] = useState<string>('');
    const [textQuestion6, setTextQuestion6] = useState<string>('');
    const [textQuestion8, setTextQuestion8] = useState<string>('');
    const [textQuestion10, setTextQuestion10] = useState<string>('');

    const [radioQuestion2, setRadioQuestion2] = useState<string>('');
    const [radioQuestion7, setRadioQuestion7] = useState<string>('');
    const [radioQuestion9, setRadioQuestion9] = useState<string>('');

    const [checkboxQuestion3, setCheckboxQuestion3] = useState({answer1: false, answer2: false, answer3: false, answer4: false, answer5: false});
    const [checkboxQuestion5, setCheckboxQuestion5] = useState({answer1: false, answer2: false, answer3: false});

    const handlerQuestion3: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { target } = e;
        setCheckboxQuestion3( f => ({ ...f, [target.value]: target.checked }));
    };

    const handlerQuestion5: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const { target } = e;
        setCheckboxQuestion5( f => ({ ...f, [target.value]: target.checked }));
    };



    useEffect(() => {
        const result: string[] = [];
        let score:number = 0; 
        console.log(textQuestion8.replace(/\s+/g, '').replace(';', '').trim());

        if (lock.pathname === ROUTES.results) {
            let res: number | null;
            let res1;
            let resCount1: number = 0;
            Response.question1.forEach(element => {
                res1 = textQuestion1.replace(/\s+/g, '').replace(';', '').trim() === element ? resCount1++ : null;
            });
            res = textQuestion1 === '' ? result.push('Не отвечено') : resCount1 >= 1 ? result.push('Правильно') : result.push('Не правильно');
            res = resCount1 >= 1 ? score++ : null;
            
            let res2 = radioQuestion2 ===  Response.question2;
            res = radioQuestion2 === '' ? result.push('Не отвечено') : res2 ? result.push('Правильно') : result.push('Не правильно');
            res = res2 ? score++ : null;

            let res3 = Response.question3[0] === checkboxQuestion3.answer1 &&
            Response.question3[1] === checkboxQuestion3.answer2 &&
            Response.question3[2] === checkboxQuestion3.answer3 &&
            Response.question3[3] === checkboxQuestion3.answer4 &&
            Response.question3[4] === checkboxQuestion3.answer5;
            res = res3 ? result.push('Правильно') : result.push('Не правильно');
            res = res3 ? score++ : null;
    
            let res4 = textQuestion4.replace(/\s+/g, '').trim() ===  Response.question4;
            res = textQuestion4 === '' ? result.push('Не отвечено') : res4 ? result.push('Правильно') : result.push('Не правильно');
            res = res4 ? score++ : null;

            let res5 = Response.question5 === checkboxQuestion5.answer1 &&
            Response.question5 === checkboxQuestion5.answer2 &&
            Response.question5 === checkboxQuestion5.answer3;
            res = res5 ? result.push('Правильно') : result.push('Не правильно');
            res = res5 ? score++ : null;

            let res6;
            Response.question6.forEach(element => {
                res6 = textQuestion6.replace(/\s+/g, '').trim() === element;
            });
            res = textQuestion6 === '' ? result.push('Не отвечено') : res6 ? result.push('Правильно') : result.push('Не правильно');
            res = res6 ? score++ : null;
    
            let res7 = radioQuestion7 ===  Response.question7;
            res = radioQuestion7 === '' ? result.push('Не отвечено') : res7 ? result.push('Правильно') : result.push('Не правильно');
            res = res7 ? score++ : null;

            let res8;
            let resCount2: number = 0;
            Response.question8.forEach(element => {
                res8 = textQuestion8.replace(/\s+/g, '').replace(';', '').trim() === element ? resCount2++ : null;
            });
            res = textQuestion8 === '' ? result.push('Не отвечено') : resCount2 >= 1 ? result.push('Правильно') : result.push('Не правильно');
            res = resCount2 >= 1 ? score++ : null;

            let res9 = radioQuestion9 ===  Response.question9;
            res = radioQuestion9 === '' ? result.push('Не отвечено') : res9 ? result.push('Правильно') : result.push('Не правильно');
            res = res9 ? score++ : null;
    
            let res10 = textQuestion10.replace(/\s+/g, '').trim() ===  Response.question10;
            res = textQuestion10 === '' ? result.push('Не отвечено') : res10 ? result.push('Правильно') : result.push('Не правильно');
            res = res10 ? score++ : null;
            sertResponse(result);
            setScore(score);

            setTextQuestion1('');
            setTextQuestion4('');
            setTextQuestion6('');
            setTextQuestion8('');
            setTextQuestion10('');

            setRadioQuestion2('');
            setRadioQuestion7('');
            setRadioQuestion9('');

            setCheckboxQuestion3({answer1: false, answer2: false, answer3: false, answer4: false, answer5: false});
            setCheckboxQuestion5({answer1: false, answer2: false, answer3: false});
        }
    }, [lock]);


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
                            ㅤalert('Мало');} 
                            else { 
                            ㅤalert('Много');}
                            `}
                        placeholder='(a...'
                        value={textQuestion1} onChange={(e) => setTextQuestion1(e.target.value)} />
                    </div>
                </Route>
                <Route exact path={ROUTES.question2}>
                    <div className='routes'>
                        <PageTitle title='Вопрос 2' 
                        back={ROUTES.question1} forward={ROUTES.question3}/>
                        <RadioQuestion
                            title='В чем разница между методами shift и pop при работе с массивами в JavaScript?'
                            answer1='shift удаляет последний элемент массива, а pop первый элемент'
                            changeAnswer1={(e) => setRadioQuestion2(e.target.value)}
                            checkedAnswer1={radioQuestion2 === 'answer1'}
                            answer2='shift добавляет элемент в начало массива, а pop удаляет первый элемент массива'
                            changeAnswer2={(e) => setRadioQuestion2(e.target.value)}
                            checkedAnswer2={radioQuestion2 === 'answer2'}
                            answer3='shift удаляет первый элемент массива, а pop последний элемент'
                            changeAnswer3={(e) => setRadioQuestion2(e.target.value)}
                            checkedAnswer3={radioQuestion2 === 'answer3'}
                        />
                    </div>
                </Route>
                <Route exact path={ROUTES.question3}>
                    <div className='routes'>
                        <PageTitle title='Вопрос 3' 
                        back={ROUTES.question2} forward={ROUTES.question4}/>
                        <CheckBoxQuestion title='Какие типы данных могут быть использованы в JSON?'
                        answer1='Массивы' 
                        changeAnswer1={handlerQuestion3} checked1={checkboxQuestion3.answer1}
                        answer2='Функции' 
                        changeAnswer2={handlerQuestion3} checked2={checkboxQuestion3.answer2}
                        answer3='Примитивы (число, строка, логические значения, null)' 
                        changeAnswer3={handlerQuestion3} checked3={checkboxQuestion3.answer3}
                        changeAnswer4={handlerQuestion3} checked4={checkboxQuestion3.answer4}
                        changeAnswer5={handlerQuestion3} checked5={checkboxQuestion3.answer5}
                        five={true} />
                    </div>
                </Route>
                <Route exact path={ROUTES.question4}>
                    <div className='routes'>
                        <PageTitle title='Вопрос 4' 
                        back={ROUTES.question3} forward={ROUTES.question5}/>
                        <TextBoxQuestion 
                        title='Чему будет равна переменная rez, после выполнения следующего кода?' 
                        condition={`let rez = 0; 
                            for (let i = 0; i < 3; i++) { 
                                ㅤrez += i;
                            }
                        `}
                        placeholder='1234...'
                        value={textQuestion4} onChange={(e) => setTextQuestion4(e.target.value)} />
                    </div>
                </Route>
                <Route exact path={ROUTES.question5}>
                    <div className='routes'>
                        <PageTitle title='Вопрос 5' 
                        back={ROUTES.question4} forward={ROUTES.question6}/>
                        <CheckBoxQuestion title={`Работа со строками в JavaScript. Как можно получить символ «о» из следующей переменной? \nㅤㅤlet str = \`Hello\`; `}
                        answer1='alert ( str[str.length - 1] );' 
                        changeAnswer1={handlerQuestion5} checked1={checkboxQuestion5.answer1}
                        answer2='alert ( str.at(-1) );' 
                        changeAnswer2={handlerQuestion5} checked2={checkboxQuestion5.answer2}
                        answer3='alert ( str[4] );' 
                        changeAnswer3={handlerQuestion5} checked3={checkboxQuestion5.answer3}
                        changeAnswer4={() => console.log()} checked4={false}
                        changeAnswer5={() => console.log()} checked5={false} />
                    </div>
                </Route>
                <Route exact path={ROUTES.question6}>
                    <div className='routes'>
                        <PageTitle title='Вопрос 6' 
                        back={ROUTES.question5} forward={ROUTES.question7}/>
                        <TextBoxQuestion 
                        title='Какую директиву необходимо написать вначале скрипта JavaScript, для того чтобы код работал в «современном» режиме?' 
                        condition={''}
                        placeholder='""'
                        value={textQuestion6} onChange={(e) => setTextQuestion6(e.target.value)} />
                    </div>
                </Route>
                <Route exact path={ROUTES.question7}>
                    <div className='routes'>
                        <PageTitle title='Вопрос 7' 
                        back={ROUTES.question6} forward={ROUTES.question8}/>
                        <RadioQuestion
                            title='Что представляет из себя конструкция «switch» в JavaScript?'
                            answer1='это один из видов записи цикла'
                            changeAnswer1={(e) => setRadioQuestion7(e.target.value)}
                            checkedAnswer1={radioQuestion7 === 'answer1'}
                            answer2='это способ сравнить выражение поочерёдно с несколькими вариантами значений'
                            changeAnswer2={(e) => setRadioQuestion7(e.target.value)}
                            checkedAnswer2={radioQuestion7 === 'answer2'}
                            answer3='это одна из встроенных функций языка'
                            changeAnswer3={(e) => setRadioQuestion7(e.target.value)}
                            checkedAnswer3={radioQuestion7 === 'answer3'}
                        />
                    </div>
                </Route>
                <Route exact path={ROUTES.question8}>
                    <div className='routes'>
                        <PageTitle title='Вопрос 8' 
                        back={ROUTES.question7} forward={ROUTES.question9}/>
                        <TextBoxQuestion 
                        title='Напишите функцию min (a,b) на JavaScript, которая возвращает меньшее из чисел a и b. Используйте тернарный оператор «?».' 
                        condition={`Пример вызова функции: \n min(2, 5) == 2`}
                        placeholder='function...'
                        value={textQuestion8} onChange={(e) => setTextQuestion8(e.target.value)} />
                    </div>
                </Route>
                <Route exact path={ROUTES.question9}>
                    <div className='routes'>
                        <PageTitle title='Вопрос 9' 
                        back={ROUTES.question8} forward={ROUTES.question10}
                        />
                        <RadioQuestion
                            title='В JavaScript существует встроенная функция confirm. За что она отвечает?'
                            answer1='Отображает модальное окно с сообщением и кнопкой ОК'
                            changeAnswer1={(e) => setRadioQuestion9(e.target.value)}
                            checkedAnswer1={radioQuestion9 === 'answer1'}
                            answer2='Отображает модальное окно с текстом, полем для ввода текста и кнопками OK/Отмена'
                            changeAnswer2={(e) => setRadioQuestion9(e.target.value)}
                            checkedAnswer2={radioQuestion9 === 'answer2'}
                            answer3='Отображает модальное окно с текстом вопроса и двумя кнопками OK и Отмена'
                            changeAnswer3={(e) => setRadioQuestion9(e.target.value)}
                            checkedAnswer3={radioQuestion9 === 'answer3'}
                        />
                    </div>
                </Route>
                <Route exact path={ROUTES.question10}>
                    <div className='routes'>
                        <PageTitle title='Вопрос 10' 
                        back={ROUTES.question9} forward={ROUTES.results}
                        right={false}/>
                        <DefinitionQuestion value={textQuestion10} onChange={(e) => setTextQuestion10(e.target.value)} />
                    </div>
                </Route>
                <Route exact path={ROUTES.results}>
                    <div className='routes'>
                        <Result
                            result={score} response={response}
                        /> 
                    </div>
                </Route>
              </Switch>
        </CSSTransition>
        </TransitionGroup>
  );
};

export default Routes;

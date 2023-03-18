import * as React from 'react';
import './radioQuestion.scss';

interface IRadioQuestionProps {
    title: string;
    answer1: string;
    changeAnswer1: React.ChangeEventHandler<HTMLInputElement> | undefined;
    answer2: string;
    changeAnswer2: React.ChangeEventHandler<HTMLInputElement> | undefined;
    answer3: string;
    changeAnswer3: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

const RadioQuestion: React.FC<IRadioQuestionProps> = (
    {   title, 
        answer1, changeAnswer1,
        answer2, changeAnswer2,
        answer3, changeAnswer3
    }
    ) => {
  return (
    <div className='radioQuestion'>
        <div className='radioQuestion_left'>
            <p>{title}</p>
        </div>
        <div className='radioQuestion_right'>
            <p>Выберите один ответ:</p>
            <div className='radioQuestion__btn'>
                <input type="radio" id="answer1" name='answer'
                value="answer1" 
                onChange={changeAnswer1}/>
                <label htmlFor='answer1'>{answer1}</label>
            </div>
            <div className='radioQuestion__btn'>
                <input type="radio" id="answer2" name='answer'
                value="" 
                onChange={changeAnswer2}/>
                <label htmlFor='answer2'>{answer2}</label>
            </div>
            <div className='radioQuestion__btn'>
                <input type="radio" id="answer3" name='answer'
                value="answer3" 
                onChange={changeAnswer3}/>
                <label htmlFor='answer3'>{answer3}</label>
            </div>
        </div>
    </div>
  );
};

export default RadioQuestion;

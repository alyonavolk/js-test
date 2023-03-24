import * as React from 'react';
import './checkBoxQuestion.scss';

interface IChekBoxQuestionProps {
    title: string;
    answer1: string;
    changeAnswer1: React.ChangeEventHandler<HTMLInputElement> | undefined;
    checked1: boolean | undefined;
    answer2: string;
    changeAnswer2: React.ChangeEventHandler<HTMLInputElement> | undefined;
    checked2: boolean | undefined;
    answer3: string;
    changeAnswer3: React.ChangeEventHandler<HTMLInputElement> | undefined;
    checked3: boolean | undefined;
    changeAnswer4: React.ChangeEventHandler<HTMLInputElement> | undefined;
    checked4: boolean | undefined;
    changeAnswer5: React.ChangeEventHandler<HTMLInputElement> | undefined;
    checked5: boolean | undefined;
    five?: boolean;
}

const CheckBoxQuestion: React.FC<IChekBoxQuestionProps> = (
    {
        title,
        changeAnswer1, answer1, checked1,
        changeAnswer2, answer2, checked2,
        changeAnswer3, answer3, checked3,
        changeAnswer4, checked4, 
        changeAnswer5, checked5,
        five = false
    }
    ) => {
  return (
    <div className='chekboxQuestion'>
        <div className='chekboxQuestion_left'>
            <p>{title}</p>
        </div>
        <div className='chekboxQuestion_right'>
            <p>Выберите несколько вариантов:</p>
            <div className='chekboxQuestion__btn'>
                <input type="checkbox" id="answer1" 
                value="answer1" checked={checked1}
                onChange={changeAnswer1}/>
                <label htmlFor='answer1'>{answer1}</label>
            </div>
            <div className='chekboxQuestion__btn'>
                <input type="checkbox" id="answer2" 
                value="answer2" checked={checked2}
                onChange={changeAnswer2}/>
                <label htmlFor='answer2'>{answer2}</label>
            </div>
            <div className='chekboxQuestion__btn'>
                <input type="checkbox" id="answer3" 
                value="answer3" checked={checked3}
                onChange={changeAnswer3}/>
                <label htmlFor='answer3'>{answer3}</label>
            </div>
            {five && <>
                <div className='chekboxQuestion__btn'>
                    <input type="checkbox" id="answer4"
                    value="answer4" checked={checked4}
                    onChange={changeAnswer4}/>
                    <label htmlFor='answer4'>Объекты</label>
                </div>
                <div className='chekboxQuestion__btn'>
                    <input type="checkbox" id="answer5"
                    value="answer5" checked={checked5}
                    onChange={changeAnswer5}/>
                    <label htmlFor='answer5'>Методы</label>
                </div>
            </>}
        </div>
    </div>
  );
};

export default CheckBoxQuestion;

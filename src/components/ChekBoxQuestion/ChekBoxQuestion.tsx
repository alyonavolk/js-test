import * as React from 'react';
import './chekBoxQuestion.scss';

interface IChekBoxQuestionProps {
    title: string;
    answer1: string;
    changeAnswer1: React.ChangeEventHandler<HTMLInputElement> | undefined;
    answer2: string;
    changeAnswer2: React.ChangeEventHandler<HTMLInputElement> | undefined;
    answer3: string;
    changeAnswer3: React.ChangeEventHandler<HTMLInputElement> | undefined;
    changeAnswer4: React.ChangeEventHandler<HTMLInputElement> | undefined;
    changeAnswer5: React.ChangeEventHandler<HTMLInputElement> | undefined;
    five?: boolean;
}

const ChekBoxQuestion: React.FC<IChekBoxQuestionProps> = (
    {
        title,
        changeAnswer1, answer1,
        changeAnswer2, answer2,
        changeAnswer3, answer3,
        changeAnswer4, changeAnswer5, 
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
                value="answer1" 
                onChange={changeAnswer1}/>
                <label htmlFor='answer1'>{answer1}</label>
            </div>
            <div className='chekboxQuestion__btn'>
                <input type="checkbox" id="answer2" 
                value="answer2" 
                onChange={changeAnswer2}/>
                <label htmlFor='answer2'>{answer2}</label>
            </div>
            <div className='chekboxQuestion__btn'>
                <input type="checkbox" id="answer3" 
                value="answer3" 
                onChange={changeAnswer3}/>
                <label htmlFor='answer3'>{answer3}</label>
            </div>
            {five && <>
                <div className='chekboxQuestion__btn'>
                    <input type="checkbox" id="answer4"
                    value="answer4" 
                    onChange={changeAnswer4}/>
                    <label htmlFor='answer4'>Объекты</label>
                </div>
                <div className='chekboxQuestion__btn'>
                    <input type="checkbox" id="answer5"
                    value="answer5" 
                    onChange={changeAnswer5}/>
                    <label htmlFor='answer5'>Методы</label>
                </div>
            </>}
        </div>
    </div>
  );
};

export default ChekBoxQuestion;

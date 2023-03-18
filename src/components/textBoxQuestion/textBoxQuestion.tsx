import * as React from 'react';
import './textBoxQuestion.scss';

interface ITextBoxQuestionProps {
  title: string;
  condition: string;
  placeholder: string;
  value: string | number | readonly string[] | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}


const TextBoxQuestion: React.FC<ITextBoxQuestionProps> = ({title, condition, placeholder, value,onChange}) => {
  return (
    <div className='textBoxQuestion'>
        <div className='textBoxQuestion_left'>
            <p>{title}</p>
            <div className='textBoxQuestion__code'>
              <p>{condition}</p>
            </div>
        </div>
        <div className='textBoxQuestion_right'>
          <p>Заполните:</p>
          <input className='textBoxQuestion__input'
            placeholder={placeholder}
            value={value} onChange={onChange}
            />
        </div>
    </div>
  );
};

export default TextBoxQuestion;

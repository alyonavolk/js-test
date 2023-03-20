import * as React from 'react';
import './definitionQuestion.scss';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../ROUTES';

interface IDefinitionQuestionProps {
    value: string | number | readonly string[] | undefined;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const DefinitionQuestion: React.FC<IDefinitionQuestionProps> = ({value, onChange}) => {
  return (
    <>
    <div className='definitionQuestion'>
        <div className='definitionQuestion_left'>
            <p>Дано из понятий из ООП, вставьте пропущенное слово.</p>
        </div>
        <div className='definitionQuestion_right'>
          <p>В объектно-ориентированном программировании
            <input className='definitionQuestion__input'
                placeholder='...'
                value={value} onChange={onChange}
            />
             – это расширяемый шаблон кода для создания объектов, который устанавливает в них начальные значения (свойства) и реализацию поведения (методы). </p>
        </div>
    </div>
    <NavLink className='definitionQuestion__link' exact to={ROUTES.results}>Закончить</NavLink>
    </>
  );
};

export default DefinitionQuestion;

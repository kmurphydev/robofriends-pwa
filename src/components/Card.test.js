import { isTaggedTemplateExpression } from '@babel/types';
import { shallow} from 'enzyme'; 
import React from 'react';

import Card from './Card';

it('expect rendered Card component', ()=>{
    expect.assertions(1);
    expect(shallow(<Card/>)).toMatchSnapshot()
})

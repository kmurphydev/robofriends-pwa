import { isTaggedTemplateExpression } from '@babel/types';
import { shallow} from 'enzyme'; 
import React from 'react';

import CardList from './CardList';


it('expect rendered CardList component', ()=>{

    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'JohnJohn',
            email: 'john@gmail.com'
        }
    ];

    expect.assertions(1);
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot()
})
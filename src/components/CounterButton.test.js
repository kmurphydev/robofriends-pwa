import { isTaggedTemplateExpression } from '@babel/types';
import { shallow} from 'enzyme'; 
import React from 'react';

import CounterButton from './CounterButton';


it('expect rendered CounterButton component', ()=>{

    const mockColor = 'red'

    expect.assertions(1);
    expect(shallow(<CounterButton color={mockColor}/>)).toMatchSnapshot()
})

it('correctly increments counter', () =>{
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton color={mockColor}/>);

    expect.assertions(4);

    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count:2});
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({count:3});
    wrapper.find('[id="counter"]').simulate('keypress');
    expect(wrapper.state()).toEqual({count:3});

    expect(wrapper.props().color).toEqual('red');
})
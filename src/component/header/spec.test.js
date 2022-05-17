import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';
import { findByTestAttr } from '../../../utils';

const setUp = (props={}) =>{
    const component = shallow(<Header {...props}/>);
    return component;
}



describe('Header component', () =>{
    let component;
    beforeEach(() =>{
        component = setUp();
    })

    it('should render without errors', () =>{
        const wrapper = findByTestAttr(component, 'headerComponent');
        console.log(wrapper.debug());
        expect(wrapper.length).toBe(1);
    });

     it('should render a logo', () =>{
        const wrapper = findByTestAttr(component, 'logoIMG');
        console.log(wrapper.debug());
        expect(wrapper.length).toBe(1);
    });
})

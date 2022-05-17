import React from 'react';
import {shallow} from 'enzyme';

import Headline from './index';
import { findByTestAttr, checkProps } from '../../../utils';


const setUp = (props={})=>{
    const component = shallow(<Headline {...props}/>);
    return component;
}

describe('Headline component',()=>{

    describe('Checking propTyoes', () =>{
        it('It should not throw a warning', ()=>{
            const expectedProps = {
                header: 'Test Header', 
                description: 'Test description', 
                tempArr: [{
                    fName:'Mb',
                    lName:'bc',
                    email:'test123@gmail.com', 
                    age:25, 
                    onlineStatus: false
                }]
            }

            const propsErr = checkProps(Headline, expectedProps);
            expect(propsErr).toBe(undefined);
        })
    })

    describe('Have props', () =>{
        let wrapper;

        beforeEach(() =>{
            const props={
                header: 'Test Header',
                desc: 'Test Desc'
            };
            wrapper = setUp(props);
        });

        it('should render without any error', ()=>{
            const component = findByTestAttr(wrapper, 'headlineComponent');
            expect(component.length).toBe(1)
        })

         it('should render h1', ()=>{
            const component = findByTestAttr(wrapper, 'header');
            expect(component.length).toBe(1)
        })

        it('should render description', ()=>{
            const component = findByTestAttr(wrapper, 'description');
            expect(component.length).toBe(1)
        })
    });

    describe('Have No props', () =>{

        let wrapper;
         beforeEach(() =>{
            wrapper = setUp();
        });

        it('should not render', ()=>{
            const component = findByTestAttr(wrapper, 'headlineComponent');
            expect(component.length).toBe(0)
        })
        
    })
});
import Enzyme from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';

import EnzymeAdapter from 'enzyme/build/EnzymeAdapter';

Enzyme.configure({
    adapter: new Adapter(),
    disableLifecycleMethods: true
});
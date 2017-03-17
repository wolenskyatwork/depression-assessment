import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import Btn from './index';

describe('<Btn />', () => {

  it('renders correctly', () => {
    const wrapper = shallow(<Btn />);
    expect(wrapper).to.have.lengthOf(1);
  });

  it('creates a button given test props', () => {
    const text = 'Let\'s get started!';
    const wrapper = mount(<Btn text={ text } />);

    expect(wrapper, 'button not found').to.have.lengthOf(1);
    expect(wrapper.text()).to.equal(text);
  });

  it('adds additional classes', () => {
    const text = 'Let\'s get started!';
    const wrapper = shallow(<Btn text={ text } classes='btn--dismiss'/>);

    expect(wrapper.hasClass('btn--dismiss')).to.equal(true);
  });
});

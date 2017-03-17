import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import Homepage from './index';


describe('<Homepage />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Homepage />);
    expect(wrapper).to.have.lengthOf(1);
  });

  it('has a start quiz button', () => {
    const wrapper = mount(<Homepage />);
    const button = wrapper.find('.btn');

    expect(wrapper.children(), 'child contents not found').to.not.be.empty;
    expect(button, 'button not found').to.have.lengthOf(1);
  });
});

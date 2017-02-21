import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Field from './index';


describe('<Field />', () => {
  const wrapper = mount(<Field />);

  it('renders correctly', () => {
    expect(wrapper).to.have.lengthOf(1);
  });
});

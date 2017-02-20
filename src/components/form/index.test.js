import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Form from './index';


describe('<Form />', () => {
  const wrapper = mount(<Form />);

  it('renders correctly', () => {
    expect(wrapper).to.have.lengthOf(1);
  });

  it('has at least one input field', () => {
    const input = wrapper.find('.input');

    expect(wrapper.children(), 'child contents not found').to.not.be.empty;
    expect(input, 'no input field components found').to.have.length.of.at.least(1);
  });

  it('has a name field', () => {

  });

  it('has an email field', () => {
  });

  it('has a submit button', () => {
  });

});

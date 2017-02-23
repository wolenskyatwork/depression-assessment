import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Form from './index';
import FORM from '../signup/form';

describe('<Form />', () => {
  const wrapper = mount(<Form inputs={ FORM } />);

  it('renders correctly', () => {
    expect(wrapper).to.have.lengthOf(1);
  });

  it('has at least one input field', () => {
    const field = wrapper.find('.field');

    expect(wrapper.children(), 'child contents not found').to.not.be.empty;
    expect(field, 'no input field components found').to.have.length.of.at.least(1);
  });

  it('has a password field', () => {
    const password = wrapper.find('#password');

    expect(password).to.have.lengthOf(1);
  });

  it('has an email field', () => {
    const email = wrapper.find('#email');

    expect(email).to.have.lengthOf(1);
  });

  it('has a submit button', () => {
    const submit = wrapper.find('button');

    expect(submit).to.have.lengthOf(1);
  });
});

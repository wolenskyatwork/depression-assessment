import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Notification from './index';

describe('<Notification />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Notification />);
    expect(wrapper).to.have.lengthOf(1);
  });
});

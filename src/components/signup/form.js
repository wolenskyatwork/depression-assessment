const FORM = {
  email: {
    name: 'email',
    regex: /\S+@\w+\.\w{1,}/,
    message: 'Please provide a valid email.',
    defaultValue: '',
  },
  password: {
    name: 'password',
    regex: /\S{5,}/,
    message: 'Please provide a password with at least 5 characters',
    defaultValue: '',
  }
};

export default FORM;

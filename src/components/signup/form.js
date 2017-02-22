const VALIDATION = [
  {
    name: 'email',
    regex: /\S+@\w+\.\w{1,}/,
    message: 'Please provide a valid email.',
    defaultValue: '',
  },
  {
    name: 'password',
    regex: /\S{5,}/,
    message: 'Please provide a password with at least 5 characters',
    defaultValue: '',
  }
];

export default VALIDATION;

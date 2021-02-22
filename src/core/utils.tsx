export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';

  return '';
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';
  if (password.length <= 5) return 'Password must be at least 6 characters.'
  return '';
};

export const confirmPasswordValidator = (
  password: string,
  confirmPassword: string
) => {
  if (
    !password ||
    !confirmPassword ||
    password !== confirmPassword
  )
    return 'Passwords do not match';
  return '';
};

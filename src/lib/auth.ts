'use server';

// Define a simple FormState type for feedback
interface FormState {
  message: string | null;
  errors?: {
    email?: string[];
    password?: string[];
    confirmPassword?: string[]; // Add error for confirm password
  };
}

export async function login(prevState: FormState | undefined, formData: FormData): Promise<FormState> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // Basic validation
  if (!email || !email.includes('@')) {
    return {
      message: 'Login failed: Invalid email format.',
      errors: { email: ['Please enter a valid email address.'] },
    };
  }
  if (!password || password.length < 6) {
    return {
      message: 'Login failed: Password must be at least 6 characters.',
      errors: { password: ['Password must be at least 6 characters long.'] },
    };
  }

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (email === 'test@example.com' && password === 'password') {
    return { message: 'Login successful!' };
  } else {
    return { message: 'Login failed: Invalid credentials.' };
  }
}

export async function signup(prevState: FormState | undefined, formData: FormData): Promise<FormState> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string; // Get confirm password

  // Validate confirm password
  if (!confirmPassword) {
    return { message: 'Signup failed: Please confirm your password.', errors: { confirmPassword: ['Please confirm your password.'] } };
  } else if (password !== confirmPassword) {
    return { message: 'Signup failed: Passwords do not match.', errors: { confirmPassword: ['Passwords do not match.'] } };
  }
  
  const errors: string[] = [];

  // Basic validation
  if (!email || !email.includes('@')) {
    return { message: 'Signup failed: Invalid email format.', errors: { email: ['Please enter a valid email address.'] } };
  }
  
  if (!password || password.length < 6) {
    errors.push('Password must be at least 6 characters long.');
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Password must contain at least one special character.');
  }
  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number.');
  }

  if (errors.length > 0) {
    return { message: 'Signup failed: Please meet password requirements.', errors: { password: errors } };
  }

  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (email === 'new@example.com' && password === 'newpassword') {
    return { message: 'Account created successfully! Please log in.' };
  } else if (email === 'test@example.com') {
    return { message: 'Signup failed: Email already exists.', errors: { email: ['This email is already registered.'] } };
  } else {
    return { message: 'Signup failed: Something went wrong.' };
  }
}
// app/user/login/page.tsx
"use client";

import { useEffect, useState, useCallback } from 'react'; // Import useCallback
import { motion, AnimatePresence } from 'framer-motion';
import AmbientBackground from '@/components/AmbientBackground';
import { SubmitButton } from '@/components/submitButton';
import { useActionState } from 'react';
import { login, signup } from '@/lib/auth'; // Assuming this file will be created

interface FormState {
  message: string | null;
  errors?: {
    email?: string[];
    password?: string[];
    confirmPassword?: string[]; // Add error for confirm password
  };
}

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [passwordInput, setPasswordInput] = useState(''); // State to track password input
  const [passwordRequirementsMet, setPasswordRequirementsMet] = useState({
    minLength: false,
    hasSpecialChar: false,
    hasNumber: false,
  });

  const [loginState, loginAction] = useActionState<FormState, FormData>(login, {
    message: null,
  });
  const [signupState, signupAction] = useActionState<FormState, FormData>(signup, {
    message: null,
  });

  const currentState = isLogin ? loginState : signupState;

  useEffect(() => {
    if (currentState.message) {
      const timer = setTimeout(() => {
        // Clear message after some time, or based on user interaction
        // For simplicity, we'll just let it stay for now or clear on form switch
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentState.message]);

  // Function to check password requirements dynamically
  const checkPasswordRequirements = useCallback((password: string) => {
    setPasswordRequirementsMet({
      minLength: password.length >= 6,
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      hasNumber: /[0-9]/.test(password),
    });
  }, []);

  // Effect to manage password input and requirements when switching forms
  useEffect(() => {
    // Clear password input and reset requirements when switching form type
    setPasswordInput('');
    setPasswordRequirementsMet({
      minLength: false,
      hasSpecialChar: false,
      hasNumber: false,
    });
  }, [isLogin]); // Dependency on isLogin to trigger reset

  // Function to handle toggling between login and signup forms
  const handleToggleForm = useCallback(() => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
    // Reset password related states when switching forms
    setPasswordInput('');
    setPasswordRequirementsMet({
      minLength: false,
      hasSpecialChar: false,
      hasNumber: false,
    });
  }, []);
  return (
    <AmbientBackground>
      <div className="flex flex-col items-center justify-center min-h-screen w-full py-12">
        <motion.div
          layout
          className="w-[340px] mt-4 p-8 rounded-2xl border text-center flex flex-col bg-[var(--card)]/80 border-[var(--border)] text-[var(--card-foreground)] shadow-2xl backdrop-blur-xl"
          initial={{ opacity: 0, scale: 0.85, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1, y: 10 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <img src="/images/icons/logo.avif" alt="Logo" className='w-10 h-10 self-center mb-4' />
          <h1 className="text-xl font-bold tracking-tight mb-2 website-font text-primary">
            {isLogin ? 'Login' : 'Create Account'}
          </h1>
          <p className="text-sm text-[var(--muted-foreground)] mb-6">
            {isLogin ? 'Welcome back!' : 'Join us today!'}
          </p>

          <form action={isLogin ? loginAction : signupAction} className="flex flex-col gap-4">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              />
              {currentState.errors?.email && currentState.errors.email.length > 0 && (
                <p className="text-red-500 text-xs mt-1 text-left">{currentState.errors.email[0]}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete={isLogin ? 'current-password' : 'new-password'}
                required
                value={passwordInput} // Controlled component
                onChange={(e) => {
                  const newPassword = e.target.value;
                  setPasswordInput(newPassword);
                  if (!isLogin) { // Only check requirements for signup form
                    checkPasswordRequirements(newPassword);
                  }
                }}
                className="w-full p-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              />
              {/* Display server-side password errors */}
              {currentState.errors?.password && currentState.errors.password.map((error, index) => (
                <p key={index} className="text-red-500 text-xs mt-1 text-left">{error}</p>
              ))}

              {/* Display client-side password requirements for signup */}
              {!isLogin && passwordInput.length > 0 && (
                <ul className="text-xs mt-1 text-left space-y-0.5">
                  <li className={passwordRequirementsMet.minLength ? 'text-green-500' : 'text-red-500'}>
                    {passwordRequirementsMet.minLength ? '✓' : '✗'} At least 6 characters
                  </li>
                  <li className={passwordRequirementsMet.hasSpecialChar ? 'text-green-500' : 'text-red-500'}>
                    {passwordRequirementsMet.hasSpecialChar ? '✓' : '✗'} At least one special character
                  </li>
                  <li className={passwordRequirementsMet.hasNumber ? 'text-green-500' : 'text-red-500'}>
                    {passwordRequirementsMet.hasNumber ? '✓' : '✗'} At least one number
                  </li>
                </ul>
              )}
            </div>
            {!isLogin && ( // Conditionally render confirm password for signup
              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  autoComplete="new-password" // Hint for password managers
                  required
                  className="w-full p-3 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                />
                {currentState.errors?.confirmPassword && currentState.errors.confirmPassword.length > 0 && (
                  <p className="text-red-500 text-xs mt-1 text-left">{currentState.errors.confirmPassword[0]}</p>
                )}
              </div>
            )}

            {currentState.message && (
              <p className={`text-sm ${currentState.message.includes('failed') ? 'text-red-500' : 'text-green-500'}`}>
                {currentState.message}
              </p>
            )}

            <SubmitButton>{isLogin ? 'Login' : 'Sign Up'}</SubmitButton>
          </form>
          
          <button type="button" onClick={handleToggleForm} className="mt-4 text-sm text-primary hover:underline">
            {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
          </button>
        </motion.div>
      </div>
    </AmbientBackground>
  );
}

import { useState } from 'react';
import { signUp } from '../../utilities/users-service';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import CategoryList from '../../components/CategoryList/CategoryList';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showCategory, setShowCategory] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  })

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value})
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      // We don't want to send the 'error' or the 
      // 'confirm state properties
      const newFormData = { ...formData };
      delete newFormData.error;
      delete newFormData.confirm;
      // The promise returned by the signUp service methods
      // will resolve to the user object included in the
      // payload of the JSON Web Token
      const user = await signUp(newFormData);
      await setUser(user);
      // history.push('/')
    } catch {
      // An error occurred
      setFormData({ error: 'Sign Up Failed - Try Again' });
    }
  }

  return (
    <main className="auth">
      {showCategory ? (
        <SignUpForm formData={formData} handleChange={handleChange} /> 
      ) : (
        <CategoryList />
      )}
    </main>
  );
}

/* <h1>AuthPage</h1>
      <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up': 'Log In'}</button>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />} */
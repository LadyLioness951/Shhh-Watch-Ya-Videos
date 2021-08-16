import { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
    error: '',
    categories: []
  })

  const history = useHistory();

  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value})
  }

  function handleCheckbox(evt) {
    let catCopy = [...formData.categories];
    if (catCopy.includes(evt.target.name)) {
      catCopy.splice(catCopy.indexOf(evt.target.name), 1);
    } else {
      catCopy.push(evt.target.name);
    };
    setFormData({...formData, categories: catCopy});
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
      console.log(user);
      await setUser(user);
      history.push('/home')
    } catch {
      // An error occurred
      setFormData({ error: 'Sign Up Failed - Try Again' });
    }
  }

  return (
    <main className="auth">
      {!showCategory ? (
        <SignUpForm formData={formData} handleChange={handleChange} setShowCategory={setShowCategory} /> 
      ) : (
        <CategoryList handleCheckbox={handleCheckbox} handleSubmit={handleSubmit} />
      )}
    </main>
  );
}

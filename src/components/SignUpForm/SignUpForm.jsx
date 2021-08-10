export default function SignUpForm({ formData, handleChange, setShowCategory }) {

  // Must override the render method
  // The render method takes the place of 
  // a function component, in that its job
  // is to return the UI as JSX
  const disable = formData.password !== formData.confirm;
  return (
    <div>
      <div className="form-container">
        <form onSubmit={() => setShowCategory(true)} autoComplete="off">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          &nbsp; &nbsp;
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <br /><br />
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          &nbsp; &nbsp;
          <label>Confirm</label>
          <input type="password" name="confirm" value={formData.confirm} onChange={handleChange} required />
          <br /><br />
          <button type="submit" disabled={disable}>Continue Sign Up</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{formData.error}</p>
    </div>
  );
}
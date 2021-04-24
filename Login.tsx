import React from  'react';

const Login = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  return <div className="login-box">
  <h1>Login</h1>
   <div className="textbox">

  <input  type="email" value={email} name="" placeholder="Email" onChange={(e: React.ChangeEvent<any>) => setEmail(e.target.value) } />

  </div>
  <div className="textbox">
  <input  type="password" value={password} name="password" placeholder="Password" 
  onChange={(e: React.ChangeEvent<any>) => setPassword(e.target.value) }
  />
 
  
  </div>
  <input type="submit" className="btn" />
  </div>
}

export default Login
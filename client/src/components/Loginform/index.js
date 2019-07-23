import React from 'react';
import './LoginForm.css';

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}


// export function TextArea(props) {
//   return (
//     <div className="form-group">
//       <textarea className="form-control" rows="20" {...props} />
//     </div>
//   );
// }

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn bg-warning text-dark">
      {props.children}
    </button>
  );
}




// function LoginForm(props) {
//   return(
//           // can change this to look however it needs to look
//               <div>
//                   <form>
//                       <div>
//                           <div className="login-form">
//                               <label className="form-label" htmlFor="username">Username</label>
//                               <input className="form-input"
//                                   type="text"
//                                   id="username"
//                                   name="username"
//                                   placeholder="Username"
//                                 //   value={this.state.username}
//                                 //   onChange={this.handleChange}
//                               />
//                           </div>
//                       </div>
//                       <div>
//                           <div className="login-form">
//                               <label className="form-label" htmlFor="password">Password</label>
//                               <input className="form-input"
//                                   name="username"
//                                   placeholder="Password"
//                                 //   value={this.state.password}
//                                 //   onChange={this.handleChange}
//                               />
//                           </div>
//                       </div>
//                       <div className="form-group">
//                           <button className="btn"
//                             // onClick={this.handleSubmit}
//                               type="submit">Login</button>
//                       </div>
//                   </form>
                  
//               </div>
//           )
//       }
    
// export default LoginForm;
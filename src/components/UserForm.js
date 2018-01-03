import React from 'react';

const UserForm = props => (
  <div style={{marginTop:'30px', marginLeft:'30px'}}>
    <div>
      <h2>{props.formLabel}</h2>
    </div>

    <div>
      <label>User Name</label><br/>
      <input type="text" value={props.userName} onChange={props.updateUserName} />
    </div><br/>

    <div>
      <label>Email</label><br/>
      <input type="email" value={props.email} onChange={props.updateEmail} />
    </div><br/>

    <div>
      <label>Password</label><br/>
      <input type="text" value={props.password} onChange={props.updatePassword} />
    </div><br/>

    {/* <div>
      <label>Account Id</label><br/>
      <input type="text" value={props.accountId} onChange={props.updateAccountId} />
    </div><br/> */}

    <div>
      <button type="submit" onClick={props.submitForm}>Submit</button>
    </div>
  </div>
);

export default UserForm;

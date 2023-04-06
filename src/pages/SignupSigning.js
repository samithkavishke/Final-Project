import React from "react";
import * as Components from './Components';
import "../Styles/SignupSigning.css";
import { Link } from 'react-router-dom';

export default function SignupSigning() {
  const [signIn, toggle] = React.useState(true);

  const handleSignUp = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const nic = document.getElementById('nic').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Perform validation on the input fields
    if (!name || !email || !address || !phoneNumber || !nic || !password || !confirmPassword) {
      alert('Please fill in all required fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    alert('Sign up successful!');
  }

  return(
    <Components.Container>
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Sign Up</Components.Title>
          <Components.Input type='text' id='name' placeholder='Name' />
          <Components.Input type='email' id='email' placeholder='Email' />
          <Components.Input type='text' id='address' placeholder='Address' />
          <Components.Input type='text' id='phone-number' placeholder='Phone Number' />
          <Components.Input type='text' id='nic' placeholder='NIC' />
          <Components.Input type='password' id='password' placeholder='Password' />
          <Components.Input type='password' id='confirm-password' placeholder='Confirm Password' />
          <Components.Button onClick={handleSignUp}>Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      <Components.SignInContainer signingIn={signIn}>
        <Components.Form>
          <Components.Title>Sign in</Components.Title>
          <Components.Input type='email' placeholder='Email' />
          <Components.Input type='password' placeholder='Password' />
          <Components.Anchor href='#'>Forgot Password?</Components.Anchor>
          <Link to='/about'>
            <Components.Button>Sign In</Components.Button>
          </Link>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>

          <Components.LeftOverlayPanel signingIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              If you are already sign in click here!
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>

          <Components.RightOverlayPanel signingIn={signIn}>
            <Components.Title>Hey!</Components.Title>
            <Components.Paragraph>
              If you aren't sign in before you can sign up here!
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton> 
          </Components.RightOverlayPanel>

        </Components.Overlay>
      </Components.OverlayContainer>

    </Components.Container>
  )
}

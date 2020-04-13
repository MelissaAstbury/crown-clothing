import React from "react";
import { withRouter } from "react-router-dom";

import FormInput from "../FormInput/formInput";
import CustomButton from "../CustomButton/custom-button";
import Spinner from "../Spinner/spinner";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loading: false,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "", loading: false });
      this.props.history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <>
        {this.state.loading && (
          <div className="full-screen-spinner">
            <Spinner />
          </div>
        )}
        <div className="sign-in">
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>

          <form onSubmit={this.handleSubmit}>
            <FormInput
              name="email"
              type="email"
              value={this.state.email}
              handleChange={this.handleChange}
              label="email"
              required
            />
            <FormInput
              name="password"
              type="password"
              value={this.state.password}
              handleChange={this.handleChange}
              label="password"
              required
            />
            <div className="buttons">
              <CustomButton type="submit">Sign In</CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                Sign in with Google
              </CustomButton>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(SignIn);

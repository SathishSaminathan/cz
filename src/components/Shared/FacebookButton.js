import React, {Component} from 'react';
import auth from '@react-native-firebase/auth';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import {connect} from 'react-redux';

import IconComponent from './IconComponent';
import {IconType, AppVariables} from '../../constants/AppConstants';
import {Colors} from '../../constants/ThemeConstants';
import {setUser, toggleLoading} from '../../store/actions';
import {storeData} from '../../helpers/utils';

class FacebookButton extends Component {
  handleLogin = async () => {
    const {toggleLoading} = this.props;
    // Attempt login with permissions
    toggleLoading(true);
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    auth()
      .signInWithCredential(facebookCredential)
      .then((res) => {
        // console.log('resss...', res.additionalUserInfo);
        this.props.setUser(res.additionalUserInfo);
        storeData(AppVariables.USER, res.additionalUserInfo);
        toggleLoading(false);
      });
  };
  render() {
    return (
      <IconComponent
        onPress={() => this.handleLogin()}
        type={IconType.FontAwesome}
        name="facebook"
        style={{color: Colors.textBlack, fontSize: 25}}
      />
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (value) => dispatch(setUser(value)),
    toggleLoading: (value) => dispatch(toggleLoading(value)),
  };
};
export default connect(null, mapDispatchToProps)(FacebookButton);

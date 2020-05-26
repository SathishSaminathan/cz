import React, {Component} from 'react';
import {View, Image, StatusBar, Alert} from 'react-native';
import {authorize, refresh, revoke} from 'react-native-app-auth';
import {Toast} from 'react-native-ui-lib';

import {heightPerc, widthPerc} from '../../helpers/styleHelper';
import {Colors} from '../../constants/ThemeConstants';
import {Images} from '../../assets/images';
import ButtonComponent from '../../components/Shared/ButtonComponent';
import PoweredBY from '../../components/Shared/PoweredBy';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {toggleLoading, setUser} from '../../store/actions';
import { AppAuthConfig } from '../../config/B2C';
import { storeData } from '../../helpers/utils';
import { AppVariables } from '../../constants/AppConstants';

class B2CLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   LoggedIn: false,
      accessToken: null,
      showToast: false,
    };
  }

  oauth = async () => {
    const {toggleLoading, setUser} = this.props;
    // toggleLoading(true);
    try {
      const authState = await authorize(AppAuthConfig);
      console.log('authorize....', authState);
      this.setState(
        {
          accessToken: authState.idToken,
        },
        () => {
          toggleLoading(false);
          setUser(authState);
          storeData(AppVariables.USER, authState);
          toggleLoading(false);
        },
      );
      // toggleLoading(false);
      // debugger;
      // this.animateState(
      //   {
      //     hasLoggedInOnce: true,
      //     accessToken: authState.idToken,
      //     accessTokenExpirationDate: authState.accessTokenExpirationDate,
      //     refreshToken: authState.refreshToken,
      //   },
      //   500
      // );
    } catch (error) {
      toggleLoading(false);
      // debugger
      //   Alert.alert('Failed to log in', error.message);
      this.setState({
        showToast: true,
      });
    }
  };

  refresh = async () => {
    // debugger;
    try {
      const authState = await refresh(config, {
        refreshToken: this.state.refreshToken,
      });

      // this.animateState({
      //   accessToken: authState.accessToken || this.state.accessToken,
      //   accessTokenExpirationDate:
      //     authState.accessTokenExpirationDate ||
      //     this.state.accessTokenExpirationDate,
      //   refreshToken: authState.refreshToken || this.state.refreshToken,
      // });
    } catch (error) {
      Alert.alert('Failed to refresh token', error.message);
    }
  };

  revoke = async () => {
    try {
      await revoke(AppAuthConfig, {
        tokenToRevoke: this.state.accessToken,
        sendClientId: true,
      });
      this.setState({
        accessToken: null,
      });
      // this.animateState({
      //   accessToken: "",
      //   accessTokenExpirationDate: "",
      //   refreshToken: "",
      // });
    } catch (error) {
      Alert.alert('Failed to revoke token', error.message);
    }
  };

  render() {
    const {
      oAuthUser: user,
      oAuthError: error,
      hostedUISignIn,
      facebookSignIn,
      googleSignIn,
      amazonSignIn,
      customProviderSignIn,
      signOut,
    } = this.props;
    const {accessToken} = this.state;
    return (
      <View style={{flex: 1}}>
        <Toast
          //   renderAttachment={this.renderAboveToast}
          visible={this.state.showToast}
          position={'bottom'}
          backgroundColor={Colors.themeBlack}
          message="Cancelled Login"
          //   icon={settingsIcon}
          onDismiss={() => this.setState({showToast: false})}
          autoDismiss={1500}
          //   showDismiss={showDismiss}
          //   action={{label: 'Undo', onPress: () => console.log('undo')}}
          //   showLoader={showLoader}
        />
        <StatusBar translucent backgroundColor={Colors.transparent} />
        <View
          style={{
            width: widthPerc(100),
            height: heightPerc(100),
            position: 'absolute',
            zIndex: -10,
          }}>
          <Image
            style={{flex: 1, width: undefined, height: undefined}}
            source={Images.signin}
          />
        </View>
        <LinearGradient
          colors={[Colors.themeBlack, '#f5f5f540', Colors.themeBlack]}
          style={{height: heightPerc(100)}}>
          <View
            style={{
              //   position: 'absolute',
              resizeMode: 'contain',
              width: 200,
              height: 200,
              alignSelf: 'center',
            }}>
            <Image
              source={Images.Logo}
              style={{flex: 1, width: undefined, height: undefined}}
              resizeMode="contain"
            />
          </View>
          <View
            style={{
              width: widthPerc(100),
              position: 'absolute',
              bottom: heightPerc(10),
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 20,
              }}>
              <View
                style={{
                  paddingVertical: 10,
                  width: '49%',
                  alignSelf: 'center',
                }}>
                <ButtonComponent
                  onPress={accessToken ? this.revoke : this.oauth}
                  // onPress={() => this.props.navigation.navigate('Home')}
                  // onPress={() => openLink('https://www.google.com')}
                  style={{
                    backgroundColor: Colors.darkGrey,
                    fontSize: 12,
                    borderColor: Colors.accordionBorderColor,
                    borderWidth: 1,
                    color: Colors.accordionBorderColor,
                  }}
                  borderRadius={50}>
                  {accessToken ? 'Log out' : 'Log in'}
                </ButtonComponent>
              </View>
            </View>
          </View>
          <View style={{width: widthPerc(80)}}>
            <PoweredBY />
          </View>
        </LinearGradient>
        <View
          style={{
            marginTop: heightPerc(30),
            borderRadius: 20,
            alignItems: 'center',
            paddingVertical: 20,
          }}></View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (value) => dispatch(setUser(value)),
    toggleLoading: (value) => dispatch(toggleLoading(value)),
  };
};
export default connect(null, mapDispatchToProps)(B2CLogin);

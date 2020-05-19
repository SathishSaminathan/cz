/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import AnimatedHideView from 'react-native-animated-hide-view';

import {MyStack} from './src/routes/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {TabNavigator} from './src/routes/TabNavigator';
import Loader from './src/components/Shared/Loader';
import {Colors} from './src/constants/ThemeConstants';
import {getData} from './src/helpers/utils';
import {AppVariables} from './src/constants/AppConstants';
import {setUser, toggleLoading} from './src/store/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      IsLoading: true,
      checkedForUser: false,
    };
  }

  componentDidMount() {
    // auth().onAuthStateChanged((res) => {
    //   if (res) {
    //     console.log('res._user', res._user && res._user);
    //     this.setState({
    //       user: res._user,
    //     });
    //   } else {
    //     this.setState({
    //       user: null,
    //     });
    //   }
    // });
    this.checkForUser();
    setTimeout(() => {
      this.setState({
        IsLoading: false,
      });
      this.props.toggleLoading(false);
    }, 1500);
  }

  checkForUser = async () => {
    const {setUser} = this.props;
    const user = await getData(AppVariables.USER);
    if (user) {
      setUser(user);
    }
  };

  render() {
    const {user, IsLoading} = this.state;
    const {current_user, isLoading} = this.props;
    return (
      <>
        <StatusBar backgroundColor={Colors.white} />
        <AnimatedHideView visible={isLoading} style={{flex: 1}} unmountOnHide>
          <Loader />
        </AnimatedHideView>
        {!isLoading && (
          <NavigationContainer>
            {current_user ? <TabNavigator {...this.props} /> : <MyStack />}
          </NavigationContainer>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

const mapStateToProps = ({user: {current_user, isLoading}}) => {
  return {
    current_user,
    isLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (value) => dispatch(setUser(value)),
    toggleLoading: (value) => dispatch(toggleLoading(value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

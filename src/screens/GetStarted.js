import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import VideoComponent from '../components/Shared/VideoComponent';
import {Colors} from '../constants/ThemeConstants';
import {widthPerc, heightPerc} from '../helpers/styleHelper';
import {Images} from '../assets/images';
import ButtonComponent from '../components/Shared/ButtonComponent';
import TextComponent from '../components/Shared/TextComponent';
import PoweredBY from '../components/Shared/PoweredBy';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

export default class GetStarted extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <StatusBar backgroundColor={Colors.transparent} translucent />
        <VideoComponent
          source={require('../assets/videos/GetStartedMute.mp4')} // Can be a URL or a local file.
          // ref={ref => {
          //   this.player = ref;
          // }} // Store reference
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onError={this.videoError} // Callback when video cannot be loaded
          style={styles.backgroundVideo}
          //   overley
        />
        <View style={styles.container}>
          <View style={{flex: 4}}>
            <View style={{width: '100%', height: '100%'}}>
              <Image
                source={Images.Logo}
                style={{flex: 1, width: undefined, height: undefined}}
                resizeMode="contain"
              />
            </View>
          </View>
          <View style={{flex: 3}}>
            <View style={{width: '100%'}}>
              <ButtonComponent
                onPress={() => this.props.navigation.navigate('Login')}
                style={{
                  backgroundColor: Colors.darkGrey,
                  fontSize: 12,
                  borderColor: Colors.accordionBorderColor,
                  borderWidth: 1,
                  color:Colors.accordionBorderColor
                }}
                borderRadius={40}>
                Get Started
              </ButtonComponent>
            </View>
          </View>
          <View style={{flex: 3}}>
            <PoweredBY />
          </View>
        </View>
      </View>
    );
  }
}

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    height: viewportHeight,
    ...StyleSheet.absoluteFill,
  },
  container: {
    width: widthPerc(60),
    height: heightPerc(30),
    // backgroundColor: 'red',
    alignSelf: 'center',
  },
});

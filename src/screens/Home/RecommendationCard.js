import React, {Component} from 'react';
import {Text, View, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {Colors} from '../../constants/ThemeConstants';
import HeaderComponent from '../../components/Shared/HeaderComponent';
import {ReadmoreComponent} from '../../components/Shared/ReadmoreComponent';
import ImageComponent from '../../components/Shared/ImageComponent';
import {Images} from '../../assets/images';
import TextComponent from '../../components/Shared/TextComponent';
import {FontType} from '../../constants/AppConstants';
import ButtonComponent from '../../components/Shared/ButtonComponent';
import Ripple from 'react-native-material-ripple';

export default class RecommendationCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationValue: new Animated.Value(0),
      opacityValue: new Animated.Value(1),
      viewState: true,
    };
  }

  toggleAnimation = () => {
    if (this.state.viewState == true) {
      Animated.timing(this.state.animationValue, {
        toValue: 350,
        duration: 300,
      }).start(() => {
        this.setState({viewState: false});
      });
      Animated.timing(this.state.opacityValue, {
        toValue: 0,
        duration: 300,
      }).start(() => {
        this.setState({viewState: false});
      });
    } else {
      Animated.timing(this.state.animationValue, {
        toValue: 0,
        duration: 300,
      }).start(this.setState({viewState: true}));
      Animated.timing(this.state.opacityValue, {
        toValue: 1,
        duration: 300,
      }).start(this.setState({viewState: true}));
    }
  };
  render() {
    const height = this.state.animationValue;
    const {opacityValue} = this.state;
    const opacity = opacityValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1],
    });
    const {name, image} = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.white,
          borderRadius: 5,
          overflow: 'hidden',
        }}>
        <Ripple onPress={this.toggleAnimation}>
          <View>
            <View style={{height: 200}}>
              <ImageComponent source={image} />
            </View>
            <Animated.View
              style={{
                position: 'absolute',
                height: 200,
                width: '100%',
                bottom: 0,
                top: 0,
                opacity,
              }}>
              <LinearGradient
                colors={['#f5f5f540', '#f5f5f540', '#ffffffab']}
                style={{flex: 1}}>
                <View
                  style={{
                    width: '70%',
                    position: 'absolute',
                    bottom: '10%',
                    alignSelf: 'center',
                  }}>
                  <ButtonComponent
                    borderRadius={50}
                    style={{
                      backgroundColor: Colors.white,
                      fontSize: 18,
                      color: Colors.themeBlack,
                      fontFamily: 'Proxima Nova Condensed Semibold',
                    }}>
                    {name}
                  </ButtonComponent>
                </View>
              </LinearGradient>
            </Animated.View>
          </View>
        </Ripple>
        <Animated.View style={{paddingHorizontal: 15, height: height}}>
          <TextComponent
            style={{fontSize: 18, textAlign: 'center', paddingVertical: 10}}
            type={FontType.SEMIBOLD}>
            {name}
          </TextComponent>
          <ReadmoreComponent
            lines={5}
            text="Stateside Kitchen is open and offering delivery, carry out, curbside pick-up options for breakfast, lunch and dinner! We are here to feed the guests and residences of Downtown Nashville. Our team is committed to the health and safety of all guests. We are prepared to take your orders and payment over the phone 615.622.0500"
          />
          <View style={{paddingTop: 20}}>
            <View style={{flexDirection: 'row'}}>
              <TextComponent type={FontType.BOLD}>Breakfast: </TextComponent>
              <TextComponent>7:00AM-11:00AM</TextComponent>
            </View>
            <View style={{flexDirection: 'row', paddingVertical: 10}}>
              <TextComponent type={FontType.BOLD}>Lunch/Dinner: </TextComponent>
              <TextComponent>Sunday- Thursday 11:00AM - 9:00PM</TextComponent>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextComponent type={FontType.BOLD}>Lunch/Dinner: </TextComponent>
              <TextComponent>Friday + Saturday 11:00AM - 10:00PM</TextComponent>
            </View>
          </View>
          <View style={{paddingVertical: 10}}>
            <ButtonComponent
              style={{
                backgroundColor: Colors.white,
                fontSize: 18,
                color: Colors.themeBlack,
                borderWidth: 1,
                borderColor: Colors.themeBlack,
                marginBottom: 5,
                elevation: 1,
              }}>
              MENUS
            </ButtonComponent>
            <ButtonComponent
              style={{
                backgroundColor: Colors.themeBlack,
                fontSize: 18,
                color: Colors.white,
                elevation: 1,
              }}>
              RESERVATIONS
            </ButtonComponent>
          </View>
        </Animated.View>
      </View>
    );
  }
}

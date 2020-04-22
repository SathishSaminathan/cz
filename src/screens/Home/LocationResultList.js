import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

import {Colors} from '../../constants/ThemeConstants';
import TextComponent from '../../components/Shared/TextComponent';
import IconComponent from '../../components/Shared/IconComponent';
import {IconType, FontType, Stays} from '../../constants/AppConstants';
import StaysCardItem from '../Stays/StaysCardItem';
import {Images} from '../../assets/images';
import PoweredBY from '../../components/Shared/PoweredBy';

const SECTIONS = [
  {
    title: 'Room 1, Adults 2, Children 0',
    content: 'Lorem ipsum...',
  },
];

const data = [
  {
    name: 'Bronze King',
    location: '210 4th Avenue North Nashville TN 37219',
    totalReviews: '20 Reviews',
    price: '$ 125',
    prePrice: '$100',
    off: '55',
    reviewValue: 4,
    image: Images.reviewReservatiob,
  },
  {
    name: 'Silver Queen',
    location: '210 4th Avenue North Nashville TN 37219',
    totalReviews: '20 Reviews',
    price: '$ 125',
    prePrice: '$100',
    off: '55',
    reviewValue: 4,
    image: Images.rm2,
  },
  {
    name: 'Silver King',
    location: '210 4th Avenue North Nashville TN 37219',
    totalReviews: '20 Reviews',
    price: '$ 125',
    prePrice: '$100',
    off: '55',
    reviewValue: 4,
    image: Images.rm3,
  },
  {
    name: 'Silver Queen Double',
    location: '210 4th Avenue North Nashville TN 37219',
    totalReviews: '20 Reviews',
    price: '$ 125',
    prePrice: '$100',
    off: '55',
    reviewValue: 4,
    image: Images.rm2,
  },
  {
    name: 'Gold Queen Studio',
    location: '210 4th Avenue North Nashville TN 37219',
    totalReviews: '20 Reviews',
    price: '$ 125',
    prePrice: '$100',
    off: '55',
    reviewValue: 4,
    image: Images.reviewReservatiob,
  },
];

export default class LocationResultList extends Component {
  state = {
    activeSections: [],
  };

  _renderHeader = (section) => {
    const opened = this.state.activeSections.length;
    return (
      <View
        style={[styles.header, opened && {borderBottomColor: Colors.white}]}>
        <View style={{flex: 9}}>
          <>
            <TextComponent style={styles.headerText}>
              {section.title}
            </TextComponent>
            {!opened && (
              <View
                style={{
                  height: '100%',
                  width: 1,
                  position: 'absolute',
                  backgroundColor: Colors.dividerColor,
                  right: 0,
                }}
              />
            )}
          </>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <IconComponent
            type={IconType.AntDesign}
            name={!opened ? 'down' : 'up'}
            style={{fontSize: 15}}></IconComponent>
        </View>
      </View>
    );
  };

  _renderContent = (section) => {
    let data = [
      {name: 'Room', value: 1},
      {name: 'Adults', value: 2},
      {name: 'Children', value: 0},
    ];
    let totalLength = data.length;
    if (this.state.activeSections.length) {
      return data.map((data, i) => (
        <View
          style={[
            styles.content,
            {
              borderBottomColor:
                i + 1 === totalLength
                  ? Colors.accordionBorderColor
                  : Colors.white,
            },
          ]}
          key={i}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              borderBottomWidth: 1,
              borderBottomColor: Colors.accDividerColor,
              paddingBottom: 10,
              paddingHorizontal: 5,
            }}>
            <View style={{flex: 7, justifyContent: 'center'}}>
              <TextComponent style={{fontSize: 14}} type={FontType.BOLD}>
                {data.name}
              </TextComponent>
            </View>
            <View
              style={{
                fontSize: 15,
                flex: 3,
                backgroundColor: Colors.white,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: Colors.accordionBorderColor,
                  borderRadius: 50,
                  overflow: 'hidden',
                }}>
                <TouchableNativeFeedback>
                  <View style={{backgroundColor: Colors.white, padding: 5}}>
                    <IconComponent
                      type={IconType.AntDesign}
                      name={'minus'}
                      style={{}}></IconComponent>
                  </View>
                </TouchableNativeFeedback>
              </View>
              <TextComponent>{data.value}</TextComponent>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: Colors.accordionBorderColor,
                  borderRadius: 50,
                  overflow: 'hidden',
                }}>
                <TouchableNativeFeedback>
                  <View style={{backgroundColor: Colors.white, padding: 5}}>
                    <IconComponent
                      type={IconType.AntDesign}
                      name={'plus'}
                      style={{}}></IconComponent>
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
          </View>
        </View>
      ));
    }
  };

  _updateSections = (activeSections) => {
    this.setState({activeSections});
  };

  renderItems = () => {
    return data.map((data, i) => (
      <StaysCardItem
        data={data}
        type={Stays.UPCOMING}
        key={i}
        {...this.props}
      />
    ));
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView
          style={{
            backgroundColor: Colors.staysBackground,
            flex: 1,
            padding: 10,
            //   paddingVertical: 5,
          }}>
          <Accordion
            sections={SECTIONS}
            activeSections={this.state.activeSections}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
          />
          <View style={{flex: 1, paddingTop: 10}}>{this.renderItems()}</View>
          <View style={{paddingBottom: 10}}>
            <PoweredBY />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: Colors.white,
    // padding: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    borderColor: Colors.accordionBorderColor,
    borderWidth: 1,
    overflow: 'hidden',
  },
  headerText: {
    textAlign: 'left',
    fontSize: 13,
    paddingVertical: 8,
    paddingLeft: 10,
  },
  content: {
    padding: 10,
    backgroundColor: Colors.white,
    borderColor: Colors.accordionBorderColor,
    borderWidth: 1,
    borderTopWidth: 0,
    flexDirection: 'row',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});

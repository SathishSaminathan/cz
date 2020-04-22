import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

import {Colors} from '../../constants/ThemeConstants';
import TextComponent from '../../components/Shared/TextComponent';
import IconComponent from '../../components/Shared/IconComponent';
import {IconType, FontType, Stays} from '../../constants/AppConstants';
import StaysCardItem from '../Stays/StaysCardItem';
import {Images} from '../../assets/images';
import PoweredBY from '../../components/Shared/PoweredBy';
import HeaderComponent from '../../components/Shared/HeaderComponent';

const SECTIONS = [
  {
    title: 'Stay Notifications',
    lists: [
      {
        content: 'Review your last stay with Dream Nashville',
        time: 'March, 21 2020',
        name: 'B',
        color: Colors.blue,
      },
      {
        content: 'You have booked a room in Bronze King',
        time: 'March, 21 2020',
        name: 'T',
        color: Colors.orange,
      },
      {
        content: 'Parlour Bar offers a great discount in Cocktail classics',
        time: 'March, 21 2020',
        name: 'B',
      },
    ],
  },
  {
    title: 'Rideshare Notifications',
    lists: [
      {
        content:
          'Rates have dropped at 210 4th Ave North Dream Nashvile. Request an Uber ride.',
        time: 'March, 21 2020',
        name: 'T',
      },
      {
        content: 'Track your Uber Ride',
        time: 'March, 21 2020',
        name: 'B',
      },
      {
        content: 'Your driver name is Anne',
        time: 'March, 21 2020',
        name: 'B',
      },
    ],
  },
  {
    title: 'OpenTable Notifications',
    lists: [
      {
        content: 'A table is available at Stateside Kitchen',
        time: 'March, 21 2020',
        name: 'T',
      },
      {
        content:
          'Your table reservation on 5th May is confirmed with Natura Nashville',
        time: 'March, 21 2020',
        name: 'B',
      },
    ],
  },
  {
    title: 'Uber eats Notifications',
    lists: [
      // {
      //   content: 'Review your stay in Bronze King',
      //   time: 'March, 21 2020',
      //   name: 'T',
      // },
      // {
      //   content: 'You have booked a room in Terrace Suite',
      //   time: 'March, 21 2020',
      //   name: 'B',
      // },
      // {
      //   content: 'You have booked a room in Bronze King',
      //   time: 'March, 21 2020',
      //   name: 'B',
      // },
    ],
  },
];

const data = [
  {
    name: 'Guest House',
    location: '210 4th Avenue North Nashville TN 37219',
    totalReviews: '20 Reviews',
    price: '$ 125',
    prePrice: '$100',
    off: '55',
    reviewValue: 4,
    image: Images.reviewReservatiob,
  },
  {
    name: 'Guest House',
    location: '210 4th Avenue North Nashville TN 37219',
    totalReviews: '20 Reviews',
    price: '$ 125',
    prePrice: '$100',
    off: '55',
    reviewValue: 4,
    image: Images.rm2,
  },
  {
    name: 'Guest House',
    location: '210 4th Avenue North Nashville TN 37219',
    totalReviews: '20 Reviews',
    price: '$ 125',
    prePrice: '$100',
    off: '55',
    reviewValue: 4,
    image: Images.rm3,
  },
];

class AccordionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSections: [],
      section: props.section,
    };
  }

  _renderHeader = (section) => {
    const opened = this.state.activeSections.length;
    return (
      <View
        style={[styles.header, opened && {borderBottomColor: Colors.white}]}>
        <View style={{flex: 9}}>
          <>
            <TextComponent style={styles.headerText} type={FontType.BOLD}>
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
    let totalLength = section.lists.length;
    if (this.state.activeSections.length) {
      return section.lists.map((data, i) => (
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
              paddingHorizontal: 2,
              paddingLeft: 1,
            }}>
            <View style={{flex: 1}}>
              <View
                style={{
                  width: 32,
                  height: 32,
                  backgroundColor: data.color || Colors.themeBlack,
                  borderRadius: 16,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TextComponent
                  style={{fontSize: 18, color: Colors.white}}
                  type={FontType.BOLD}>
                  {data.content[0].toUpperCase()}
                </TextComponent>
              </View>
            </View>
            <View
              style={{flex: 8, justifyContent: 'center', paddingHorizontal: 8}}>
              <TextComponent style={{fontSize: 13}} type={FontType.BOLD}>
                {data.content}
              </TextComponent>
              <TextComponent style={{fontSize: 11, color: Colors.searchText}}>
                {data.time}
              </TextComponent>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <TouchableOpacity
                //   onPress={() => alert('hai')}
                style={{
                  borderWidth: 1,
                  borderColor: Colors.accordionBorderColor,
                  width: 14,
                  height: 14,
                  borderRadius: 7,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <IconComponent
                  type={IconType.AntDesign}
                  name="close"
                  style={{fontSize: 9}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ));
    }
  };

  _updateSections = (activeSections) => {
    this.setState({activeSections});
  };

  render() {
    const {section} = this.state;
    return (
      <Accordion
        sections={[section]}
        activeSections={this.state.activeSections}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        onChange={this._updateSections}
      />
    );
  }
}

export default class Notification extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderComponent hasBack title="Notification" {...this.props} />
        <ScrollView
          style={{
            backgroundColor: Colors.staysBackground,
            flex: 1,
            padding: 10,
            //   paddingVertical: 5,
          }}>
          {SECTIONS.map((section, i) => (
            <View style={{paddingBottom: 5}} key={i}>
              <AccordionComponent section={section} />
            </View>
          ))}
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
    fontSize: 16,
    paddingVertical: 8,
    paddingLeft: 10,
  },
  content: {
    padding: 10,
    backgroundColor: Colors.white,
    borderColor: Colors.accordionBorderColor,
    borderBottomColor: Colors.white,
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

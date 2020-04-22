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
import ImageComponent from '../../components/Shared/ImageComponent';

const SECTIONS = [
  {
    title: 'PRIVACY POLICY',
    content: <TextComponent></TextComponent>,
    lists: [
      {
        content: 'Review your stay in Bronze King',
        time: 'March, 21 2020',
        name: 'B',
        color: Colors.blue,
      },
      {
        content: 'You have booked a room in Terrace Suite',
        time: 'March, 21 2020',
        name: 'T',
        color: Colors.orange,
      },
      {
        content: 'You have booked a room in Bronze King',
        time: 'March, 21 2020',
        name: 'B',
      },
    ],
  },
  {
    title: 'PRIVACY NOTICE FOR',
    content: <TextComponent></TextComponent>,
    lists: [
      {
        content: 'Review your stay in Bronze King',
        time: 'March, 21 2020',
        name: 'T',
      },
      {
        content: 'You have booked a room in Terrace Suite',
        time: 'March, 21 2020',
        name: 'B',
      },
      {
        content: 'You have booked a room in Bronze King',
        time: 'March, 21 2020',
        name: 'B',
      },
    ],
  },
  {
    title: 'TERMS OF USE',
    content: <TextComponent></TextComponent>,
    lists: [
      {
        content: 'Review your stay in Bronze King',
        time: 'March, 21 2020',
        name: 'T',
      },
      {
        content: 'You have booked a room in Terrace Suite',
        time: 'March, 21 2020',
        name: 'B',
      },
      {
        content: 'You have booked a room in Bronze King',
        time: 'March, 21 2020',
        name: 'B',
      },
    ],
  },
  {
    title: 'COOKIES PRIVACY',
    content: (
      <View style={{backgroundColor: Colors.white, padding: 10}}>
        <View style={{}}>
          <TextComponent type={FontType.BOLD} style={{paddingBottom: 5}}>
            COOKIES AND OTHER TRACKING TECHNOLOGIES STATEMENT
          </TextComponent>
          <TextComponent>
            This Statement regarding Cookies and Other Tracking Technologies
            (this "Statement") describes the different types of Cookies and
            Other Technologies that may be used in connection with the websites
            we own or control (“Websites”), software applications we make
            available on or through mobile devices or computers (“Apps”),
            wireless/wi-fi connectivity that may be offered at our properties
            (“Wi-Fi Access”), and social media channels that we control (“Social
            Media Channels,” collectively with Websites, Wi-Fi Access and Apps,
            the “Sites”) that link to this Statement. This Statement also
            describes how you can manage Cookies and Other Technologies.
          </TextComponent>
        </View>
        <View style={{marginTop: 10}}>
          <TextComponent type={FontType.BOLD} style={{paddingBottom: 5}}>
            OUR COLLECTION AND USE OF INFORMATION
          </TextComponent>
          <TextComponent>
            This Statement regarding Cookies and Other Tracking Technologies
            (this "Statement") describes the different types of Cookies and
            Other Technologies that may be used in connection with the websites
            we own or control (“Websites”), software applications we make
            available on or through mobile devices or computers (“Apps”),
            wireless/wi-fi connectivity that may be offered at our properties
            (“Wi-Fi Access”), and social media channels that we control (“Social
            Media Channels,” collectively with Websites, Wi-Fi Access and Apps,
            the “Sites”) that link to this Statement. This Statement also
            describes how you can manage Cookies and Other Technologies.
          </TextComponent>
        </View>
      </View>
    ),
    lists: [
      {
        content: 'Review your stay in Bronze King',
        time: 'March, 21 2020',
        name: 'T',
      },
      {
        content: 'You have booked a room in Terrace Suite',
        time: 'March, 21 2020',
        name: 'B',
      },
      {
        content: 'You have booked a room in Bronze King',
        time: 'March, 21 2020',
        name: 'B',
      },
    ],
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
          <TextComponent style={styles.headerText} type={FontType.BOLD}>
            {section.title}
          </TextComponent>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <IconComponent
            type={IconType.AntDesign}
            name={!opened ? 'plus' : 'minus'}
            style={{fontSize: 15}}></IconComponent>
        </View>
      </View>
    );
  };

  _renderContent = (section) => {
    return section.content;
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

export default class PrivacyPolicy extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderComponent {...this.props} hasBack isDark>
          <ImageComponent
            source={Images.Logo}
            style={{width: 120, height: 90}}
            resizeMode="contain"
          />
        </HeaderComponent>
        <ScrollView
          style={{
            backgroundColor: Colors.staysBackground,
            flex: 1,
            padding: 10,
            //   paddingVertical: 5,
          }}>
          {SECTIONS.map((section, i) => (
            <View key={i} style={{marginBottom: 3}}>
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
    paddingVertical: 10,
    flexDirection: 'row',
    borderColor: Colors.accordionBorderColor,
    borderWidth: 0,
    // marginBottom: 3,
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

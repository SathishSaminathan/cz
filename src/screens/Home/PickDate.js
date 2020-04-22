import React, {Component} from 'react';
import {CalendarList} from 'react-native-calendars';
import {Calendar} from 'react-native-calendario';
import moment from 'moment';

import {Colors} from '../../constants/ThemeConstants';
import {View, Text, TouchableOpacity} from 'react-native';
import TextComponent from '../../components/Shared/TextComponent';

export default class PickDate extends Component {
  state = {
    selectedDate: moment().format('YYYY-MM-DD'),
    selectedDates: [],
  };

  componentDidMount() {
    console.log('this.componentDidMount');
  }

  // handlePress = (date) => {
  //   const selectedDates = this.state.selectedDates;
  //   let selectedDate = moment(date, 'YYYY-MM-DD')
  //     .format('DD/MM')
  //     .replace(/\b0/g, '');
  //   selectedDates.push(date);
  //   this.setState(
  //     {
  //       selectedDates,
  //     },
  //     () => this.props.setSelectedDate(selectedDate),
  //   );
  // };

  dataIncludesSelectedDate = (date) => {
    // console.log(
    //   'dataIncludesSelectedDate',
    //   this.state.selectedDates.includes(date),
    // );
    return this.state.selectedDates.includes(date);
  };

  render() {
    const {selectedDate, selectedDates} = this.state;
    const today = moment().format('YYYY-MM-DD');

    // console.log('selectedDate', this.state.selectedDates);
    return (
      <View style={{flex: 1, backgroundColor: Colors.white}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 31,
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: Colors.accDividerColor,
          }}>
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((v, i) => (
            <View key={i} style={{flex: 1, alignItems: 'center'}}>
              <TextComponent style={{fontSize: 15}}>{v}</TextComponent>
            </View>
          ))}
        </View>
        {/* <CalendarList
          dayComponent={({date, state}) => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() => this.handlePress(date.dateString)}
                  style={{
                    // flex: 1,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 30,
                    width: 30,
                    backgroundColor:
                      date.dateString === today ||
                      this.dataIncludesSelectedDate(date.dateString)
                        ? Colors.themeBlack
                        : Colors.white,
                  }}>
                  <TextComponent
                    style={{
                      textAlign: 'center',
                      color:
                        state === 'disabled'
                          ? 'gray'
                          : date.dateString !== today
                          ? Colors.themeBlack
                          : Colors.white,
                      fontSize: 14,
                    }}>
                    {date.day}
                  </TextComponent>
                </TouchableOpacity>
                {date.dateString === today && (
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('LocationResults')
                    }
                    style={{
                      zIndex: 2,
                      left: '-45%',
                      right: '-45%',
                      alignItems: 'center',
                      top: '-70%',
                      // backgroundColor: 'red',
                      position: 'absolute',
                      paddingVertical: 2,
                      borderWidth: 0.3,
                      // paddingHorizontal: 8,
                    }}>
                    <View>
                      <TextComponent style={{fontSize: 8}}>
                        Book for tonight
                      </TextComponent>
                    </View>
                    <View
                      style={{
                        height: 8,
                        width: 8,
                        borderWidth: 0.3,
                        position: 'absolute',
                        bottom: '-50%',
                        borderLeftColor: Colors.white,
                        borderTopColor: Colors.white,
                        backgroundColor: Colors.white,
                        // zIndex: 2,
                        transform: [
                          {
                            rotate: '45deg',
                          },
                        ],
                      }}></View>
                  </TouchableOpacity>
                )}
              </View>
            );
          }}
          hideDayNames
          // onDayPress={(day) => {
          //   this.setState(
          //     {
          //       selectedDate: day.dateString,
          //     },
          //     () => this.handlePress(day.dateString),
          //   );
          //   // this.setState(
          //   //   {
          //   //     selectedDate: day.dateString,
          //   //   },
          //   //   () => this.props.selectedDate(day.dateString),
          //   // );
          // }}
          minDate={today}
          // current={selectedDate}x
          pastScrollRange={24}
          futureScrollRange={24}
          // markingType={'custom'}
          // markedDates={{
          //   [selectedDate]: {
          //     customStyles: {
          //       container: {
          //         backgroundColor: Colors.themeBlack,
          //       },
          //       text: {
          //         color: Colors.white,
          //         fontWeight: 'bold',
          //       },
          //     },
          //   },
          // }}
        /> */}
        <Calendar
          // monthHeight={350}
          showWeekdays={false}
          onChange={(range) =>
            this.props.setSelectedDate(
              Object.values(range).map(
                (v) => v && moment(v).format('DD/MM').replace(/\b0/g, ''),
              ),
            )
          }
          // minDate={new Date(2018, 3, 20)}
          // startDate={new Date(2018, 3, 30)}
          // endDate={new Date(2018, 4, 5)}
          theme={{
            activeDayColor: {},
            monthTitleTextStyle: {
              color: Colors.themeBlack,
              fontWeight: '300',
              fontSize: 16,
            },
            emptyMonthContainerStyle: {},
            emptyMonthTextStyle: {
              fontWeight: '200',
            },
            weekColumnsContainerStyle: {
              // backgroundColor:'red'
            },
            weekColumnStyle: {
              paddingVertical: 10,
            },
            weekColumnTextStyle: {
              color: '#b6c1cd',
              fontSize: 13,
            },
            nonTouchableDayContainerStyle: {},
            nonTouchableDayTextStyle: {},
            startDateContainerStyle: {},
            endDateContainerStyle: {},
            dayContainerStyle: {},
            dayTextStyle: {
              color: '#2d4150',
              fontWeight: '200',
              fontSize: 15,
            },
            dayOutOfRangeContainerStyle: {},
            dayOutOfRangeTextStyle: {},
            todayContainerStyle: {},
            todayTextStyle: {
              color: '#6d95da',
            },
            activeDayContainerStyle: {
              backgroundColor: Colors.themeBlack,
            },
            activeDayTextStyle: {
              color: 'white',
            },
            nonTouchableLastMonthDayTextStyle: {},
          }}
        />
      </View>
    );
  }
}

import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { Calendar } from "react-native-calendario";
import { Colors } from "../../constants/ThemeConstants";
import TextComponent from "../../components/Shared/TextComponent";
import ButtonComponent from "../../components/Shared/ButtonComponent";
import SearchLocation from "./SearchLocation";
import IconComponent from "../../components/Shared/IconComponent";
import { IconType, FontType } from "../../constants/AppConstants";
import moment from "moment";
import { without } from "lodash";

const initialLayout = { width: Dimensions.get("window").width };

class IOSDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LocationName: null,
      SelectedDate: null,
      ActiveTab: "Location",
      startDate: moment(),
      endDate: null,
      DaysCount: null,
      ShowDates: moment().format("DD/MM").replace(/\b0/g, ""),
    };
  }

  setDates = (dates) => {
    dates.map((v) => v);
    let startDate = null;
    let endDate = null;
    let temp = without(dates, undefined);
    let days = null;
    if (temp.length === 1) {
      startDate = temp[0];
    } else {
      startDate = temp[0];
      endDate = temp[1];
    }

    if (startDate && endDate) {
      let a = moment(startDate, "DD/MM");
      let b = moment(endDate, "DD/MM");
      days = b.diff(a, "days") + 1;
    }
    console.log(
      "temp",
      temp,
      moment(startDate, "DD/MM"),
      moment(endDate, "DD/MM"),
      days
    );
    // setSelectedDate(dates);
  };

  setLocationName = (LocationName) => {
    this.setState({ LocationName, ActiveTab: "Date" });
  };

  onChange = ({ startDate, endDate }) => {
    let dates = Object.values({ startDate, endDate }).map(
      (v) => v && moment(v).format("DD/MM").replace(/\b0/g, "")
    );
    let temp = without(dates, undefined);
    let sd = null;
    let ed = null;
    let DaysCount = null;
    let ShowDates = null;
    if (temp.length === 1) {
      sd = temp[0];
    } else {
      sd = temp[0];
      ed = temp[1];
    }
    ShowDates = temp.map(
      (v, i) => `${v}${temp.length !== 1 && i !== temp.length - 1 ? " - " : ""}`
    );
    if (sd && ed) {
      let a = moment(sd, "DD/MM");
      let b = moment(ed, "DD/MM");
      DaysCount = b.diff(a, "days") + 1;
    } else if (sd) {
      DaysCount = 1;
    }
    // console.log(
    //   'temp',
    //   startDate,
    //   temp,
    //   // moment(sd, 'DD/MM'),
    //   // moment(ed, 'DD/MM'),
    //   DaysCount,
    //   ShowDates,
    // );

    this.setState({ startDate, endDate, DaysCount, ShowDates });
  };
  render() {
    const {
      ActiveTab,
      SelectedDate,
      LocationName,
      DaysCount,
      ShowDates,
    } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            height: 60,
            flexDirection: "row",
            backgroundColor: Colors.white,
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            paddingTop: Platform.OS === "ios" ? 20 : 0,
          }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <IconComponent size={15} type={IconType.AntDesign} name="left" />
          </TouchableOpacity>
          <TextComponent type={FontType.BOLD} style={{ fontSize: 17 }}>
            Dates
          </TextComponent>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              this.props.navigation.navigate("LocationResults", {
                date: ShowDates,
              })
            }
          >
            <TextComponent
              type={FontType.BOLD}
              style={{ fontSize: 17, color: Colors.cancelblue }}
            >
              Done
            </TextComponent>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, backgroundColor: Colors.white }}>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              height: 31,
              alignItems: "center",
              alignSelf: "center",
              backgroundColor: Colors.accDividerColor,
            }}
          >
            {["S", "M", "T", "W", "T", "F", "S"].map((v, i) => (
              <View key={i} style={{ flex: 1, alignItems: "center" }}>
                <TextComponent style={{ fontSize: 15 }}>{v}</TextComponent>
              </View>
            ))}
          </View>
          <Calendar
            // monthHeight={350}
            showWeekdays={false}
            onChange={this.onChange}
            minDate={moment()}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            theme={{
              activeDayColor: {},
              monthTitleTextStyle: {
                color: Colors.themeBlack,
                fontWeight: "300",
                fontSize: 16,
              },
              emptyMonthContainerStyle: {},
              emptyMonthTextStyle: {
                fontWeight: "200",
              },
              weekColumnsContainerStyle: {
                // backgroundColor:'red'
              },
              weekColumnStyle: {
                paddingVertical: 10,
              },
              weekColumnTextStyle: {
                color: "#b6c1cd",
                fontSize: 13,
              },
              nonTouchableDayContainerStyle: {},
              nonTouchableDayTextStyle: {},
              startDateContainerStyle: {},
              endDateContainerStyle: {},
              dayContainerStyle: {},
              dayTextStyle: {
                color: "#2d4150",
                fontWeight: "200",
                fontSize: 15,
              },
              dayOutOfRangeContainerStyle: {},
              dayOutOfRangeTextStyle: {},
              todayContainerStyle: {},
              todayTextStyle: {
                color: "#6d95da",
              },
              activeDayContainerStyle: {
                backgroundColor: Colors.themeBlack,
              },
              activeDayTextStyle: {
                color: "white",
              },
              nonTouchableLastMonthDayTextStyle: {},
            }}
          />
        </View>
        {/* </View> */}
        {/* <ButtonComponent
          onPress={() =>
            this.props.navigation.navigate("LocationResults", {
              date: ShowDates,
            })
          }
          style={{
            backgroundColor: Colors.themeBlack,
            color: Colors.white,
            fontSize: 15,
          }}
          borderRadius={0}
        >
          {true
            ? `BOOK FOR ${
                DaysCount
                  ? `${DaysCount} NIGHT${DaysCount === 1 ? `` : `S`}`
                  : `TONIGHT`
              }`
            : "Apply"}
        </ButtonComponent> */}
      </View>
    );
  }
}
export default IOSDate;

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});

import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import ImageComponent from '../../components/Shared/ImageComponent';
import {Images} from '../../assets/images';
import IconComponent from '../../components/Shared/IconComponent';
import {IconType, FontType} from '../../constants/AppConstants';
import {Colors} from '../../constants/ThemeConstants';
import TextComponent from '../../components/Shared/TextComponent';
import {AirbnbRating} from 'react-native-ratings';
import Divider from '../../components/Shared/Divider';
import {ReadmoreComponent} from '../../components/Shared/ReadmoreComponent';
import ButtonComponent from '../../components/Shared/ButtonComponent';
import PoweredBY from '../../components/Shared/PoweredBy';

const data = [
  {
    name: 'AC',
    images: 'card-outline',
  },
  {
    name: 'Wifi',
    images: 'wifi',
  },
  {
    name: 'TV',
    images: 'television',
  },
  {
    name: 'Bed',
    images: 'bed-empty',
  },
];

export default class HotelDetails extends Component {
  render() {
    // const {params} = this.props.navigation.state;
    // console.log('HotelDetails', this.props.route.params.roomName);
    const roomName = this.props.route.params.roomName;
    const image = this.props.route.params.image;
    return (
      <ScrollView style={{flex: 1, backgroundColor: Colors.white}}>
        <View style={{width: '100%', height: 250}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{
              color: Colors.white,
              position: 'absolute',
              left: 5,
              zIndex: 1,
              fontSize: 15,
              top: 5,
              padding: 10,
              paddingTop: 15,
            }}>
            <IconComponent
              type={IconType.AntDesign}
              name="left"
              style={{
                color: Colors.white,
                fontSize: 15,
              }}
            />
          </TouchableOpacity>
          <ImageComponent source={image} />
        </View>
        <View
          style={{
            // height: 100,
            backgroundColor: Colors.white,
            borderRadius: 8,
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}>
          <View style={{flex: 1, paddingBottom: 20}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flex: 7}}>
                <TextComponent
                  style={{
                    fontSize: 19,
                  }}
                  type={FontType.BOLD}>
                  {/* Dream hotel, Nashville */}
                  {roomName}
                </TextComponent>
              </View>
              <View
                style={{flex: 3, flexDirection: 'row', alignItems: 'center'}}>
                <TextComponent style={{paddingRight: 5}}>4/5</TextComponent>
                <AirbnbRating
                  showRating={false}
                  starContainerStyle={{
                    alignSelf: 'flex-start',
                    paddingRight: 10,
                  }}
                  count={5}
                  defaultRating={4}
                  size={10}
                  isDisabled
                />
              </View>
            </View>
            <View style={{flexDirection: 'row', paddingVertical: 8}}>
              <IconComponent
                type={IconType.MaterialCommunityIcons}
                name="map-marker-outline"
                style={{paddingRight: 3}}
              />
              <TextComponent style={{fontSize: 12, color: Colors.searchText}}>
                210 4th Avenue North Nashville TN 37219
              </TextComponent>
              {/* <TextComponent style={{fontSize: 12, color: Colors.searchText}}>
                2km Away
              </TextComponent> */}
            </View>
            <TouchableOpacity
              style={{
                width: 37,
                height: 15,
                borderRadius: 9,
                backgroundColor: Colors.themeBlack,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TextComponent style={{fontSize: 9, color: Colors.white}}>
                Map
              </TextComponent>
            </TouchableOpacity>
            <View style={{width: '100%', position: 'absolute', bottom: 0}}>
              <Divider style={{backgroundColor: Colors.accDividerColor}} />
            </View>
          </View>
          <View style={{marginTop: 15, paddingBottom: 20}}>
            <TextComponent style={{fontSize: 13, color: Colors.searchText}}>
              Summary
            </TextComponent>
            <ReadmoreComponent
              lines={5}
              text="Here, Hotel focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola, body muscles and holding ones own breath. Though, most of these notes are not fundamentally necessary, they are such that you can use them for a good laugh, at a drinks party or for picking up women or men.

1) Coca-Cola: Did you know that its original colour was green?

2) Mohammed: Did you know that this is the most used name in the entire world?

3) Geographical Letters: Did you know that the name of each of the continents begins and concludes with the exact same alphabet? Do not believe that? Look up Asia, Europe, Africa, America, Antarctica and the rest.

4) Muscle Strength: Did you know that the strongest muscle in the entire body is that one which we use to lick a popsicle? Your tongue.

5) Credit Cards: In the United States, were you aware that each and every person has at least two credit cards?

6) An Antique Machine: The word for an old machine that was once used for writing letters and other documents is the largest word that one can make if they click only on a single row of their computer’s keyboard: typewriter!

7) Blink: Men wink at women, but research has found out that the average woman blinks nearly two times more than the average man.

8) Suicide: Even though you might have wondered if it was possible, studies have discovered that it is impossible to kill oneself by simply holding in your breath.

9) Licking: However much you may try, you will never be able to lick your elbows.

10) Sneeze: Try sneezing. People will automatically answer you with a bless you greeting. Have you ever imagined why? Some say that this happens because a sneeze stops the functioning of the heart for a very tiny second.

11) The Blue Sky: Did you know that a pig, no matter how much they try, cannot look up into the sky?

12) Twisting Your Tongue: We have all dabbled with different tongue-twisters in our day. But do you know which is the toughest? Sixth sick sheiks sixth sheeps sick.

13) Ribs: Did you know that you should try not to sneeze too strongly. Why? A very powerful sneeze has the ability to cause a fracture in your ribcage. But, then again, if you try and withhold one, you stand the chance of breaking one of the many blood vessels in your neck or head. This could cause death.

14) Cards: Did you think that the Kings are all just random cards referring to random figures? No. Each one signifies a different king: Diamonds for Julius Caesar, Clubs for Alexander the Great, Spades for David and Hearts for Charlemagne. 15) And finally: Most everyone reading this (Caught You!) are trying to lick their elbows at this exact moment!"
            />
            <View style={{width: '100%', position: 'absolute', bottom: 0}}>
              <Divider style={{backgroundColor: Colors.accDividerColor}} />
            </View>
          </View>
          <View style={{flex: 1, paddingBottom: 20, paddingTop: 10}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flex: 7}}>
                <TextComponent
                  style={{
                    fontSize: 13,
                  }}
                  type={FontType.BOLD}>
                  Services
                </TextComponent>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 8,
                justifyContent: 'space-around',
              }}>
              {data.map((data, i) => (
                <View style={{alignItems: 'center'}} key={i}>
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 20,
                      backgroundColor: Colors.themeBlack,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <IconComponent
                      type={IconType.MaterialCommunityIcons}
                      name={data.images}
                      style={{color: Colors.white}}
                    />
                  </View>
                  <TextComponent
                    style={{fontSize: 12, color: Colors.searchText}}>
                    {data.name}
                  </TextComponent>
                </View>
              ))}
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    width: 40,
                    // height: 40,
                    borderRadius: 20,
                    backgroundColor: Colors.themeBlack,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TextComponent style={{color: Colors.white}}>
                    5+
                  </TextComponent>
                </View>
                <TextComponent style={{fontSize: 12, color: Colors.searchText}}>
                  {data.name}
                </TextComponent>
              </View>
            </View>

            <View style={{width: '100%', position: 'absolute', bottom: 0}}>
              <Divider style={{backgroundColor: Colors.accDividerColor}} />
            </View>
          </View>
          <View style={{flex: 1, paddingVertical: 20, paddingTop: 10}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flex: 7}}>
                <TextComponent
                  style={{
                    fontSize: 13,
                  }}
                  type={FontType.BOLD}>
                  Photos
                </TextComponent>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                paddingVertical: 10,
              }}>
              {[Images.rm2, Images.upcomingReview, Images.rm3].map(
                (image, i) => (
                  <View key={i} style={{width: 100, height: 100}}>
                    <ImageComponent source={image} />
                  </View>
                ),
              )}
            </View>
            <View style={{width: '100%', position: 'absolute', bottom: 0}}>
              <Divider style={{backgroundColor: Colors.accDividerColor}} />
            </View>
          </View>
          <View style={{flex: 1, paddingVertical: 20, paddingTop: 10}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{flex: 7}}>
                <TextComponent
                  style={{
                    fontSize: 13,
                  }}
                  type={FontType.BOLD}>
                  Current Hotel & Nearby Events
                </TextComponent>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                paddingVertical: 10,
              }}>
              <View style={{width: '100%', height: 150}}>
                <ImageComponent
                  source={Images.group649}
                  style={{borderRadius: 5}}
                />
                {[
                  {
                    image: Images.reviewReservatiob,
                    left: '43%',
                    top: '40%',
                    size: 38,
                  },
                  {
                    image: Images.event4,
                    left: '10%',
                    top: '60%',
                    size: 20,
                  },
                  {
                    image: Images.group3,
                    left: '30%',
                    top: '50%',
                    size: 25,
                  },
                  {
                    image: Images.group4,
                    left: '22%',
                    top: '30%',
                    size: 25,
                  },
                  {
                    image: Images.group5,
                    left: '85%',
                    top: '60%',
                    size: 20,
                  },
                ].map((image, i) =>
                  i === 0 ? (
                    <View
                      key={i}
                      style={{
                        position: 'absolute',
                        top: image.top,
                        left: image.left,
                      }}>
                      <View
                        style={{
                          backgroundColor: Colors.themeBlack,
                          flexDirection: 'row',
                          borderWidth: 1,
                          borderColor: Colors.white,
                          alignItems: 'center',
                          borderRadius: 50,
                        }}>
                        <View
                          style={{
                            width: image.size,
                            height: image.size,
                            backgroundColor: Colors.themeBlack,
                            borderRadius: image.size / 2,
                            borderWidth: 1,
                            borderColor: Colors.white,
                            overflow: 'hidden',
                            elevation: 10,
                          }}>
                          <ImageComponent source={image.image} />
                        </View>
                        <TextComponent
                          style={{
                            fontSize: 10,
                            color: Colors.white,
                            paddingHorizontal: 5,
                          }}>
                          Dream Nashville
                        </TextComponent>
                      </View>
                    </View>
                  ) : (
                    <View
                      key={i}
                      style={{
                        position: 'absolute',
                        top: image.top,
                        left: image.left,
                      }}>
                      <View
                        style={{
                          width: image.size,
                          height: image.size,
                          backgroundColor: Colors.themeBlack,
                          borderRadius: image.size / 2,
                          borderWidth: 1,
                          overflow: 'hidden',
                          borderColor: Colors.white,
                          elevation: 10,
                        }}>
                        <ImageComponent source={image.image} />
                      </View>
                    </View>
                  ),
                )}
              </View>
            </View>
            <View style={{width: '100%', position: 'absolute', bottom: 0}}>
              <Divider style={{backgroundColor: Colors.accDividerColor}} />
            </View>
          </View>
        </View>

        <View style={{width: '90%', alignSelf: 'center'}}>
          <ButtonComponent
            onPress={() =>
              this.props.navigation.navigate('BookHotel', {
                roomName,
                image,
                date: this.props.route.params.date,
              })
            }
            borderRadius={50}
            style={{
              backgroundColor: Colors.themeBlack,
              fontSize: 17,
              color: Colors.white,
            }}>
            Review Reservation
          </ButtonComponent>
        </View>
        <PoweredBY />
      </ScrollView>
    );
  }
}

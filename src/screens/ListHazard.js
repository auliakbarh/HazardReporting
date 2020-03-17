import React, {Component} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import config from '../config';
import endpoint from '../config/endpoint';
import scale from '../config/scale';

export default class ListHazard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listHazard: [],
      isFetching: false,
    };
  }

  fetchListHazard = async () => {
    const listHazard = await fetch(config.api + endpoint.getAllData)
      .then(response => {
        return response.json();
      })
      .then(data => {
        if (data.status === 200) {
          return data.data;
        } else {
          return [];
        }
      })
      .catch(e => {
        console.warn(e);
        return [];
      });

    this.setState({listHazard, isFetching: false});

    return listHazard;
  };

  refresh = () => {
    this.setState({isFetching: true}, () => {
      this.fetchListHazard();
    });
  };

  componentDidMount() {
    this.refresh();
  }

  _renderList = item => {
    try {
      return (
        <TouchableOpacity style={styles.listHazard}>
          <View style={styles.iconListHazard}>
            <Icon
              name={'hazard-lights'}
              size={scale(23)}
              color={config.color.common.darkRed}
            />
          </View>
          <View style={styles.descListHazard}>
            <Text>{item.judulHazard}</Text>
            <Text>{`${item.lokasi} - ${item.subLokasi}`}</Text>
          </View>
          <View style={styles.timeListHazard}>
            <Text style={styles.time}>{item.waktuLaporan}</Text>
          </View>
        </TouchableOpacity>
      );
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  render() {
    const {listHazard, isFetching} = this.state;

    return (
      <>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={config.color.background}
        />
        <View style={styles.mainContainer}>
          <FlatList
            data={listHazard}
            renderItem={({item}) => this._renderList(item)}
            keyExtractor={item => item._id}
            onRefresh={() => this.refresh()}
            refreshing={isFetching}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    padding: scale(30),
    backgroundColor: config.color.background,
  },
  listHazard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: scale(40),
    borderWidth: 1,
    borderRadius: 2,
    borderColor: config.color.gray,
    marginBottom: scale(5),
  },
  iconListHazard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: scale(40),
    maxHeight: scale(40),
  },
  descListHazard: {
    flex: 4,
    height: scale(40),
    maxHeight: scale(40),
    paddingLeft: scale(8),
    justifyContent: 'center',
  },
  timeListHazard: {
    flex: 1,
    height: scale(40),
    maxHeight: scale(40),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: scale(5),
    paddingBottom: scale(3),
  },
  time: {
    fontSize: config.fontSize.mini,
    color: config.color.common.gray,
  },
});

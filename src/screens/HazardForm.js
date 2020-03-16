import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Picker,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import config from '../config';
import scale from '../config/scale';
import {textStyles} from '../config/styles';

import TextInput from '../components/TextInput';

const myIcon = <Icon name="rocket" size={30} color={config.color.common.darkRed} />;

export default class HazardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      judulHazard: '',
      detailLaporan: '',
      detailLokasi: '',
      lokasi: '',
      subLokasi: '',
    };
  }

  onChangeText_judulHazard = text => {
    this.setState({judulHazard: text});
  };

  onChangeText_detailLaporan = text => {
    this.setState({detailLaporan: text});
  };

  onChangeText_detailLokasi = text => {
    this.setState({detailLokasi: text});
  };

  render() {
    const {
      judulHazard,
      detailLaporan,
      detailLokasi,
      lokasi,
      subLokasi,
    } = this.state;
    return (
      <>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={config.color.background}
        />
        <View style={styles.mainContainer}>
          <View style={styles.centeredContent}>
            {myIcon}
            <Text style={styles.text}>Hazard Form</Text>
          </View>

          <TextInput
            placeholder={'Judul Hazard'}
            onChangeText={text => this.onChangeText_judulHazard(text)}
            value={judulHazard}
          />
          <TextInput
            placeholder={'Detail Laporan'}
            onChangeText={text => this.onChangeText_detailLaporan(text)}
            value={detailLaporan}
          />
          <View style={styles.lokasi}>
            <Text style={{flex: 1}}>Lokasi</Text>
            <Picker
              // mode={'dropdown'}
              selectedValue={lokasi}
              style={{flex: 3, height: 50}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({lokasi: itemValue})
              }>
              <Picker.Item label="Lain-lain" value="Lain-lain" />
              <Picker.Item label="Neo SOHO" value="Neo SOHO" />
            </Picker>
          </View>

          <View style={styles.lokasi}>
            <Text style={{flex: 1}}>Sub Lokasi</Text>
            <Picker
              selectedValue={subLokasi}
              style={{flex: 3, height: 50}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({subLokasi: itemValue})
              }>
              <Picker.Item label="Lain-lain" value="Lain-lain" />
              <Picker.Item label="Lantai 30" value="Lantai 30" />
              <Picker.Item label="Lobby" value="Lobby" />
            </Picker>
          </View>

          <TextInput
            placeholder={'Detail Lokasi'}
            onChangeText={text => this.onChangeText_detailLokasi(text)}
            value={detailLokasi}
          />

          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Submit</Text>
          </TouchableOpacity>
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
  lokasi: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: scale(6),
  },
  centeredContent: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...textStyles.main,
    fontSize: config.fontSize.xlarge,
    marginTop: scale(8),
    marginBottom: scale(32),
  },
  saveButton: {
    borderRadius: scale(16),
    backgroundColor: config.color.common.darkRed,
    padding: scale(15),
    margin: scale(5),
    marginTop: scale(32),
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: scale(20),
    textAlign: 'center',
  },
});

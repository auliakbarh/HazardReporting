import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import config from '../config';
import {textStyles} from '../config/styles';

export default class HazardForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={config.color.background}
        />
        <View style={styles.mainContainer}>
          <Text style={styles.text}>Hazard Form</Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: config.color.background,
  },
  text: textStyles.main,
});

import React from 'react';
import { StyleSheet, Text, View, Button, Image, Platform } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { processDocument } from '../API/Vision';
import { addRecord } from '../redux/action';
import { store } from '../redux/store';

export default class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
    };
  }
  chooseFile = () => {
    var options = {
      title: '-Upload Photo-',

      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({ filePath: source, });

        if (Platform.OS === 'ios')
          processDocument(response.uri).then(res => {
            console.log(res);
            store.dispatch(addRecord(res));
          });
        else
          processDocument(response.path).then(res => {
            console.log(res);
            store.dispatch(addRecord(res));
          });
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            source={{ uri: this.state.filePath.uri }}
            style={{ width: 300, height: 300 }}
          />
          <Button title="Choose Reciept" onPress={this.chooseFile.bind(this)} />
        </View>
        <View style={styles.container}>
          {/* some raw data */}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
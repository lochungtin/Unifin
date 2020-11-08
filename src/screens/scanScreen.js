import React from 'react';
import { TouchableOpacity, Text, View, Image, Platform } from 'react-native';
import ImagePicker from 'react-native-image-picker';

import { processDocument } from '../API/Vision';
import { addRecord } from '../redux/action';
import { store } from '../redux/store';
import { accent, styles, white } from '../styles';

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
      <View style={styles.screen}>
        <View style={styles.container}>
          <View style={{ maxHeight: 500, paddingHorizontal: 10, paddingVertical: 10, borderWidth: 1, borderColor: white, marginBottom: 15, alignItems: 'center', justifyContent: 'center' }}>
            {this.state.filePath.uri === undefined &&
              <>
                <View style={{ minHeight: '80%'}} />
                <Text style={{ color: white }}>Select image to analyze or </Text>
                <Text style={{ color: white }}>Take a picture of your reciept</Text>
              </>
            }
            <Image
              source={{ uri: this.state.filePath.uri }}
              style={{ width: 300, height: 500 }}
            />
          </View>
          <TouchableOpacity
            onPress={this.chooseFile.bind(this)}
            style={{ ...styles.roundView, backgroundColor: accent, alignItems: 'center' }}
          >
            <Text style={{ color: white }}>Load Reciept</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
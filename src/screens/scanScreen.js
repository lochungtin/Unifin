import React from 'react';
import { StyleSheet, Text, View, Button, Image, Platform } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { utils } from '@react-native-firebase/app';
import vision from '@react-native-firebase/ml-vision';

async function processDocument(localPath) {
  const processed = await vision().cloudDocumentTextRecognizerProcessImage(localPath);

  console.log('Found text in document: ', processed.text);

  processed.blocks.forEach(block => {
    console.log('omg this works ', block.text);
    console.log('Confidence in block: ', block.confidence);
    console.log('Languages found in block: ', block.recognizedLanguages);
  });
}
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
        this.setState({
          filePath: source,
        });
        if (Platform.OS === 'ios')
          processDocument(response.uri);
        else
          processDocument(response.path);
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
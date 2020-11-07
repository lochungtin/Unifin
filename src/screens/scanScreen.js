import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
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
      title: 'Select Image',

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
        processDocument(this.state.filePath.uri);
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          {/*<Image 
          source={{ uri: this.state.filePath.path}} 
          style={{width: 100, height: 100}} />*/}
          <Image
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
            }}
            style={{ width: 100, height: 100 }}
          />
          <Image
            source={{ uri: this.state.filePath.uri }}
            style={{ width: 250, height: 250 }}
          />
          <Text style={{ alignItems: 'center' }}>
            {this.state.filePath.uri}
          </Text>
          <Text>
            
          </Text>
          {/* <Image source={require('/Users/danieltsang/Documents/Unifin/src/screens/ReceiptSwiss.jpg')} /> */}

          <Button title="Choose File" onPress={this.chooseFile.bind(this)} />
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
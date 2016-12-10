import React from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

const images = {
  whosThatCoolCat: require('./img/MyNormPic.jpeg')
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      hiddenText: true
    }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ marginBottom: 20 }}>react-native-global-props</Text>
        <Image
          source={images.whosThatCoolCat}
          style={{ width: 80, height: 80, borderRadius: 40 }}
        />
        <View style={{ marginVertical: 20 }}>
          <TextInput
            style={{ width: 200, height: 30 }}
            placeholder="Enter text"
            onChangeText={(text) => this.setState({ inputValue: text })}
            value={this.state.inputValue}
          />
        </View>
        <TouchableOpacity onPress={() => this.setState({ hiddenText: !this.state.hiddenText })}>
          <View style={{ backgroundColor: 'orange', padding: 10, marginBottom: 20 }}>
            <Text style={{ color: 'white' }}>Press me to show or hide the input text</Text>
          </View>
        </TouchableOpacity>
        {!this.state.hiddenText && <Text style={{ color: 'red' }}>{this.state.inputValue}</Text>}
      </View>
    );
  }
}

export default App;

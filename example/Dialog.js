import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
// import { Toast } from '../src/index';

export default class DialogExample extends React.Component {
  constructor(props) {
        super(props);
    }
  componentDidMount(){
    // this.refs.toast.show('hahha',2000);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>规划中...</Text>
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
  ysuiBtn: {
    backgroundColor: '#fd783f',
    height:44,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 0,
    paddingBottom: 0,
    width: 'auto',
    borderRadius: 44,
    marginTop:20,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  }
});

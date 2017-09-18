import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import { Toast } from './src/index';

export default class App extends React.Component {
  constructor(props) {
        super(props);
    }
  componentDidMount(){
    // this.refs.toast.show('hahha',2000);
  }
  onClick(text, duration, type) {
    this.refs.toast.show(text, duration,type);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Toast</Text>
        <Text>弱提示</Text>
        <TouchableHighlight
                style={styles.ysuiBtn}
                onPress={()=>this.onClick('网速太慢了', 2000, '')}>
                <Text style={styles.text}>Toast默认样式</Text>
        </TouchableHighlight>
        <TouchableHighlight
                style={styles.ysuiBtn}
                onPress={()=>this.onClick('保存成功', 2000, 'success')}>
                <Text style={styles.text}>Toast成功样式</Text>
        </TouchableHighlight>
        <TouchableHighlight
                style={styles.ysuiBtn}
                onPress={()=>this.onClick('保存中...', 2000, 'loading')}>
                <Text style={styles.text}>Toast加载样式</Text>
        </TouchableHighlight>
        <TouchableHighlight
                style={styles.ysuiBtn}
                onPress={()=>this.onClick('保存失败，请重试', 2000, 'fail')}>
                <Text style={styles.text}>Toast失败样式</Text>
        </TouchableHighlight>
        <Toast ref="toast" />
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

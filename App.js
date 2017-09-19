import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight,Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ToastExample from './example/Toast';
import ButtonExample from './example/Button';
import InputExample from './example/Input';
import ListExample from './example/List';
import DialogExample from './example/Dialog';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'React native组件调用举例',
  }
  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>表单</Text>
          <Button
          onPress={()=>navigate('ButtonExample')}
          title="Button      >"
        />
        <Button
          onPress={()=>navigate('ListExample')}
          title="List      >"
        />
        <Button
          onPress={()=>navigate('InputExample')}
          title="Input      >"
        />
        </View>
         <View>
          <Text style={styles.title}>操作反馈</Text>
          <Button
          onPress={()=>navigate('DialogExample')}
          title="Dialog      >"
        />
        <Button
          onPress={()=>navigate('ToastExample')}
          title="Toast      >"
        />
        </View>
       </View>
      );
  }
}

class ButtonExampleScreen extends React.Component {
  static navigationOptions = {
    title: 'Button 按钮',
  }
  render(){
    return (
       <ButtonExample />
      );
  }
}
class ListExampleScreen extends React.Component {
  static navigationOptions = {
    title: 'List 列表',
  }
  render(){
    return (
       <ListExample />
      );
  }
}
class DialogExampleScreen extends React.Component {
  static navigationOptions = {
    title: 'Dialog 对话框',
  }
  render(){
    return (
       <DialogExample />
      );
  }
}
class InputExampleScreen extends React.Component {
  static navigationOptions = {
    title: 'Input 表单输入',
  }
  render(){
    return (
       <InputExample />
      );
  }
}
class ToastExampleScreen extends React.Component {
  static navigationOptions = {
    title: 'Toast弱提示',
  }
  render(){
    return (
       <ToastExample />
      );
  }
}

export default App = StackNavigator({
  Home:{ screen: HomeScreen },
  ButtonExample:{screen: ButtonExampleScreen },
  ListExample:{screen: ListExampleScreen },
  DialogExample:{screen: DialogExampleScreen },
  InputExample:{screen: InputExampleScreen },
  ToastExample:{screen: ToastExampleScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    height:44,
    padding:20,
    fontSize:18,
  }
});



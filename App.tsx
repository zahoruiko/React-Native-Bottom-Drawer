import React, { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

const App = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  return (
    <GestureRecognizer
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', opacity: 1 }}
      onSwipeUp={() => setIsDrawerVisible(true)}
      onSwipeDown={() => setIsDrawerVisible(false)}
    >
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isDrawerVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setIsDrawerVisible(!isDrawerVisible);
            console.log('onRequestClose');
          }}
        >
          <View style={styles.drawerContainer}>
            <Pressable
              style={styles.outsideModal}
              onPress={event => {
                if (event.target == event.currentTarget) {
                  setIsDrawerVisible(false);
                }
              }}
            >
              <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Bottom drawer title!</Text>
                <Text style={styles.modalText}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque et modi iure vitae ducimus quaerat
                  voluptate facilis officia doloribus, pariatur laudantium? Dolore nisi modi autem numquam.{' '}
                </Text>
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setIsDrawerVisible(!isDrawerVisible)}
                >
                  <Text style={styles.textStyle}>Hide drawer!</Text>
                </TouchableOpacity>
              </View>
            </Pressable>
          </View>
        </Modal>
        <Text style={{ fontSize: 20, marginBottom: 25 }}>Swipe Up</Text>
        <Text>or tap the bottom button to open the bottom drawer</Text>
        <TouchableOpacity
          style={[styles.button, styles.buttonOpen, { marginTop: 30 }]}
          onPress={() => setIsDrawerVisible(true)}
        >
          <Text style={styles.textStyle}>Show Bottom Drawer!</Text>
        </TouchableOpacity>
      </View>
    </GestureRecognizer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%'
  },
  drawerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%'
  },
  modalView: {
    width: '98%',
    backgroundColor: '#EAFAF1',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16
  },
  modalText: {
    marginBottom: 25,
    textAlign: 'justify'
  },
  button: {
    width: 200,
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: '#2196F3',
    marginBottom: 20
  },
  buttonClose: {
    backgroundColor: '#2196F3'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  outsideModal: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(1, 1, 1, 0.05)'
  }
});

export default App;

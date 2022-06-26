import React from 'react';
import {View, Text, Modal, Pressable, Image} from 'react-native';
import styles from './style';

const ModalComp = props => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.setModalVisible(prev => !prev);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => props.setModalVisible(prev => !prev)}>
            <Text style={styles.textStyle}>X</Text>
          </Pressable>
          <View>
            <Text style={styles.modalText}>{props?.choosen?.name}</Text>
            <Image source={{uri: props.choosen.image}} style={styles.image} />
            <Text style={styles.modalText}>{props?.choosen?.gender}</Text>
          </View>
          <View>
            <Text style={styles.modalText}>
              {'Species:  '}
              {props?.choosen?.species}
            </Text>
            <Text style={styles.modalText}>
              {'Status:  '}
              {props?.choosen?.status}
            </Text>
            <Text style={styles.modalText}>
              {'Created Date:  '}
              {props?.choosen?.created?.toLocaleString('en-US')}
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default ModalComp;

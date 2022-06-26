import React, {useEffect, useCallback, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  Modal,
  Dimensions,
  StyleSheet,
  Platform,
  Pressable,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCharactersAction} from '../../store/modules/app/actions';
import {CharacterCard} from '../../components/CharacterCard';

const CharacterList = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [choosen, setChoosen] = useState([]);

  const {allCharacters} = useSelector(state => state.app);

  useEffect(() => {
    getData();
  }, [getData]);

  const getData = useCallback(() => {
    dispatch(getAllCharactersAction.request({}));
  }, [dispatch]);

  const onPress = item => {
    setChoosen(item);
    setModalVisible(prev => !prev);
  };

  return (
    <FlatList
      ListHeaderComponent={() => {
        return (
          <ModalComp
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            choosen={choosen}
          />
        );
      }}
      data={allCharacters?.results}
      renderItem={({item}) => {
        return <CharacterCard item={item} onPress={onPress} />;
      }}
      keyExtractor={item => `${item.id}`}
      onEndReachedThreshold={Platform.OS === 'ios' ? 0 : 0.2}
    />
  );
};

export default CharacterList;
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
            <Image
              source={{uri: props.choosen.image}}
              style={{width: 300, height: 300, borderRadius: 40}}
            />
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalView: {
    display: 'flex',
    flex: 0.8,
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    position: 'absolute',
    left: 5,
    right: 5,
    width: 50,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2496F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

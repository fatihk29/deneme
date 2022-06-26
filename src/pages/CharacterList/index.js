import React, {useEffect, useCallback, useState} from 'react';
import {FlatList, Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCharactersAction} from '../../store/modules/app/actions';
import {CharacterCard} from '../../components/CharacterCard';
import ModalComp from '../../components/Modal';

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

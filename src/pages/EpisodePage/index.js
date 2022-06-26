import React, {useEffect, useCallback, useRef} from 'react';
import {
  View,
  FlatList,
  Text,
  StatusBar,
  StyleSheet,
  Platform,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {searchUsersAction} from '../../store/modules/app/actions';
import {EpisodeCard} from '../../components/EpisodeCard';

const EpisodePage = () => {
  const dispatch = useDispatch();
  const flatlistRef = useRef();
  const navigation = useNavigation();
  const app = useSelector(state => state.app);

  useEffect(() => {
    getData();
  }, [getData]);

  const getData = useCallback(() => {
    dispatch(searchUsersAction.request({}));
  }, [dispatch]);

  // console.log('q123 app', app.searchUser);

  const onPressCharacter = character => {
    navigation.navigate('EpisodeDetails', {
      id: character.id,
      name: character.name,
    });
  };

  return (
    <FlatList
      ref={flatlistRef}
      data={app?.searchUser?.results}
      renderItem={({item}) => {
        return (
          <EpisodeCard
            key={item.name}
            item={item}
            onPress={() => onPressCharacter(item)}
          />
        );
      }}
      // ItemSeparatorComponent={() => <View style={STYLES.separator} />}
      // ListFooterComponent={renderFooter}
      contentContainerStyle={styles.list}
      keyExtractor={item => `${item.id}`}
      onEndReachedThreshold={Platform.OS === 'ios' ? 0 : 0.2}
      // onEndReached={loadMoreHandler}
    />
  );
};

export default EpisodePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

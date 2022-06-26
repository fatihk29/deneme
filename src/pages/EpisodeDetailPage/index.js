import React, {useEffect, useCallback} from 'react';
import {useRoute} from '@react-navigation/native';
import {getEpisodeDetailAction} from '../../store/modules/app/actions';
import {View, Text, FlatList, I} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const EpisodeDetails = props => {
  const {params} = useRoute();

  const dispatch = useDispatch();

  const {episodeDetail} = useSelector(state => state.app);

  useEffect(() => {
    getData();
  }, [getData]);

  const getData = useCallback(() => {
    dispatch(getEpisodeDetailAction.request(params.id));
  }, [dispatch, params.id]);

  return (
    <FlatList
      ListHeaderComponent={() => {
        return (
          <View>
            <Text>{episodeDetail.name}</Text>
            <Text>{episodeDetail.episode}</Text>
            <Text>{episodeDetail.air_date}</Text>
          </View>
        );
      }}
      data={episodeDetail.characters}
      renderItem={(item, index) => {
        return (
          <View key={index + 20}>
            <Text>{item.toString()}</Text>
          </View>
        );
      }}
      keyExtractor={item => item.id}
    />
  );
};

export default EpisodeDetails;

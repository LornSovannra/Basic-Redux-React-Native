import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setAge, setName } from '../../../redux/actions/userAction';
import PrimaryButon from '../../shared/buttons/PrimaryButon';
import Seperator from '../../shared/seperators/Seperator';

export default function index() {
  const dispatch = useDispatch()
  const {name, age} = useSelector(state => state.user);

  let nameX = name !== '' ? name : 'Guest';

  function handleLogin() {
    dispatch(setName("Lorn Sovannra"))
    dispatch(setAge(21))
  }

  function handleLogout() {
    dispatch(setName(''));
    dispatch(setAge(0));
  }

  return (
    <View style={styles.wrapper}>
      <Text>
        Hello, {nameX}! You're {age} years old.
      </Text>
      <Seperator py={10} />
      <PrimaryButon title="Login" bgColor="blue" onAction={handleLogin} />
      <Seperator py={5} />
      <PrimaryButon title="Logout" bgColor="red" onAction={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

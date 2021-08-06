import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import foto from './assets/reducedMe.png';

const App = () => {
  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>André Myszko</Text>
          <Text style={style.funcao}>Software Developer</Text>
          <View style={style.redes_sociais}>
            <Icon name="github" size={25} />
            <Icon name="linkedin" size={25} />
            <Icon name="youtube" size={25} />
            <Icon name="instagram" size={25} />
          </View>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 55,
  },
  foto: {
    width: 150,
    height: 250,
    borderRadius: 125,
    borderWidth: 3,
    borderColor: '#000000',
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: 20,
  },
});

export default App;

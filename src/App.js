import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import foto from './assets/reducedMe.png';

const App = () => {
  function handleRedeSocial(rede_social) {
    switch (rede_social) {
      case 'github':
        Alert.alert('GitHub', 'https://github.com/AndreMyszko');
        break;
      case 'linkedin':
        Alert.alert('LinkedIn', 'https://linkedin.com/in/andremyszko');
        break;
      case 'youtube':
        Alert.alert('YouTube', 'https://youtube');
        break;
      case 'instagram':
        Alert.alert('Instagram', 'https://instagram');
        break;
    }
  }

  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto} />
          <Text style={style.nome}>ANDRÉ MYSZKO</Text>
          <Text style={style.funcao}>Software Developer</Text>
          <View style={style.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Icon name="github" size={25} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Icon name="linkedin" size={25} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('youtube')}>
              <Icon name="youtube" size={25} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('instagram')}>
              <Icon name="instagram" size={25} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.card}>
          <View style={style.card_header}>
            <Text>FRONT END</Text>
          </View>
          <View style={style.card_content}>
            <Text style={style.card_content_text}>
              #Angular-8 #Vue.js #ReactiveNative
            </Text>
          </View>
        </View>
        <View style={style.card}>
          <View style={style.card_header}>
            <Text>BACK END</Text>
          </View>
          <View style={style.card_content}>
            <Text style={style.card_content_text}>
              #Java-SpringBoot #Postgres #GoogleCloud
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#F8F8FF',
    flex: 1,
    alignItems: 'center',
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 125,
    borderWidth: 3,
    borderColor: '#000000',
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 5,
  },
  funcao: {
    color: '#000000',
    marginBottom: 10,
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
    marginTop: 20,
    borderRadius: 25,
    borderWidth: 1,
    padding: 5,
    paddingHorizontal: 10,
    borderColor: '#000000',
    backgroundColor: '#FFFFFF',
  },
  card: {
    width: '80%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000000',
    marginTop: 15,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  card_content: {
    marginTop: 10,
  },
  card_content_text: {
    color: 'grey',
    marginBottom: 10,
  },
});

export default App;

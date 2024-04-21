import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import useFotos from '../hooks/useFotos';
import Rodape from './Rodape';
import iconeEnviar from '../imagens/send.png';

const largura = Dimensions.get('screen').width;

export default function Post() {
  const fotos = useFotos();
  const inputComentario = useRef();
  const [comentario, setComentario] = useState('');
  const [listaDeComentarios, setListaDeComentarios] = useState([]);

  const incluirComentario = () => {
    console.log(comentario);

    if (comentario !== '') {
      setListaDeComentarios([
        ...listaDeComentarios,
        {usuario: 'novoUsuario', texto: comentario},
      ]);
      console.log(listaDeComentarios);

      setComentario('');

    }
  };

  return (
    <View>
      <FlatList
        keyExtractor={item => String(item.id)}
        data={fotos}
        renderItem={({item}) => (
          <View>
            <View style={estilos.perfil}>
              <Image
                source={{uri: item.fotoUsuario}}
                style={estilos.imagemPerfil}
              />
              {console.log(item.fotoUsuario)}
              <Text style={estilos.nomeDeUsuario}>{item.usuario}</Text>
            </View>

            <Image
              source={{uri: item.fotoPost}}
              style={estilos.imagemPostagem}
            />
            {console.log(item.fotoPost)}

            <Rodape
              curtidas={item.likes}
              legenda={item.legenda}
              usuario={item.usuario}
            />

            <FlatList
              keyExtractor={item => String(item.usuario)}
              data={item.comentarios}
              renderItem={({item: comentario}) =>
                comentario !== '' ? (
                  <View style={estilos.comentario}>
                    <Text style={estilos.usuario}>{comentario.usuario}</Text>

                    <Text>{comentario.texto}</Text>
                  </View>
                ) : null
              }
            />

            <FlatList
              data={listaDeComentarios}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View style={estilos.comentario}>
                  <Text style={estilos.usuario}>{item.usuario}</Text>

                  <Text>{item.texto}</Text>
                </View>
              )}
            />

            <View style={estilos.novoComentario}>
              <TextInput
                style={estilos.input}
                placeholder="Adicione um comentário"
                ref={inputComentario}
                onChangeText={valorComentario => setComentario(valorComentario)}
              />

              <TouchableOpacity onPress={incluirComentario}>
                <Image style={estilos.iconeEnviar} source={iconeEnviar} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  novoComentarioAdicionado: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginLeft: 11,
  },

  novoComentario: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  iconeEnviar: {
    width: 30,
    height: 30,
  },

  input: {
    height: 40,
    flex: 1,
  },
  usuario: {
    fontWeight: 'bold',
    marginRight: 4,
    alignItems: 'center',
  },

  comentario: {
    flexDirection: 'row',
    marginLeft: 12,
  },
  imagemPostagem: {
    width: largura,
    height: largura,
    borderRadius: 6,
  },

  imagemPerfil: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  perfil: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  nomeDeUsuario: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 4,
    color: 'black',
  },
});

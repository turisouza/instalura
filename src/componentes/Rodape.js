import react, {useState} from 'react';
import {FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import coracaoSemCurtir from '../imagens/s2.png';
import coracaoCurtido from '../imagens/s2-checked.png';
import useFotos from '../hooks/useFotos';

export default function Rodape({curtidas, legenda, usuario, comentariosTexto, comentariosUsuario}) {
  const [coracao, setCoracao] = useState(coracaoSemCurtir);

  const [likes, setlikes] = useState(curtidas);

  const fotos = useFotos();

  function alteraCurtidas() {
    if (coracao !== coracaoCurtido) {
      setCoracao(coracaoCurtido);
      setlikes(likes + 1);
    } else {
      setCoracao(coracaoSemCurtir);
      setlikes(likes - 1);
    }
  }

  function exibeLikes() {
    return (
            likes > 0 ? (
        <Text style={estilos.likes}>
          {likes} {likes > 1 ? 'curtidas' : 'curtida'}
        </Text>
      ) : null
    )

  }

  function exibeLegenda() {
    return (
        legenda !== 0 ? <View style={estilos.comentario}>
        <Text style={estilos.usuario}>{usuario}</Text>

        <Text>{legenda}</Text>
      </View> : null
      
      
    )
  }

  function exibeCoracao() {
    return (
        <TouchableOpacity onPress={() => alteraCurtidas()}>
        <Image source={coracao} style={estilos.coracao} />
      </TouchableOpacity>
    )
  }

  return (

   
    <View style={estilos.rodape}>
      {exibeCoracao()}
      {exibeLikes()}
      {exibeLegenda()}    
  
    </View>
  );
}

const estilos = StyleSheet.create({
  usuario: {
    fontWeight: 'bold',
    marginRight: 4,
    alignItems: 'center',
  },

  comentario: {
    flexDirection: 'row',
    marginTop: 4,
  },
  rodape: {
    marginLeft: 10,
    marginTop: 10
  },
  coracao: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  likes: {
    fontWeight: 'bold',
  },
});

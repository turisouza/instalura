import react, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import coracaoSemCurtir from '../imagens/s2.png';
import coracaoCurtido from '../imagens/s2-checked.png';

const numeroDeCurtidasAleatorio = () => {
  return Math.floor(Math.random() * 1000);
};

export default function Rodape() {
  const [coracao, setCoracao] = useState(coracaoSemCurtir);

  const [somarCurtidas, setSomarCurtidas] = useState(numeroDeCurtidasAleatorio);

  function alteraCurtidas() {
    if (coracao !== coracaoCurtido) {
      setCoracao(coracaoCurtido);
      setSomarCurtidas(somarCurtidas + 1);
    } else {
      setCoracao(coracaoSemCurtir);
      setSomarCurtidas(somarCurtidas - 1);
    }
  }

  return (
    <View style={estilos.rodape}>
      <TouchableOpacity onPress={() => alteraCurtidas()}>
        <Image source={coracao} style={estilos.coracao} />
      </TouchableOpacity>
      {somarCurtidas > 0 ? (
        <Text style={estilos.likes}>
          {somarCurtidas} {somarCurtidas > 1 ? 'curtidas' : 'curtida'}
        </Text>
      ) : null}
    </View>
  );
}

const estilos = StyleSheet.create({
  rodape: {
    margin: 10,
  },
  coracao: {
    width: 40,
    height: 40,
    marginBottom: 3,
  },
  likes: {
    fontWeight: 'bold',
  },
});

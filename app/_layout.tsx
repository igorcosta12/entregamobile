import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function RootLayout() {
  const [display, setDisplay] = useState("")

  function adicionar(valor) {
    setDisplay(display + valor);
  }
  function limpar() {
    setDisplay("");
  }
 function calcular() {
    const resultado = eval(display);
    setDisplay(resultado.toString());
}
  return (
    <View style={styles.container}>
        <Text style={styles.display}>{display}</Text>
        
        <View style={styles.linha}>
          <Botao texto="7" onPress={() => adicionar("7")} />
          <Botao texto="8" onPress={() => adicionar("8")} />  
          <Botao texto="9" onPress={() => adicionar("9")} />
          <Botao texto="/" onPress={() => adicionar("/")} />  
        </View>

        <View style={styles.linha}>
          <Botao texto="4" onPress={() => adicionar("4")} />
          <Botao texto="5" onPress={() => adicionar("5")} />  
          <Botao texto="6" onPress={() => adicionar("6")} />
          <Botao texto="*" onPress={() => adicionar("*")} />  
        </View>

        <View style={styles.linha}>
          <Botao texto="1" onPress={() => adicionar("1")} />
          <Botao texto="2" onPress={() => adicionar("2")} />  
          <Botao texto="3" onPress={() => adicionar("3")} />
          <Botao texto="-" onPress={() => adicionar("-")} />  
        </View>

        <View style={styles.linha}>
          <Botao texto="0" onPress={() => adicionar("0")} />
          <Botao texto="C" onPress={limpar} />  
          <Botao texto="=" onPress={calcular} />
          <Botao texto="+" onPress={() => adicionar("+")} />  
        </View>
    </View>

  );
}
function Botao({texto, onPress}) {
  return(
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.textoBotao}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end"
  },
  display:{
    fontSize: 40,
    textAlign: "right",
    margin: 20,
  },
  linha:{
    flexDirection: "row"
  },
  botao: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    borderWidth: 1,
  },
  textoBotao: {
    fontSize: 24,
  }
});
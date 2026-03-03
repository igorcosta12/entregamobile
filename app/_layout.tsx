import { useState } from "react"
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
    setDisplay(String(resultado));
  }
  return (
    <View style={styles.container}>
        <Text style={styles.display}>{display}</Text>
        
        <Viewc style={styles.linha}>
          <botao texto="7" onPress={() => adicionar("7")} />
          <botao texto="8" onPress={() => adicionar("8")} />  
          <botao texto="9" onPress={() => adicionar("9")} />
          <botao texto="/" onPress={() => adicionar("/")} />  
        </View>

        <Viewc style={styles.linha}>
          <botao texto="4" onPress={() => adicionar("4")} />
          <botao texto="5" onPress={() => adicionar("5")} />  
          <botao texto="6" onPress={() => adicionar("6")} />
          <botao texto="*" onPress={() => adicionar("*")} />  
        </View>

        <Viewc style={styles.linha}>
          <botao texto="1" onPress={() => adicionar("1")} />
          <botao texto="2" onPress={() => adicionar("2")} />  
          <botao texto="3" onPress={() => adicionar("3")} />
          <botao texto="-" onPress={() => adicionar("-")} />  
        </View>

        <Viewc style={styles.linha}>
          <botao texto="0" onPress={() => adicionar("0")} />
          <botao texto="C" onPress={limpar} />  
          <botao texto="=" onPress={calcular} />
          <botao texto="+" onPress={() => adicionar("+")} />  
        </View>
    </View>

  );
}
Function Botao({texto, onPress}) {
  return(
    <TouchableOpacity style={StyleSheet.botao} onPress={onPress}>
      <Text style={StyleSheet.textoBotao}>{texto}</Text>
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
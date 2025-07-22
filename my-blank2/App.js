import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";




const ModalPersonalizado = ({ visible, onClose, children }) => (
  <Modal
    visible={visible}
    transparent={true}
    animationType="fade"
    onRequestClose={onClose}
  >
    <View style={styles.modalBackground}>
      <View style={styles.modalBox}>
        {children}
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.buttonText}>CERRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);







export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [mostrarTexto, setMostrarTexto] = useState("");

  const handleMostrar = () => {
    setMostrarTexto(inputValue);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.openButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>MOSTRAR MODAL</Text>
      </TouchableOpacity>

      <ModalPersonalizado
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      >
        <Text style={styles.modalText}>¡Este es un modal estructurado!</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe algo aquí..."
          placeholderTextColor="#aaa"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <TouchableOpacity style={styles.showButton} onPress={handleMostrar}>
          <Text style={styles.buttonText}>MOSTRAR</Text>
        </TouchableOpacity>
        {mostrarTexto !== "" && (
          <Text style={styles.resultado}>
            Lo escrito:{" "}
            <Text style={styles.resultadoTexto}>{mostrarTexto}</Text>
          </Text>
        )}
      </ModalPersonalizado>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    alignItems: "center",
    justifyContent: "center",
  },
  openButton: {
    backgroundColor: "#2196F3",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "white",
    padding: 28,
    borderRadius: 18,
    width: 320,
    alignItems: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalText: {
    fontSize: 22,
    marginBottom: 18,
    textAlign: "center",
    fontWeight: "bold",
    color: "#222",
  },
  input: {
    width: "100%",
    borderColor: "#2196F3",
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
    fontSize: 17,
    backgroundColor: "#f9f9f9",
    color: "#222",
  },
  showButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 14,
    elevation: 2,
  },
  closeButton: {
    backgroundColor: "#FF5252",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 8,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    letterSpacing: 1,
  },
  resultado: {
    marginTop: 10,
    fontSize: 17,
    color: "#333",
    textAlign: "center",
  },
  resultadoTexto: {
    color: "#2196F3",
    fontWeight: "bold",
  },
});
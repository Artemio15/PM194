import { SafeAreaView, FlatList, SectionList, StyleSheet, View,  Text, ActivityIndicator, Button } from 'react-native';
import React, { useState, useEffect, use } from 'react';



export default function App() {
  const [frutas, setFrutas] = useState([]);
  const [verduras, setVerduras] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_URL = 'http://127.0.0.1:8000/productos/';

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setFrutas(data.frutas);
        setVerduras(data.verduras);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.nombre}>{item.nombre}</Text>
    </View>
  );

 const sections = [
    { title: 'Frutas', data: frutas },
    { title: 'Verduras', data: verduras },
  ];

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.texto}>Cargando datos...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lista de Frutas (FlatList)</Text>
      <FlatList
        data={frutas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />

      <Text style={styles.title}>Frutas y Verduras (SectionList)</Text>
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      /> 
    </SafeAreaView>
  );
  
}



// 4. Estilos simples
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 12,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#ddd",
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 10,
    marginVertical: 4,
    borderRadius: 5,
  },
  nombre: {
    fontSize: 18,
  },
});
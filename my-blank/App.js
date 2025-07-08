import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  SectionList,
  StyleSheet,
  ActivityIndicator,
  Image,
  ScrollView,
  Alert,
  ImageBackground,
  TouchableOpacity,
  Modal,
} from 'react-native';

const CATEGORIES = {
  Ficción: 'subject:fiction',
  Historia: 'subject:history',
  Tecnología: 'subject:technology',
};

export default function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Ficción');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const fetchBooks = async () => {
    setLoading(true);
    try {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${CATEGORIES[selectedCategory]}&maxResults=40`;
      const res = await fetch(url);
      const data = await res.json();

      if (!data.items) throw new Error('No se encontraron libros');

      // Agrupar por autor
      const grouped = {};
      data.items.forEach((item) => {
        const volume = item.volumeInfo;
        const author = (volume.authors && volume.authors[0]) || 'Autor desconocido';

        if (!grouped[author]) grouped[author] = [];

        grouped[author].push({
          id: item.id,
          title: volume.title,
          thumbnail: volume.imageLinks?.thumbnail,
          description: volume.description || 'Sin descripción disponible',
          publisher: volume.publisher || 'Desconocida',
          authors: volume.authors || ['Autor desconocido'],
        });
      });

      // Filtrar autores con al menos 2 libros
      const sections = Object.keys(grouped)
        .filter((author) => grouped[author].length >= 2)
        .map((author) => ({
          title: `${author} (${grouped[author].length} libros)`,
          data: grouped[author],
        }));

      if (sections.length === 0) {
        throw new Error('No se encontraron autores con al menos 2 libros.');
      }

      setBooks(sections);
    } catch (err) {
      Alert.alert('Error', err.message);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [selectedCategory]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedBook(item);
        setModalVisible(true);
      }}
    >
      <View style={styles.item}>
        {item.thumbnail && <Image source={{ uri: item.thumbnail }} style={styles.image} />}
        <View style={{ flex: 1, paddingLeft: 10 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.publisher}>Editorial: {item.publisher}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f' }}
        style={styles.headerBackground}
      >
        <Text style={styles.headerTitle}>Libros por Categoría</Text>
      </ImageBackground>

      <View style={styles.categoryButtons}>
        {Object.keys(CATEGORIES).map((cat) => (
          <TouchableOpacity
            key={cat}
            onPress={() => setSelectedCategory(cat)}
            style={[
              styles.categoryButton,
              selectedCategory === cat && styles.categoryButtonSelected,
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === cat && styles.categoryTextSelected,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#6200ee" style={{ marginTop: 20 }} />
      ) : (
        <SectionList
          sections={books}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
          ListEmptyComponent={
            <Text style={{ textAlign: 'center', marginTop: 20, color: '#555' }}>
              No hay libros suficientes para mostrar agrupaciones.
            </Text>
          }
        />
      )}

      {/* Modal Detalle */}
      <Modal visible={modalVisible} animationType="slide">
        <ScrollView contentContainerStyle={styles.modalContainer}>
          {selectedBook?.thumbnail && (
            <Image source={{ uri: selectedBook.thumbnail }} style={styles.modalImage} />
          )}
          <Text style={styles.modalTitle}>{selectedBook?.title}</Text>
          <Text style={styles.modalAuthor}>Autor(es): {selectedBook?.authors?.join(', ')}</Text>
          <Text style={styles.modalPublisher}>Editorial: {selectedBook?.publisher}</Text>
          <Text style={styles.modalDescription}>{selectedBook?.description}</Text>

          {/* Botón cerrar estilizado */}
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f4f4' },
  headerBackground: {
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 8,
  },
  categoryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#ccc',
    borderRadius: 6,
  },
  categoryButtonSelected: {
    backgroundColor: '#6200ee',
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
  categoryTextSelected: {
    color: '#fff',
  },
  sectionHeader: {
    fontSize: 18,
    backgroundColor: '#ddd',
    padding: 6,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 4,
    marginHorizontal: 10,
    borderRadius: 6,
    elevation: 1,
  },
  image: { width: 60, height: 90, borderRadius: 4 },
  title: { fontSize: 16, fontWeight: 'bold' },
  publisher: { fontSize: 12, color: '#666', marginTop: 4 },

  // Modal
  modalContainer: { padding: 20 },
  modalImage: { width: 120, height: 180, alignSelf: 'center', borderRadius: 8, marginBottom: 20 },
  modalTitle: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 8 },
  modalAuthor: { fontSize: 16, textAlign: 'center', marginBottom: 4 },
  modalPublisher: { fontSize: 14, textAlign: 'center', marginBottom: 10 },
  modalDescription: { fontSize: 14, lineHeight: 20, color: '#333' },

  closeButton: {
    backgroundColor: '#6200ee',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 30,
    alignSelf: 'center',
    elevation: 3,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

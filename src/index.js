import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar } from 'react-native';

import api from './services/api';

// para poder usar o scroll, precisamos importar o ScrollView do react-native,
// mas quando estivermos utilizando listas, utilizaremos FlatList do react-native, 
// porque é mais perfomático.



// Não possui estilização própria.
// Todos componentes possuem por padrão display flex.
// Não possui herança.

// View = div, footer, header, main, aside, section
// Text = p, span, strong, h1, h2, h3..

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data)
    })
  }, [])

  return (
    <>
      <StatusBar barStyle="light-content" background-color="#7159c1" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects} // precisa ser um array
          keyExtractor={project => project.id}
          renderItem={({ item: project }) => (
            <Text style={styles.project}>{project.title}</Text>
          )}
        />
      </SafeAreaView>


      {/* <ScrollView style={styles.container}>
        {projects.map(project => (
          <Text style={styles.project} key={project.id}>{project.title}</Text>
        ))}
      </ScrollView> */}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  project: {
    color: '#fff',
    fontSize: 30,
  }
});
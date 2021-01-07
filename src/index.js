import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

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

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: 'Renan Lima'
    })

    const project = response.data

    setProjects([...projects, project])
  }

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
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.button}
          onPress={handleAddProject}>
          <Text style={styles.buttonText}>Adicionar projeto</Text>
        </TouchableOpacity>
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
  },
  button: {
    backgroundColor: "#fff",
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});
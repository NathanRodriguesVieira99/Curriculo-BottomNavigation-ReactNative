import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons'
import React from 'react'

export default function DadosNathan() {
  return (
    <View style={s.dadosContainer}>
      <Text style={s.nome}>
        Nathan
      </Text>
      <Text style={s.endereco}>
        Rua praia da rosa 1245
      </Text>
      <Text style={s.tel}>
        (21) 96731-3703
      </Text>
      <Text style={s.email}>
        nathanrodriguesvieira99@gmail.com
      </Text>
      <Text style={s.bio}>
        Estudante de Engenharia de Software
        Cursando Engenharia de Software no Instituto Infnet, com conhecimentos em HTML, CSS e JavaScript, ReactJs e Sass. Focado em projetos pessoais e cursos para aprimorar minhas habilidades, incluindo Git, GitHub, e a criação de interfaces web. Atualmente, estou iniciando meus estudos em TypesScript,Next.JS e TailwindCSS.
      </Text>
      <View style={s.socialMediaContainer}>
        <View style={s.socialMediaContainer}>
          <TouchableOpacity>
            <FontAwesome6 name='linkedin' size={50} color='#0077b5' />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome6 name='instagram' size={50} color='#e1306c' />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome6 name='youtube' size={50} color='#ff0000' />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome6 name='github' size={50} color='#333' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}



const s = StyleSheet.create({
  dadosContainer: {
    marginLeft: 30,
    marginTop: 20,
    gap: 10,
    padding: 5
  },
  nome: {
    fontWeight: 'semibold',
    fontSize: 32
  },
  endereco: {
    fontSize: 20
  },
  tel: {
    fontSize: 18
  },
  email: {
    fontSize: 20
  },
  bio: {
    marginTop: 20,
    lineHeight: 25,
    fontSize: 19,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 35,
    marginTop: 45
  }
})
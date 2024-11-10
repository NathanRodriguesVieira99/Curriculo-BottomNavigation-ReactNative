import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function FormacaoAcademica() {
  return (
    <>
      <View style={s.container}>
        <Text style={s.formacaoAcademica}>Formação Acadêmica</Text>
        <View>
          <Text style={s.andamento}>Em andamento:</Text>
        </View>
        <Text style={s.eds}>Engenharia de softwere - Infnet</Text>
      </View>
    </>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 45
  },
  formacaoAcademica: {
    fontSize: 33,
    fontWeight: 'semibold',
  },
  andamento: {
    top: 25,
    width: '100%',
    fontSize: 25
  },
  eds: {
    top: 32,
    fontSize: 20
  }
})
import { View, Text } from 'react-native'
import React from 'react'

import DadosNathan from '@/src/components/DadosNathan/DadosNathan'
import ProfilePic from '@/src/components/ProfilePic/Profilepic'

export default function Profile() {
  return (
    <>
      <ProfilePic />
      <DadosNathan />
    </>

  )
}
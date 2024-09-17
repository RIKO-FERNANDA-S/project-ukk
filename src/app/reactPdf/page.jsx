import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


function page() {
  return (
    <Document>
        <Page size="A4">
        <header className='flex w-full flex-col justify-center text-center'>
            <h1>SMK DARMA SISWA 1 SIDOARJO</h1>
            <h2>PENELUSURAN TAMATAN/ALUMNI</h2>
        </header>
        </Page>
    </Document>
  )
}

export default page;
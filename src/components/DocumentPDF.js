import React from 'react'
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import md5 from "md5";

const DocumentPDF = ({
  badges,
}) => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 24,
      marginHorizontal: 24,
    },
    image: {
      height: 100,
      width: 100,
      borderRadius: '50%',
      objectFit: 'cover',
    },
    description: {
      display: 'flex',
      justifyContent: 'center',
      marginLeft: 12,
    },
    text: {
      fontSize: 16,
      color: '#000',
    },
    textLight: {
      fontSize: 12,
      color: '#2e2e2e',
      marginTop: 12,
    }
  });

  return (
    <Document>
      <Page>
        {badges &&
          badges.map((badge, index) => {
            const hash = md5(badge.email);

            return (
              <View key={index} style={styles.container}>
                <Image
                  style={styles.image}
                  src={`https://www.gravatar.com/avatar/${hash}?d=identicon`}
                  alt={badge.firstName}
                />

                <View style={styles.description}>
                  <Text style={styles.text}>{badge.firstName} {badge.lastName}</Text>
                  <Text style={styles.textLight}>@{badge.twitter}</Text>
                  <Text style={styles.textLight}>{badge.jobTitle}</Text>
                </View>
              </View>
            );
          })
        }
      </Page>
    </Document>
  )
}

export default DocumentPDF
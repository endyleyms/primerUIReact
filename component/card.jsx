import { StyleSheet, View, Image, Text } from 'react-native';

const Card = ({author, about, comments, tags, picture }) => {
    return(
        <View style={styles.container}>
            <View>
                <Image
                style={styles.tinyLogo}
                source={picture}
                />            
            </View>
            <Text style={styles.author}><strong>Author:{author}</strong></Text>
            <Text style={styles.about}><strong>About:</strong> {about}</Text>
            <Text style={styles.author}><strong>Tags:</strong> {tags}</Text>
            <Text><strong>Comments: {comments.length}</strong></Text>  
              
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 8,
      paddingVertical: 25,
      paddingHorizontal: 25,
      marginVertical: 3,
      alignItems: 'center',
      justifyContent: 'center',
      width: 300, 
      height: 300,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: {
          width: 0,
          height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      
      elevation: 10,
    },
    author:{
        textAlign: 'center',

    },
    about:{
        textAlign: 'justify'        
    }

  });

export default Card

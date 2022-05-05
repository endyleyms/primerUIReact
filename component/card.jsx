import { View, Image, Text } from 'react-native';

const Card = ({picture, author, about, tags, comments}) => {
    return(
        <View>
            <Image source={picture}/>
            <Text>{author}</Text>
            <Text>{about}</Text>
            <Text>{tags}</Text>
            <Text>{comments}</Text>
        </View>
    );
};

export default Card

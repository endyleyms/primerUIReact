import { View, Image, Text } from 'react-native';

const Card = ({author, about}) => {
    console.log(author)
    return(
        <View>
            <Text>{author}</Text>
            <Text>{about}</Text>
        </View>
    );
};

export default Card

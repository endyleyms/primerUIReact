import { View, Image, Text, FlatList } from 'react-native';

const Comments = ({comments})=>(
    <View>
        <Text>{comments}</Text>
    </View>
)

const Card = ({author, about, comments}) => {
    const renderCommetns = ({item}) =>{
        <Comments comments={item.Comments} />
    }
    return(
        <View>
            <Text>{author}</Text>
            <Text>{about}</Text>
            <FlatList
                data={comments}
                renderItem={renderCommetns}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default Card

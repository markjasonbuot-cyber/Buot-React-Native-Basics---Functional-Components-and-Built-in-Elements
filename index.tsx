import { Text, View, Button, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { SearchBar } from "../components/searchbar";

const Home = () => {
    const router = useRouter();

    const DATA = [ 
        { id: '1', title: 'First Item' },
        { id: '2', title: 'Second Item' },
        { id: '3', title: 'Third Item' },
    ];

     return ( 
        <View style={{ flex: 1, paddingTop: 50 }} >
            <SearchBar />
            <Text style={{ fontSize: 20, textAlign: 'center' }}> This is home page</Text>
            <FlatList data={DATA} renderItem={({ item }) => (
                <View style={{ padding: 20, borderBottomWidth: 1 }}>
                    <Text>{item.title}</Text>
                </View>
            )}
            keyExtractor={item => item.id} />
            <Button title="Go to Orders" onPress={() => router.push("/Orders")} />
        </View>
     );
};

export default Home;
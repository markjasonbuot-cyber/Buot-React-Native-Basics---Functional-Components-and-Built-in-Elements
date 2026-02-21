import { Text, View } from "react-native";
import SearchBar from "../components/searchbar";

const Orders = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <SearchBar />
            <Text style={{ fontSize: 20 }} >This is the Orders Page</Text>
        </View>
    );
};
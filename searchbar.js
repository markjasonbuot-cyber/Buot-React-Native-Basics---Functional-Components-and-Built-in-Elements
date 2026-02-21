import { TextInput, View } from "react-native";

const SearchBar = () => {
    return (
        <View style={{ padding: 10 }}>
            <TextInput 
            placeholder="Search here..."
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, paddingLeft: 10 }} />

        </View>
    );
};
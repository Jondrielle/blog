import React, {useContext} from "react";
import {Text,StyleSheet,View,FlatList,TouchableOpacity} from "react-native";
import {Context} from "../context/BlogContext";
import {Feather} from "@expo/vector-icons";

const IndexScreen = (props) => {

	const {state,deleteBlogPost} = useContext(Context);

	return <View>
		<FlatList 
			keyExtractor = { (blog) => {return blog.title } }
			data = {state}
			renderItem = { ({item}) => {
			return <TouchableOpacity onPress = { () => {props.navigation.navigate("Show", 
									 {id: item.id})} }>
				<View style = {styles.row}>
				<Text style = {styles.font}>{item.title} - {item.id}</Text> 
				<TouchableOpacity onPress = { () => {deleteBlogPost(item.id)} }>
					<Feather name = "trash"
							 size = {30}/>
				</TouchableOpacity>
				</View>
			</TouchableOpacity>
			} 
		}
		/>
	</View>
}

const styles = StyleSheet.create({
	add:{
		fontSize: 50
	},
	font:{
		fontSize:30
	},
	row:{
		flexDirection: 'row',
		justifyContent: "space-between"
	}
});

IndexScreen.navigationOptions = (props) => {
	return {
			headerRight: () => (
				<TouchableOpacity onPress = { () => {props.navigation.navigate("Create")} }>
					<Feather name = "plus" size = {30} />
				</TouchableOpacity>
			)
	};
}

export default IndexScreen;


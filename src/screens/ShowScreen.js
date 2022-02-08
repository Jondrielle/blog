import React, {useContext} from "react";
import {TouchableOpacity,View,Text,StyleSheet} from "react-native";
import {Context} from "../context/BlogContext";
import {FontAwesome} from "@expo/vector-icons";

const ShowScreen = (props) => {
	const {state} = useContext(Context);

	const blogID = props.navigation.getParam("id");

	const blogPost = state.find( (blogPost) => { 
		return blogPost.id === blogID} );

	return <View>
		<Text>{blogPost.title}</Text>
		<Text>{blogPost.content}</Text>
	</View>
}

const styles = StyleSheet.create({});

ShowScreen.navigationOptions = (props) => {
	return {
		headerRight: () => (
			<TouchableOpacity onPress = { () => {props.navigation.navigate("Edit",
			{id: props.navigation.getParam("id")}) } } >
				<FontAwesome name = "pencil" size = {30}/>
			</TouchableOpacity>
		)
	};
}

export default ShowScreen;
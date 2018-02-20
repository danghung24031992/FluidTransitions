import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { FluidNavigator, Transition } from './../lib/';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',		
		margin: 80,
		backgroundColor: '#FFF',
	},	
	screen1: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-start',
		padding: 20,
	},
	screen2: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'flex-end',
		padding: 20,
	},
	circle: {
		width: 20,
		height: 20,
		borderRadius: 20,
		backgroundColor: '#EF4444'
	},
	circle2: {
		width: 100,
		height: 100,
		borderRadius: 100,
		backgroundColor: '#EF4444'
	}
});

const Screen1 = (props) => (
	<View style={styles.container}>
		<Text>Screen 1</Text>
		<View style={styles.screen1}>
			<Transition shared='circle'>
				<View style={styles.circle}/>
			</Transition>
		</View>
		<Button
			title='Next'
			onPress={() => props.navigation.navigate('screen2')}
		/>
	</View>
);

const Screen2 = (props) => (
	<View style={styles.container}>
		<Text>Screen 2</Text>
		<View style={styles.screen2}>
			<Transition shared='circle'>
				<View style={styles.circle2}/>
			</Transition>
		</View>
		<Button
			title='Back'
			onPress={() => props.navigation.goBack()}
		/>
	</View>
);

const Navigator = FluidNavigator({
	screen1: { screen: Screen1 },
	screen2: { screen: Screen2 },
});

export default () => (
	<Navigator />
);
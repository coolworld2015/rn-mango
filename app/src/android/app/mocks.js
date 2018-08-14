'use strict';

import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	Navigator,
	TouchableHighlight,
	TouchableWithoutFeedback,
	TouchableOpacity,
	WebView,
	DrawerLayoutAndroid,
	ViewPagerAndroid
} from 'react-native';

import NavigationExperimental from 'react-native-deprecated-custom-components';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

class SampleApp extends Component {
	constructor(props) {
		super(props);	
	}
 
	render() {
		return (
			<AppContainer />
		);
	}
}
//#009698
class ViewPager extends Component {
	constructor(props) {
		super(props);	
	}
 
	render() {
		return (
			<View style={{flex: 1}}>
				<View style={{flex: 1, backgroundColor: 'white'}}>
					<Text style={{color: 'black'}}>
						Header
					</Text>
				</View>
				
				<View style={{flex: 5, backgroundColor: 'white'}}>		
					<ViewPagerAndroid 
						style={{flex: 1}}
						initialPage={0}>

						<View style={{backgroundColor: 'blue'}}>
							<Text style={{color: 'white'}}>
								First page
							</Text>
						</View>      
						<View style={{backgroundColor: 'green'}}>
							<Text style={{color: 'white'}}>
								Second page
							</Text>
						</View>			
						<View style={{backgroundColor: 'red'}}>
							<Text style={{color: 'white'}}>
								Third page
							</Text>
						</View>

					</ViewPagerAndroid>
	 
				</View>
			</View>
		);
	}
}

class DrawerLayout extends Component {
	constructor(props) {
		super(props);	
	}
	
    componentDidMount() {
    }
		
	onBack() {
		this.props.navigator.pop();
	}	
	
    onMenu() {
        this.refs['DRAWER_REF'].openDrawer();
    }
	
    onLogOut() {
        this.refs['DRAWER_REF'].closeDrawer();
    }
		
	_handlePress1() {
		this.props.navigator.pop();
	}	
	
	_handlePress() {
		//this.props.navigator.pop();
		this.props.navigator.push(this.props.routes[2]);
	}
	
	render() {
		var navigationView = (
			<View style={{flex: 1, backgroundColor: '#fff'}}>
				<Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
					DrawerLayoutAndroid
				</Text>
				
				<TouchableHighlight
					onPress={() => this.onLogOut()}
					style={styles.button}>
					<Text style={styles.buttonText}>
						Log out
					</Text>
				</TouchableHighlight>				
				
				<TouchableHighlight
					onPress={() => this.onBack()}
					style={styles.button}>
					<Text style={styles.buttonText}>
						Back
					</Text>
				</TouchableHighlight>
			</View>
		)
		
		return (
			<DrawerLayoutAndroid
				ref={'DRAWER_REF'}
				drawerWidth={300}
				drawerPosition={DrawerLayoutAndroid.positions.Left}
				renderNavigationView={() => navigationView}>
				
				<View style={[styles.container, {backgroundColor: 'purple'}]}>
					<Text style={styles.welcome}>This is page two!</Text>

					<TouchableOpacity onPress={this.onMenu.bind(this)}>
						<View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'black'}}>
							<Text style={styles.welcome}>Go to Menu</Text>
						</View>
					</TouchableOpacity>

					<View style={{margin: 10}}></View>	

					<TouchableOpacity onPress={this._handlePress1.bind(this)}>
						<View style={{paddingVertical: 20, paddingHorizontal: 20, backgroundColor: 'black'}}>
							<Text style={styles.welcome}>Go back</Text>
						</View>
					</TouchableOpacity>	
				</View>				
 
			</DrawerLayoutAndroid>
		);
	}
}

class AppContainer extends Component {
	constructor(props) {
		super(props);
	}
	//<ScrollableTabView>
	//</ScrollableTabView>
	render() {
		return (
			<PageOne tabLabel="PageOne" />
		);
	}
}

class PlayTrack extends Component {
    constructor(props) {
        super(props);
		
		this.state = {
			html: 'http://video.itunes.apple.com/apple-assets-us-std-000001/Video5/v4/1c/6e/85/1c6e85ed-e4a6-f9be-b7bd-ceaa0faf3077/mzvf_7073124460975954476.640x476.h264lc.U.p.m4v'
		};
		
		if (props.data) {
			this.state = {
				url: props.data.url,
				html: 'https://www.facebook.com/wikrcom/videos/1118835278260392/'
			}
		}
    }

    render() {
        return (
            <WebView
                source={{uri: this.state.html}}
				mediaPlaybackRequiresUserAction={false}
				style={{height: 200, width: 350}}
            />
        )
    }
}

class PageOne extends Component {
	constructor(props) {
		super(props);
		this.routes = [
			{title: 'First Scene', index: 0},
			{title: 'Second Scene', index: 1},
			{title: 'Three Scene', index: 2},
		];
	}
		  
	renderScene(route, navigator) {
		switch (route.index) {
			case 0: return <PageFirst routes={this.routes} navigator={navigator} />
					break;			
			case 1: return <DrawerLayout routes={this.routes} navigator={navigator} />
					break;			
			case 2: return <PageThree routes={this.routes} navigator={navigator} />
					break;
 		}
 	}	

/*
PushFromRight
FloatFromRight
FloatFromLeft
FloatFromBottom
FloatFromBottomAndroid
FadeAndroid
HorizontalSwipeJump
HorizontalSwipeJumpFromRight
VerticalUpSwipeJump
VerticalDownSwipeJump
*/ 	

	render() {
		return (
            <NavigationExperimental.Navigator
                initialRoute={this.routes[0]}
                initialRouteStack={this.routes}
                renderScene={this.renderScene.bind(this)}
                configureScene={(route, routeStack) =>
                    NavigationExperimental.Navigator.SceneConfigs.PushFromRight}
            />
		)
	}
}

class PageFirst extends Component {
	constructor(props) {
		super(props);
	}
	
	_handlePress2() {
		this.refs['DRAWER_REF'].closeDrawer();
		this.props.navigator.push({index: 1});
	}		
	
	_handlePress3() {
		this.refs['DRAWER_REF'].closeDrawer();
		this.props.navigator.push({index: 2});
	}		
	
    onMenu() {
        this.refs['DRAWER_REF'].openDrawer();
    }
		
    onLogOut() {
        this.refs['DRAWER_REF'].closeDrawer();
    }
	
	render() {
		var navigationView = (
			<View style={{flex: 1, backgroundColor: '#fff'}}>
				<Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
					DrawerLayoutAndroid
				</Text>
				
				<TouchableHighlight
					onPress={() => this.onLogOut()}
					style={styles.button}>
					<Text style={styles.buttonText}>
						Page 1
					</Text>
				</TouchableHighlight>	
				
				<TouchableHighlight
					onPress={() => this._handlePress2()}
					style={styles.button}>
					<Text style={styles.buttonText}>
						Page 2
					</Text>
				</TouchableHighlight>				
				
				<TouchableHighlight
					onPress={() => this._handlePress3()}
					style={styles.button}>
					<Text style={styles.buttonText}>
						Page 3
					</Text>
				</TouchableHighlight>
			</View>
		)
		
		return (
			<DrawerLayoutAndroid
				ref={'DRAWER_REF'}
				drawerWidth={300}
				drawerPosition={DrawerLayoutAndroid.positions.Left}
				renderNavigationView={() => navigationView}>
				
				
				<View style={{backgroundColor: '#009698', paddingBottom: 0, height: 1000}}>
					<View style={styles.header}>
						<View>
							<TouchableWithoutFeedback onPress={this.onMenu.bind(this)}>
								<View>
									<Image style={styles.menu}
										source={require('../../../img/menu.png')}
									/>
								</View>
							</TouchableWithoutFeedback>
						</View>
						<View>
							<TouchableWithoutFeedback>
								<View>
									<Text style={styles.textLarge}>
										Mocks
									</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
						<View>
							<TouchableWithoutFeedback>
								<View>
									<Text style={styles.textSmall}>
										
									</Text>
								</View>
							</TouchableWithoutFeedback>
						</View>
					</View>
					
					<ScrollView>
						<Text style={styles.welcome}></Text>
 	
						<View style={styles.row}>
							<TouchableOpacity onPress={this._handlePress2.bind(this)}>
								<View style={styles.tileLeft}>
									<Image style={styles.logo}
										source={require('../../../img/skype.png')}
									/>
									<Text style={styles.title}>
										Skype
									</Text>
								</View>
							</TouchableOpacity>								
							
							<TouchableOpacity onPress={this._handlePress3.bind(this)}>
								<View style={styles.tileRight}>
									<Image style={styles.logo}
										source={require('../../../img/linkedin.png')}
									/>
									<Text style={styles.title}>
										Linkedin
									</Text>
								</View>
							</TouchableOpacity>			
						</View>

						<View style={styles.row}>
							<TouchableOpacity onPress={this._handlePress2.bind(this)}>
								<View style={styles.tileLeft}>
									<Image style={styles.logo}
										source={require('../../../img/apple.png')}
									/>
									<Text style={styles.title}>
										Apple
									</Text>
								</View>
							</TouchableOpacity>								
							
							<TouchableOpacity onPress={this._handlePress3.bind(this)}>
								<View style={styles.tileRight}>
									<Image style={styles.logo}
										source={require('../../../img/dropbox.png')}
									/>
									<Text style={styles.title}>
										Dropbox
									</Text>
								</View>
							</TouchableOpacity>			
						</View>	
						
						<View style={styles.row}>
							<TouchableOpacity onPress={this._handlePress2.bind(this)}>
								<View style={styles.tileLeft}>
									<Image style={styles.logo}
										source={require('../../../img/android.png')}
									/>
									<Text style={styles.title}>
										Android
									</Text>
								</View>
							</TouchableOpacity>								
							
							<TouchableOpacity onPress={this._handlePress3.bind(this)}>
								<View style={styles.tileRight}>
									<Image style={styles.logo}
										source={require('../../../img/win8.png')}
									/>
									<Text style={styles.title}>
										Windows
									</Text>
								</View>
							</TouchableOpacity>			
						</View>		
											
					</ScrollView>
				</View>			
			</DrawerLayoutAndroid>		
		)
	}
}

class PageTwo extends Component {
	constructor(props) {
		super(props);	
	}
	
	_handlePress1() {
		this.props.navigator.pop();
	}	
	
	_handlePress() {
		//this.props.navigator.pop();
		this.props.navigator.push(this.props.routes[2]);
	}
		
  render() {
    return (
      <View style={[styles.container, {backgroundColor: 'purple'}]}>
        <Text style={styles.welcome}>This is page two!</Text>
		
        <TouchableOpacity onPress={this._handlePress.bind(this)}>
          <View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'black'}}>
            <Text style={styles.welcome}>Go to page three</Text>
          </View>
        </TouchableOpacity>
		
		<View style={{margin: 10}}></View>	
		
		<TouchableOpacity onPress={this._handlePress1.bind(this)}>
			<View style={{paddingVertical: 20, paddingHorizontal: 20, backgroundColor: 'black'}}>
				<Text style={styles.welcome}>Go back</Text>
			</View>
		</TouchableOpacity>	
       </View>
    )
  }
}

class PageThree extends Component {
	constructor(props) {
		super(props);	
	}
	
	_handlePress1() {
		this.props.navigator.push(this.props.routes[1]);
	}	
	
	_handlePress() {
		this.props.navigator.popToTop(0);
		//this.props.navigator.push(this.props.routes[0]);
	}
		
	render() {
		return (
			<View style={{flex: 1}}>
				<View style={{flex: 1, backgroundColor: 'navy'}}>
					<TouchableOpacity onPress={this._handlePress.bind(this)}>
						<Text style={styles.welcome}>
							Header
						</Text>
					</TouchableOpacity>
				</View>
				
				<View style={{flex: 7}}>
					<ScrollableTabView>
						<View 
							tabLabel="One"
							style={[styles.container, {backgroundColor: 'blue'}]}>
							<Text style={styles.welcome}>This is page three!</Text>

							<TouchableOpacity onPress={this._handlePress1.bind(this)}>
								<View style={{paddingVertical: 20, paddingHorizontal: 20, backgroundColor: 'black'}}>
									<Text style={styles.welcome}>Go to page 2</Text>
								</View>
							</TouchableOpacity>	

							<View style={{margin: 10}}></View>	

							<TouchableOpacity onPress={this._handlePress.bind(this)}>
								<View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'black'}}>
									<Text style={styles.welcome}>Go back</Text>
								</View>
							</TouchableOpacity>
						</View>			
						
						<View 
							tabLabel="Two"
							style={[styles.container, {backgroundColor: 'purple'}]}>
							<Text style={styles.welcome}>This is page two!</Text>

							<TouchableOpacity onPress={this._handlePress.bind(this)}>
								<View style={{paddingVertical: 10, paddingHorizontal: 20, backgroundColor: 'black'}}>
									<Text style={styles.welcome}>Go to page three</Text>
								</View>
							</TouchableOpacity>

							<View style={{margin: 10}}></View>	

							<TouchableOpacity onPress={this._handlePress1.bind(this)}>
								<View style={{paddingVertical: 20, paddingHorizontal: 20, backgroundColor: 'black'}}>
									<Text style={styles.welcome}>Go back</Text>
								</View>
							</TouchableOpacity>	
						</View>
					</ScrollableTabView>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#F5FCFF',
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#48BBEC',
		//backgroundColor: 'darkblue',
		borderWidth: 0,
		borderColor: 'whitesmoke'
	},	
	row: {
		flexDirection: 'row',
		justifyContent: 'center',
		//backgroundColor: '#48BBEC',
		//backgroundColor: 'darkblue',
	},
    textSmall: {
        fontSize: 16,
        textAlign: 'center',
        margin: 14,
        fontWeight: 'bold',
        color: 'white'
    },
    textLarge: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        marginTop: 12,
        //paddingLeft: 20,
        fontWeight: 'bold',
        color: 'white'
    },
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		color: 'white',
	},	
	title: {
		fontSize: 16,
		textAlign: 'center',
		marginTop: -5,
		color: 'white',
	},
	pageStyle: {
		alignItems: 'center',
		padding: 20,
	},	
	menu: {
		alignItems: 'center',
		margin: 14,
		marginTop: 16
	},	
	logo: {
		alignItems: 'center',
		margin: 14,
		marginTop: 16,
		marginLeft: 45
	}, 	
	tileLeft: {
		paddingVertical: 10, 
		backgroundColor: '#48BBEC', 
		borderWidth: 5,
		borderColor: 'whitesmoke',
		width: 130,
		margin: 5,
		//marginLeft: 15,
		borderRadius: 15
	},
	tileRight: {
		paddingVertical: 10, 
		backgroundColor: '#48BBEC', 
		borderWidth: 5,
		borderColor: 'whitesmoke',
		width: 130,
		margin: 5,
		//marginRight: 15,
		borderRadius: 15
	} 
});

module.exports = SampleApp;

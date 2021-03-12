import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AppLoading, Font } from 'expo';

export default class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            noteArray: [],
            noteText: '',
            //fontLoaded: false
        }
    }

    // componentWillMount() {
    //     this._loadAssetsAsync();
    //   }
 
    // _loadAssetsAsync = async () => {
    // await Font.loadAsync({
    //     PoppinsLight: require("./assets/fonts/poppins-light.ttf"),
    // });
    // this.setState({ fontLoaded: true });
    // };

    addTask() {
        const {noteText, noteArray} = this.state

        if (noteText) {
            var date = new Date();

            noteArray.push({ 
               'date' : 
               date.getDate() + '/' +
               (date.getMonth() + 1) + '/' +
               date.getFullYear(),
               'note' : noteText
            });

            this.setState({noteArray: noteArray});
            this.setState({noteText: ''});
        }
    }

    deleteNote(key){
        const {noteText, noteArray} = this.state
        noteArray.splice(key, 1);
        this.setState({noteArray: noteArray});
    }

    render() {
        // if (!this.state.fontLoaded) {
        //     return <AppLoading />;
        //   }
        let notes = this.state.noteArray.map((val, key) => {
            return (
                <View key={key} keyval={key} val={val} style={styles.noteLine}>
                    <Text style={styles.noteText}>{val.date}</Text>
                    <Text style={styles.noteText}>{val.note}</Text>
                    <TouchableOpacity onPress={() => this.deleteNote(key)} style={styles.noteDelete}>
                        {/* <Text style={styles.noteDeleteText}> DEL </Text> */}
                        <Icon name="times" size={20} color="#3FE0D0" />
                    </TouchableOpacity>
                </View>
            )
        })

        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headerText}>TASK LIST</Text>
                </View>

                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>

                <View style={styles.footer}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(noteText) => this.setState({ noteText })}
                        value={this.state.noteText}
                        placeholder='Task name ...'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                    <TouchableOpacity onPress={() => this.addTask()} style={styles.addButton}>
                        <Text style={styles.addButtonText}>ADD TASK</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#008081',
        fontFamily: 'PoppinsLight'
    },
    header: {
        backgroundColor: '#008081',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: 'black',
        paddingTop: 30
    },
    headerText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 15
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 150,
        margin: 15
    },
    noteLine: {
        paddingTop: 8,
        paddingBottom: 8,
        borderBottomColor: '#00999b',
        borderStyle: 'dotted',
        borderRadius: 1,
        borderBottomWidth: 1
    },
    footer: {
        position: 'absolute',
        bottom: 5,
        left: 0,
        right: 0,
        zIndex: 10,
        padding: 15
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 10,
        backgroundColor: 'white'
    },
    addButton: {
        backgroundColor: '#3FE0D0',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButtonText: {
        color: '#008081',
        fontWeight: 'bold'
    },
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
    },
    noteText: {
        paddingLeft: 10,
        color: 'white'
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#3FE0D0',
        color: 'white',
        padding: 8,
        paddingTop: 5,
        paddingBottom: 5,
        bottom: 10,
        right: 10
    },
    noteDeleteText: {        
        color: 'white',
    }
});

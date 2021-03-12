import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';

export default class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            noteArray: [],
            noteText: ''
        }
    }

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
        let notes = this.state.noteArray.map((val, key) => {
            return (
                <View key={key} keyval={key} val={val} style={styles.noteLine}>
                    <Text style={styles.noteText}>{val.date}</Text>
                    <Text style={styles.noteText}>{val.note}</Text>
                    <TouchableOpacity onPress={() => this.deleteNote(key)} style={styles.noteDelete}>
                        <Text style={styles.noteDeleteText}> DEL </Text>
                    </TouchableOpacity>
                </View>
            )
        })

        return (
            <View style={styles.container}>

                <View style={styles.header}>
                    <Text style={styles.headerText}>TASK LIST APP</Text>
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
        backgroundColor: '#ffff33',
        fontFamily: 'poppins-light'
    },
    header: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
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
        marginBottom: 100,
        marginTop: 15
    },
    noteLine: {
        marginBottom: 15
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderTopColor: 'silver'
    },
    addButton: {
        backgroundColor: 'black',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        color: 'white',
    },
    note: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
    },
    noteText: {
        paddingLeft: 20
    },
    noteDelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'black',
        padding: 8,
        paddingTop: 5,
        paddingBottom: 5,
        bottom: 5,
        right: 10
    },
    noteDeleteText: {        
        color: 'black',
    }
});

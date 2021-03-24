// Task List App by (c) Mahammad Sharifov
// Using Hook (Functional based)
import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';

const App = () => {

    const [noteText, setNoteText] = useState('')
    const [noteArray, setNoteArray] = useState([])

    const addTask = () => {
        if(noteText){
            var date = new Date();
            noteArray.push({
               'date' :
               new Date().toLocaleString('en-US', { day: '2-digit', month: 'short', hour: 'numeric', minute: 'numeric', hour12: true }),
               'note' : noteText
            });
            setNoteArray(noteArray);
            setNoteText("");
        }
    }

    const deleteNote = (index) => {
        let ArrayCopy = [...noteArray]
        ArrayCopy.splice(index, 1);
        setNoteArray(ArrayCopy)
    }

    let notes = noteArray.map( (val, index) =>{
        return(
            <View key={index} val={val} style={styles.noteLine}>
                <Text style={styles.noteText}>{val.date}</Text>
                <Text style={styles.noteText}>{val.note}</Text>
                <TouchableOpacity onPress={ ()=> deleteNote(index) } style={styles.noteDelete}>
                    <Text style={styles.noteDeleteText}> DEL </Text>
                </TouchableOpacity>
            </View>
        )
    } )       

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
                    value = {noteText}
                    onChangeText = { (noteText) => setNoteText(noteText) }
                    placeholder='Task name ...'
                    underlineColorAndroid='transparent'>
                </TextInput>
                <TouchableOpacity  onPress = { () => addTask() } style={styles.addButton}>
                    <Text style={styles.addButtonText}>ADD TASK</Text>
                </TouchableOpacity>
            </View>

        </View>
    );

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

export default App;
import React from 'react';
import { Text, View, Platform } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle} >
            <Text style={textStyle} >{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select({ //use spread operator('...') to spread css for specific os 
            ios: {
                height: 60,
                paddingTop: 15,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
            },
            android: {
                height: 50,
                elevation: 2
            },
            position: 20
        })
    },
    textStyle: {
        fontSize: 20
    }
};

export default Header;


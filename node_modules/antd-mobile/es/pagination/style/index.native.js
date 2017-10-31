import variables from '../../style/themes/default.native';
export default {
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    totalStyle: {
        fontSize: 18,
        color: variables.color_text_base
    },
    activeTextStyle: {
        fontSize: 18,
        color: variables.color_link
    },
    indicatorStyle: {
        flexDirection: 'row'
    },
    pointStyle: {
        width: 8,
        height: 8,
        borderRadius: 8,
        backgroundColor: variables.input_color_icon
    },
    pointActiveStyle: {
        backgroundColor: '#888'
    },
    spaceStyle: {
        marginHorizontal: variables.h_spacing_sm / 2,
        marginVertical: variables.v_spacing_sm / 2
    }
};
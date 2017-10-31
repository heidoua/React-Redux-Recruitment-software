import variables from '../../style/themes/default.native';
export default {
    Tabs: {
        container: {
            flex: 1
        },
        topTabBarSplitLine: {
            borderBottomColor: variables.border_color_base,
            borderBottomWidth: 1
        },
        bottomTabBarSplitLine: {
            borderTopColor: variables.border_color_base,
            borderTopWidth: 1
        }
    },
    TabBar: {
        container: {},
        tabs: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: variables.fill_base,
            justifyContent: 'space-around',
            shadowRadius: 0,
            shadowOpacity: 0,
            elevation: 0
        },
        tab: {
            height: variables.tabs_height,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            flexDirection: 'row'
        },
        underline: {
            height: 2,
            backgroundColor: variables.tabs_color
        },
        textStyle: {
            fontSize: 15
        },
        activeTextColor: variables.tabs_color,
        inactiveTextColor: variables.color_text_base
    }
};
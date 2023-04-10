import { Header as HeaderRNE, HeaderProps, Icon, Text } from '@rneui/themed';
import { StyleSheet, View } from 'react-native';

const Header: React.FC = () => {
    return (
        <HeaderRNE
            containerStyle={{
                margin: 8,
            }}
            backgroundColor='#fff'
            leftComponent={
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    gap: 16,
                }}>
                    <Icon
                        name='menu'
                        type='feather'
                        color='#3F51B5'
                    />
                </View>
            }
            rightComponent={
                <Icon
                    name='bell'
                    type='feather'
                    color='#3F51B5'
                />
            }
            centerComponent={
                <Text style={{fontSize: 16, color: '#3F51B5'}}>My Diary</Text>
            }
        />
    )
};


const styles = StyleSheet.create({
    titleHeader: {
        fontSize: 18,
        color: '#3F51B5',
    }
});

export { Header };
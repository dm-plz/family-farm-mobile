import { Text, View } from 'react-native';

const MyIcon = ({ groupRole }) => {
  return (
    <View className="h-[56] items-end justify-center">
      <View className="mr-4 h-[40] w-[40] items-center justify-center rounded-full border border-[#E8E8E8]">
        <Text className="text-2xl">{groupRole[0].toUpperCase()}</Text>
      </View>
    </View>
  );
};

export default MyIcon;

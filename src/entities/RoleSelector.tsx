import { Image, Pressable, View } from 'react-native';

import { TextMedium, TextSemiBold } from './fonts';

import { colors } from '@/constants';

//FIXME: role 타입을 제대로 선언해야 함
interface RoleSelectorProps {
  roles: any[];
  setSelectedRole: (role: any) => void;
  selectedRole: any;
}

//FIXME: 선택 된 role을 확인하는 방식을 조금 더 구체적으로 변경해야 함
//FIXME: role 선택 UI에 사용된 map을 통해 반환 된 컴포넌트를 구분하기위한 key를 변경해야 함
function RoleSelector({
  roles,
  setSelectedRole,
  selectedRole,
}: RoleSelectorProps) {
  return (
    <View>
      <TextSemiBold className="mb-2 text-body2 text-gray-300">
        나의 역할
      </TextSemiBold>
      {roles.map(role => {
        const isSelected = selectedRole === role;
        return (
          <Pressable
            key={role}
            className={`mt-2 flex h-[52] flex-row justify-between rounded-xl border border-gray-50 px-5 py-4 ${isSelected ? 'border-success bg-success/5' : ''}`}
            onPress={() => {
              setSelectedRole(role);
            }}>
            <TextMedium className={` ${isSelected ? 'text-success' : ''}`}>
              {role}
            </TextMedium>
            <Image
              source={require('@/assets/img/icon-check-circle.png')}
              resizeMode="contain"
              className="h-5 w-5"
              tintColor={isSelected ? colors.primary[100] : colors.gray[100]}
            />
          </Pressable>
        );
      })}
    </View>
  );
}

export default RoleSelector;

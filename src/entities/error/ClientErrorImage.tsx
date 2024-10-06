import { Image } from 'react-native';

function ClientErrorImage() {
  return (
    <Image
      source={require('@/assets/img/error-400.png')}
      className="h-60 w-60"
      resizeMode="contain"
    />
  );
}

export default ClientErrorImage;

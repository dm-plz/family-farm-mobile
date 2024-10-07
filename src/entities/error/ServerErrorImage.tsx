import { Image } from 'react-native';

function ServerErrorImage() {
  return (
    <Image
      source={require('@/assets/img/error-500.png')}
      className="h-60 w-60"
      resizeMode="contain"
    />
  );
}

export default ServerErrorImage;

import { useState } from 'react';

export default function useAuth() {
  const [isLogin] = useState(false);

  return { isLogin };
}

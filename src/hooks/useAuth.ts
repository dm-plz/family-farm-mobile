import { useState } from 'react';

export default function useAuth() {
  const [isLogin] = useState(true);

  return { isLogin };
}

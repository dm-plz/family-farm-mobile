# ESLint 및 Prettier 설정

## ESLint 설정

### 관련 라이브러리
- [@react-native/eslint-config](https://github.com/facebook/react-native/tree/HEAD/packages/eslint-config-react-native#readme)
- [@typescript-eslint/parser](https://typescript-eslint.io/packages/parser/)
- [@typescript-eslint/eslint-plugin](https://typescript-eslint.io/packages/eslint-plugin/)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#readme)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript#readme)

### 주요 설정 내용

1. **Parser**: `@typescript-eslint/parser`를 사용하여 TypeScript 코드를 분석합니다.
2. **Plugins**:
   - `import`: 모듈의 불러오기 순서와 모듈 간의 의존성을 관리합니다.
   - `@typescript-eslint`: TypeScript 전용 ESLint 규칙을 제공합니다.
3. **Extends**:
   - `@react-native`: React Native 프로젝트에 최적화된 ESLint 규칙을 포함합니다.
   - `prettier`: 코드 스타일링을 Prettier 규칙으로 조정하여 코드 형식화를 일관되게 유지합니다.
   - `plugin:prettier/recommended`: Prettier와 호환되는 ESLint 규칙을 추가합니다.
   - `plugin:import/typescript`, `plugin:import/recommended`, `plugin:import/errors`, `plugin:import/warnings`: 모듈 불러오기와 관련된 규칙을 설정합니다.
4. **Settings**:
   - `import/parsers`: `.ts`와 `.tsx` 파일을 `@typescript-eslint/parser`로 파싱하도록 설정합니다.
   - `import/resolver`: TypeScript와 Node 모듈 해결을 위해 설정합니다.
5. **Rules**:
   - `import/order`: 모듈 불러오기 순서를 정렬하고 그룹화합니다. 내장 모듈, 외부 모듈, 부모 모듈, 형제 모듈, 인덱스 파일 순으로 정렬하며, 알파벳순 정렬과 새 줄 추가를 설정합니다.

## Prettier 설정

### 주요 설정 내용

1. **화살표 함수 괄호**: 가능하면 괄호를 생략 (`avoid`).
2. **괄호 위치**: JSX 속성이나 HTML 요소의 닫는 괄호를 동일한 줄에 배치 (`bracketSameLine: true`).
3. **괄호 간격**: 객체 리터럴의 중괄호 내부에 공백을 추가하지 않음 (`bracketSpacing: false`).
4. **단일 인용 부호**: 문자열에 단일 인용 부호 사용 (`singleQuote: true`).
5. **후행 쉼표**: 여러 줄로 나열된 요소에 후행 쉼표를 항상 추가 (`trailingComma: 'all'`).
6. **플러그인**: `prettier-plugin-tailwindcss`를 사용하여 Tailwind CSS 클래스의 정렬을 자동화합니다.
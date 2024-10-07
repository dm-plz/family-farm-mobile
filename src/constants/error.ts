import { ClientErrorImage, ServerErrorImage } from '@/entities/error';

export const ERROR_TYPES = {
  400: {
    title: '요청 실패',
    imageComponent: ClientErrorImage,
    description1: '올바르지 않은 요청',
    description2: [
      '유효하지 않은 요청입니다.',
      '입력 값을 확인한 후 다시 시도해주세요.',
    ],
  },
  500: {
    title: '서버 에러',
    imageComponent: ServerErrorImage,
    description1: '서비스 장애 안내',
    description2: [
      '현재 서버에 문제가 발생하여 요청을 처리할 수 없습니다.',
      '잠시 후 다시 시도해주시기 바랍니다.',
    ],
  },
} as const;

export type ErrorTypes = keyof typeof ERROR_TYPES;

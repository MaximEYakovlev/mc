export const SERVER_RUNNING = 'server is running on';

export const JWT_CONSTANTS = {
  SECRET:
    'DO NOT USE THIS VALUE. INSTEAD, CREATE A COMPLEX SECRET AND KEEP IT SAFE OUTSIDE OF THE SOURCE CODE.',
};

export const DOCUMENT_OPTIONS = {
  TITLE: 'API',
  DESCRIPTION: 'The API description',
  VERSION: '1.0',
  TAG: 'api',
};

export const AUTH_API = {
  OPERATION_SUMMARY: {
    SIGN_IN: 'User authentication',
    // Другие операции могут быть добавлены здесь
  },
  RESPONSE_DESCRIPTIONS: {
    SUCCESS: 'Successful authentication.',
    UNAUTHORIZED: 'Error: Unauthorized',
    // Другие ответы могут быть добавлены здесь
  },
  RESPONSE_STATUS: {
    SUCCESS: 200,
    UNAUTHORIZED: 401,
    // Другие статусы могут быть добавлены здесь
  },
};

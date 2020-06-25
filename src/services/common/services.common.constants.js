const MAIN_API_URL = 'https://afternoon-falls-25894.herokuapp.com';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZWZhMGQzOTg5NmUxMDAxN2VlYTQwNCIsImlhdCI6MTU5MjkwMjQzOSwiZXhwIjoxNTkyOTE2ODM5fQ.xThNVUtI1QJI0LeYidkmIfhU2LwHX2M8sF6GLJQfreI';
const ERRORS_DESCRIPTION = {
  400: '400: Bad Request',
  401: '401: Access Token Is Missing or Invalid',
  404: '404: Not Found',
  408: '408: Request Time-out',
  410: '410: Gone',
  422: '422: Incorrect request',
  DEFAULT: 'Something Goes Wrong',
  EMAIL_ERROR: 'e-mail must contain a standard signature',
  PASSWORD_ERROR:
    'Password must contain as many as 6 characters including lower-case, upper-case and numeric characters',
};
const GET_RANDOM = (min, max) => {
  const x = Math.ceil(min);
  const y = Math.floor(max);
  return Math.floor(Math.random() * (y - x + 1)) + x;
};
const MEDIA_LINK = 'https://raw.githubusercontent.com/caspercarver/rslang-data/master/';
const OPTIONAL_DEFAULT = {
  cardsDay: '4',
  isTranslation: 'true', // textExampleTranslate
  isTranscription: 'true', // transcription
  isPicture: 'true', // image
  isAddSentExplWord: 'true', // textMeaning
  isAddSentUsingWord: 'true', // ?
  isShowAnswerButton: 'true', // +
  isShowDiffMoveButton: 'true', // +
  isShowDeleteButton: 'true', // +
  isShowAgainButton: 'true', // +
  isShowDiffButton: 'true', // +
  isShowGoodButton: 'true', // +
  isShowEasyButton: 'true', // +
  isAudio: 'false',
};
const LINK_TYPE = { Settings: { 404: null }, Statictics: { 404: null } };
export {
  MAIN_API_URL, TOKEN, GET_RANDOM, ERRORS_DESCRIPTION, MEDIA_LINK, LINK_TYPE, OPTIONAL_DEFAULT,
};

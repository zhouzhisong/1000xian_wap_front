// const devBaseURL = 'http://api.m.1000xian.com';
const devBaseURL = 'http://api.test.1000xian.com';
// const proBaseURL = 'http://api.m.1000xian.com';
const proBaseURL = 'http://api.test.1000xian.com';



export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;

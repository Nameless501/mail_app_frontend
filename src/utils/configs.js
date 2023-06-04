import {
    SIGN_UP_API_URL,
    SIGN_IN_API_URL,
    CURRENT_USER_API_URL,
    USERS_API_URL,
    WRONG_LOGIN_CODE,
    FORBIDDEN_CODE,
    EMAIL_CONFLICT_CODE,
    DEFAULT_ERROR_CODE,
    WRONG_LOGIN_MESSAGE,
    USER_IS_BLOCKED_MESSAGE,
    EMAIL_CONFLICT_MESSAGE,
    DEFAULT_ERROR_MESSAGE,
    SIGN_OUT_API_URL,
} from './constants';

export const routesConfig = {
    main: '/',
    signIn: '/sign-in',
};

export const apiConfig = {
    // users: USERS_API_URL,
    // block: USERS_API_URL,
    // delete: USERS_API_URL,
    // singIn: SIGN_IN_API_URL,
    // signUp: SIGN_UP_API_URL,
    // signOut: SIGN_OUT_API_URL,
    // currentUser: CURRENT_USER_API_URL,
};

export const apiErrorsConfig = {
    // [WRONG_LOGIN_CODE]: WRONG_LOGIN_MESSAGE,
    // [FORBIDDEN_CODE]: USER_IS_BLOCKED_MESSAGE,
    // [EMAIL_CONFLICT_CODE]: EMAIL_CONFLICT_MESSAGE,
    // [DEFAULT_ERROR_CODE]: DEFAULT_ERROR_MESSAGE,
};

export const navTabsConfig = {
    default: 'inbox-tab',
    tabs: [
        {
            title: 'Inbox',
            id: 'inbox-tab',
        },
        {
            title: 'Sent',
            id: 'sent-tab',
        },
        {
            title: 'Write',
            id: 'write-tab',
        },
    ],
};

export const tabPanesConfig = {
    inbox: 'inbox-tab',
    sent: 'sent-tab',
    write: 'write-tab',
};

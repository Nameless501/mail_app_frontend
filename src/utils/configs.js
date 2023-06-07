import { BASE_API_URL } from './constants';

export const routesConfig = {
    main: '/',
    signIn: '/sign-in',
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

export const defaultMessageValues = {
    to: '',
    subject: '',
    message: '',
};

export const defaultSignValues = {
    name: '',
};

export const defaultUserDataValue = { messages: [], user: {} };

export const eventsConfig = {
    connection: 'connection',
    connected: 'connected',
    authorization: 'authorization',
    authorized: 'authorized',
    newMessage: 'newMessage',
    sendMessage: 'sendMessage',
    messageSent: 'messageSent',
};

export const webSocketConfig = {
    url: BASE_API_URL,
    options: {
        withCredentials: true,
    },
};

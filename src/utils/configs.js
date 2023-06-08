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
    autocomplete: 'autocomplete',
    authorization: 'authorization',
    signOut: 'signOut',
    incomingMessage: 'incomingMessage',
    sendMessage: 'sendMessage',
    error: 'error',
};

export const webSocketConfig = {
    url: BASE_API_URL,
    options: {
        withCredentials: true,
    },
};

export const messageFormConfig = [
    {
        label: 'To:',
        placeholder: 'Username',
        id: 'receiver-input',
        name: 'to',
        required: true,
        autocomplete: true,
    },
    {
        label: 'Subject:',
        placeholder: 'Subject',
        id: 'subject-input',
        name: 'subject',
        required: true,
        autocomplete: false,
    },
    {
        label: 'Message:',
        placeholder: '',
        id: 'message-input',
        name: 'message',
        required: true,
        rows: 4,
        as: 'textarea',
        size: 'lg',
        autocomplete: false,
    },
];

export const signInFormConfig = {
    label: 'Your name:',
    placeholder: 'Enter your name',
    id: 'name-input',
    name: 'name',
    required: true,
    size: 'lg',
};

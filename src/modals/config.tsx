import {IErrorProps} from './ErrorModal';

// holds the modal related strings - in noraml case it would be held in a translation json or from the server.
export const ERROR: {[key: string]: IErrorProps} = {
  API_ERROR: {
    title: 'אירעה שגיאה בהעברה',
    content: 'נא לנסות שוב מאוחר יותר',
  },
};

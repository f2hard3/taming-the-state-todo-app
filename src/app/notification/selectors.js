export const getNotifications = state =>
  getArrayOfObject(state.notificationState);

export const getArrayOfObject = object => Object.values(object);

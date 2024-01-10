export const randomRespStatus = (onSuccess: Function, onFailure: Function) =>
  getRandomSuccess() ? onSuccess() : onFailure();

const getRandomSuccess = () => {
  const ran = Math.round(Math.round(Math.random() * 100) / 2);

  return ran < 35;
};

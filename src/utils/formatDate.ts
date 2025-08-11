import { format } from 'date-fns';

export const formatDateTime = (isoDate: string): string => {
  const date = new Date(isoDate);
  return format(date, 'dd/MM/yyyy - HH:mm');
};

export const formatTime = (time: string) => {
  const [hour, minute] = time.split(':').map(Number);
  return `${hour.toString().padStart(2, '0')}:${minute
    .toString()
    .padStart(2, '0')}`;
};

export const isTokenExpired = (timeToken: number | null): boolean => {
  if (!timeToken) return true;

  const now = new Date().getTime();
  const diffInMs = now - timeToken;
  const diffInHours = diffInMs / (1000 * 60 * 60);

  return diffInHours > 23;
};

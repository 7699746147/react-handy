import { createSvgIcon } from '@mui/material/utils';

export const MinusCircle = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"
      clipRule="evenodd"
    />
  </svg>,
  'MinusCircle'
);

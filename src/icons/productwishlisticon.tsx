import * as React from "react";

interface Props {
  fillColor: string;
}

export const ProductWishListIcon = ({ fillColor }: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <mask id="mask0_1179_171" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
      <rect width="20" height="20" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1179_171)">
      <path d="M9.99935 17.4999L8.79102 16.4166C7.38824 15.1527 6.22852 14.0624 5.31185 13.1458C4.39518 12.2291 3.66602 11.4062 3.12435 10.677C2.58268 9.94784 2.20421 9.2777 1.98893 8.66659C1.77365 8.05547 1.66602 7.43047 1.66602 6.79159C1.66602 5.48603 2.10352 4.39575 2.97852 3.52075C3.85352 2.64575 4.94379 2.20825 6.24935 2.20825C6.97157 2.20825 7.65907 2.36103 8.31185 2.66659C8.96463 2.97214 9.52713 3.4027 9.99935 3.95825C10.4716 3.4027 11.0341 2.97214 11.6868 2.66659C12.3396 2.36103 13.0271 2.20825 13.7493 2.20825C15.0549 2.20825 16.1452 2.64575 17.0202 3.52075C17.8952 4.39575 18.3327 5.48603 18.3327 6.79159C18.3327 7.43047 18.225 8.05547 18.0098 8.66659C17.7945 9.2777 17.416 9.94784 16.8743 10.677C16.3327 11.4062 15.6035 12.2291 14.6868 13.1458C13.7702 14.0624 12.6105 15.1527 11.2077 16.4166L9.99935 17.4999ZM9.99935 15.2499C11.3327 14.0555 12.4299 13.0312 13.291 12.177C14.1521 11.3228 14.8327 10.5798 15.3327 9.94784C15.8327 9.31589 16.1799 8.75339 16.3743 8.26034C16.5688 7.76728 16.666 7.2777 16.666 6.79159C16.666 5.95825 16.3882 5.26381 15.8327 4.70825C15.2771 4.1527 14.5827 3.87492 13.7493 3.87492C13.0966 3.87492 12.4924 4.05895 11.9368 4.427C11.3813 4.79506 10.9993 5.26381 10.791 5.83325H9.20768C8.99935 5.26381 8.6174 4.79506 8.06185 4.427C7.50629 4.05895 6.90213 3.87492 6.24935 3.87492C5.41602 3.87492 4.72157 4.1527 4.16602 4.70825C3.61046 5.26381 3.33268 5.95825 3.33268 6.79159C3.33268 7.2777 3.4299 7.76728 3.62435 8.26034C3.81879 8.75339 4.16602 9.31589 4.66602 9.94784C5.16602 10.5798 5.84657 11.3228 6.70768 12.177C7.56879 13.0312 8.66602 14.0555 9.99935 15.2499Z"
        fill={fillColor} />
    </g>
  </svg>
);
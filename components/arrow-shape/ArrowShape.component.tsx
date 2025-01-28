import { FC, SVGProps } from 'react';

const ArrowShape: FC<SVGProps<SVGElement>> = ({className}) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="155" height="140" fill="none"
         viewBox="0 0 155 140">
      <path stroke="currentColor" strokeWidth="2"
            d="M139.115.568c15.416 28.651 32.046 88.195-24.758 97.164-71.005 11.211-34.568-53.72-17.284-39.706 17.284 14.014 9.684 67.177-94.516 77.269m0 0l6.413-4.071m-6.413 4.071l7.062 3.073"></path>
    </svg>
  )
}

export default ArrowShape;
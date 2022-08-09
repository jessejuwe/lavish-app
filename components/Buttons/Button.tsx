import React from 'react';

const STYLES: string[] = ['btn--primary', 'btn--outline'];

// prettier-ignore
const SIZES: string[] = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide'];

const COLOR: string[] = [
  'primary',
  'secondary',
  'blue',
  'red',
  'green',
  'accent-blue',
];

type Props = {
  children: React.ReactNode;
  type?: any;
  onClick?: () => void;
  buttonStyle?: string | any;
  buttonSize?: string | any;
  buttonColor?: string | any;
};

const Button: React.FC<Props> = props => {
  const checkButtonStyle = STYLES.includes(props.buttonStyle)
    ? props.buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(props.buttonSize)
    ? props.buttonSize
    : SIZES[0];

  const checkButtonColor = COLOR.includes(props.buttonColor)
    ? props.buttonColor
    : null;

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default Button;

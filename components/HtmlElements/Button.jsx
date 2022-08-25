/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx ,useTheme } from '@emotion/react'
const Button = ({
  type = 'button',
  children,
  widthAll,
  onClick = () => {},
  disabled,
  buttonType = 'main'
}) => {
  const Theme = useTheme()
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <button
        css={css`
          width: ${widthAll ? '100%' : 'auto'};
          background-color: ${Theme.palette.secondary[buttonType]};
          color: white;
          font-size: 20px;
          text-decoration: none;
          padding: 10px;
          border-radius: 5px;
          display: inline-block;
          cursor: pointer;
          transition-duration: 0.4s;
          border: 5px solid ${Theme.palette.secondary[buttonType]};
          box-shadow:  5px 5px 5px gray;
          &:hover {
            border: 5px solid black;
          }
          &:disabled {
            background-color:gray;
            cursor: no-drop;
          }
        `}
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {children}
      </button>
    </div>
  )
}

export default Button

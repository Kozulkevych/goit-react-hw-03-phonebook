import { StyledButton } from './Button.styled';

export const Button = ({ type = 'button', icon: Icon = null, children }) => {
  return (
    <StyledButton type={type}>
      {Icon && <Icon size="20" />}
      {children}
    </StyledButton>
  );
};

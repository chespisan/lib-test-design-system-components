import React from "react";
import { StyledButton } from "./styles/button.styled";
import { ButtonProps } from "./types/button.type";

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (
  props,
  ref
) => {
  const {
    as,
    children,
    className,
    disabled = false,
    href,
    icon,
    loading,
    onClick,
    round = false,
    size = "medium",
    type = "basic",
    to,
  } = props;

  const args = {
    innerType: type,
    size,
    disabled,
    withText: children !== null,
    round,
  };

  return (
    <StyledButton
      as="button"
      type="button"
      onClick={onClick}
      ref={ref as React.MutableRefObject<HTMLButtonElement>}
      className={className}
      {...args}
    >
      {children}
    </StyledButton>
  );
};

export default React.forwardRef<unknown, ButtonProps>(Button);

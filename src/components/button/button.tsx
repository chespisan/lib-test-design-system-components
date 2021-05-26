import React from "react";
import { StyledButton } from "./styles/button.styled";
import { StyledIcon } from "./styles/icon.styled";
import { ButtonProps } from "./types/buttonProps.type";

/**
 * Primary ui Component
 */

const Button: React.ForwardRefRenderFunction<unknown, ButtonProps> = (
  props,
  ref
) => {
  const {
    as,
    children,
    className,
    color = "basic",
    disabled = false,
    href,
    icon,
    loading,
    onClick,
    round = false,
    size = "medium",
    type = "button",
    to,
    mode = "mobile",
  } = props;

  const args = {
    color,
    innerType: color,
    size,
    disabled,
    withText: children !== null,
    round,
    icon,
    type,
    mode,
  };

  const argsIcon = {
    innerType: color,
  };

  const childrenWithIcon = !icon ? (
    children
  ) : (
    <>
      {children}
      <StyledIcon {...argsIcon} as={icon} />
    </>
  );

  if (as && !disabled) {
    return (
      <StyledButton as={as} to={to} ref={ref} className={className} {...args}>
        {loading ? (
          <>
            Loading
            {/* <Spinner {...spinnerStyles} /> */}
          </>
        ) : (
          childrenWithIcon
        )}
      </StyledButton>
    );
  }

  if (href && !disabled) {
    return (
      <StyledButton
        as="a"
        href={href}
        ref={ref as React.MutableRefObject<HTMLAnchorElement>}
        className={className}
        {...args}
      >
        {loading ? (
          <>
            Loading
            {/* <Spinner {...spinnerStyles} /> */}
          </>
        ) : (
          childrenWithIcon
        )}
      </StyledButton>
    );
  }

  return (
    <StyledButton
      as="button"
      onClick={onClick}
      ref={ref as React.MutableRefObject<HTMLButtonElement>}
      className={className}
      {...args}
    >
      {loading ? (
        <>
          Loading
          {/* <Spinner {...spinnerStyles} /> */}
        </>
      ) : (
        childrenWithIcon
      )}
    </StyledButton>
  );
};

{
}
export default React.forwardRef<unknown, ButtonProps>(Button);

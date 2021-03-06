import React from 'react';
import { Container } from './styles';

type TooltipProps = { title: string; className?: string };

const Tooltip: React.FC<TooltipProps> = ({
  title,
  className,
  children,
  ...rest
}) => (
  <Container className={className} {...rest}>
    {children}
    <span>{title}</span>
  </Container>
);
export default Tooltip;

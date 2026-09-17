import { ArrowUpRight } from "@phosphor-icons/react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  showIcon?: boolean;
}

export function ExternalLink({ children, showIcon = true, ...props }: ExternalLinkProps) {
  return (
    <a {...props} target="_blank" rel="noreferrer">
      {children}
      {showIcon && <ArrowUpRight aria-hidden="true" size={16} weight="bold" />}
    </a>
  );
}


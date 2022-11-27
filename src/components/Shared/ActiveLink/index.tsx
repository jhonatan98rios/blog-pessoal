import Link from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement } from 'react';

import { ActiveLinkProps } from '../../../types'

export function ActiveLink({
  children,
  activeClassName,
  ...otherProps
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  const className = asPath === otherProps.href ? activeClassName : '';

  return (
    <Link {...otherProps}>
      {children}
    </Link>
  );
}

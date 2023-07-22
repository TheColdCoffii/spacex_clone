import { ReactNode } from 'react';

export default function Button({
    children,
}: {
    className?: string;
    children?: ReactNode;
}) {
    return <button>{children}</button>;
}

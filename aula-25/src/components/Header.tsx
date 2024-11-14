interface HeaderProps {
    title: string
}

export function Header(props: HeaderProps) {
    return (
        <header>{props.title}</header>
    )
}
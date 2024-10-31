// kebab case => dividido-por-traço
// snake case => dividido_por_underline
// camel case => divididoPorMaiusculo
// pascal case => DivididoPorMaiusculas

interface TitleProps {
    value: string
}

export function Title(props : TitleProps) {
    return (
        <h1>{props.value}</h1>
    )
}
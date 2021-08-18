import { CircularProgress } from "@material-ui/core"
import { useStyles } from "../Styles/Hooks"
import { Theme } from "../Styles/Types"

interface Props {
    theme: Theme
}

const LoadingIcon = ({ theme }: Props) => {
    const { spinner } = useStyles({ theme })

    return (
        <CircularProgress className={spinner} />
    )
}

export default LoadingIcon
import { Box } from "@material-ui/core"
import { useStyles } from "../Styles/Hooks"
import { Theme } from "../Styles/Types"

interface Props {
    theme: Theme
    children: React.ReactNode
}

const Layout = ({ theme, children }: Props) => {
    const { layout } = useStyles({ theme })

    return (
        <Box className={layout} >
            {children}
        </Box>
    )
}


export default Layout
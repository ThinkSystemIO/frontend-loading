import { Fab } from "@material-ui/core"
import { Brightness2, Brightness7 } from "@material-ui/icons"
import { useStyles } from "../Styles/Hooks"
import { LIGHT, Theme } from "../Styles/Types"

interface Props {
  theme: Theme
  onClick: () => void
}

const ThemeFab = ({ theme, onClick }: Props) => {
  const { fab } = useStyles({ theme })

  return (
    <Fab className={fab} onClick={onClick}>
      {theme === LIGHT ? <Brightness2 /> : <Brightness7 />}
    </Fab>
  )
}

export default ThemeFab
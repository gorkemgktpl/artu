import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"


type Props = {
    children: React.ReactNode
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
        className= "rounded-md bg-secondary-500 px-10 hover:bg-secondary-400 text-white py-2"
        onClick={() => setSelectedPage(SelectedPage.Contact)}
        href={`#${SelectedPage.Contact}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton
import {FC, ReactNode} from "react"
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

type Props = {
    children: ReactNode
}

const Layout: FC<Props> = ({children}) => {
    return (
        <div className={'app'}>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout


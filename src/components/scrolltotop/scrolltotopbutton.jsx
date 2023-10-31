import { BsArrowUpShort } from 'react-icons/bs'

export default function scrolltotopbutton({ active }) {

    return (
        <a href="#" onClick={() => {
            scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }} className={`scroll-top d-flex align-items-center justify-content-center ${active ? "active" : null}`}><i
            className="bi bi-arrow-up-short"><BsArrowUpShort /></i></a>
    )
}

scrolltotopbutton.defaultProps = {
    active: false
}
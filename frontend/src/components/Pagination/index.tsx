import { SalePage } from "types/sale";

type Props = {
    page: SalePage;
    onPageChange: Function;
}

const Pagination = ( { page, onPageChange } : Props ) => {

    return (
        <div className="row d-flex justify-content-center">
            <nav>
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${page.first ? 'disabled' : ''} `}>
                        <button className="page-link" onClick={() => onPageChange(0)}>&lt;&lt;</button>
                    </li>
                    <li className={`page-item ${page.first ? 'disabled' : ''} `}>
                        <button className="page-link" onClick={() => onPageChange(page.number - 1)}>&lt;</button>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">{page.number + 1}</span>
                    </li>
                    <li className={`page-item ${page.last ? 'disabled' : ''} `}>
                        <button className="page-link" onClick={() => onPageChange(page.number + 1)}>&gt;</button>
                    </li>
                    <li className={`page-item ${page.last ? 'disabled' : ''} `}>
                        <button className="page-link" onClick={() => onPageChange(page.totalPages - 1)}>&gt;&gt;</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;

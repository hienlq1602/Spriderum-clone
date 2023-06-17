import Pagination from 'react-bootstrap/Pagination';

const PaginationItem = ({page, isActive, onPageClick}) => {

    return (
        <Pagination.Item key={page} active={isActive}  onClick={() => onPageClick(page)}>
            {page}
        </Pagination.Item>
    )
}

export default PaginationItem;
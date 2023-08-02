import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import {paginationChaned} from '../features/pagination/paginatoinSlice';
// fix natrual language type

export default function CustomIcons() {

  const dispatch = useDispatch();
  const handleNextClick = (event, page) => {
    dispatch(paginationChaned(page))
  }

  return (
    <Stack spacing={15} >
      <Pagination
        count={5}
        onChange={handleNextClick}
      />
    </Stack>
);
}
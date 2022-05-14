import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import ComprarBtn from '../UI/ComprarBtn';

interface Column {
  id: 'title' | 'duration' | 'comprar';
  label: string;
  minWidth?: number;
  align?: 'left';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'title', label: 'Titulo', minWidth: 170 },

  {
    id: 'duration',
    label: 'Duración',
    minWidth: 170,
    align: 'left',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'comprar',
    label: 'Comprar',
    minWidth: 170,
  },
];

interface Data {
  title: string;

  duration: string;

  comprar: any;
}

function createData(title: string, duration: string, comprar: any): Data {
  return { title, duration, comprar };
}

const rows = [
  createData('In the Flesh?', '3:18', <ComprarBtn />),
  createData('The Thin ice', '2.26', <ComprarBtn />),
  createData('Another Brick in the Wall, Pt.1', '3.12', <ComprarBtn />),
  createData('The Happiest Days of Our Lives', '1.30', <ComprarBtn />),
  createData('In the Flesh?', '3:18', <ComprarBtn />),
  createData('The Thin ice', '2.26', <ComprarBtn />),
  createData('Another Brick in the Wall, Pt.1', '3.12', <ComprarBtn />),
  createData('The Happiest Days of Our Lives', '1.30', <ComprarBtn />),
];

export default function Albums() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(100);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="component-layout mt-3 animate__animated  animate__fadeIn">
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 255, backgroundColor: '#1f1d1d' }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      top: 1,
                      minWidth: column.minWidth,
                      color: 'white',
                    }}
                    sx={{ backgroundColor: '#1f1d1d' }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.title}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            sx={{ color: 'white' }}
                            key={column.id}
                            align={column.align}
                          >
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        {/*   <TablePagination
          sx={{ backgroundColor: '#1f1d1d', color: 'white' }}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </Paper>
    </div>
  );
}

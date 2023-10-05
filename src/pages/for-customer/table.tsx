import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React from 'react'

function createData(courseName: string, price: number) {
  return { courseName, price }
}

const rows = [createData('1回2時間, 月4回', 20000), createData('1回3時間, 月4回', 30000)]

const PriceTable: React.FC = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{ bgcolor: 'primary.light', borderRadius: 8, width: { xs: 320, sm: 540 } }}
    >
      <Table sx={{}} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontFamily: '"M PLUS Rounded 1c"',
                fontSize: { xs: 16, sm: 24 },
                fontWeight: 'bold',
                width: '50%',
              }}
              align='center'
            >
              コース
            </TableCell>
            <TableCell
              sx={{
                fontFamily: '"M PLUS Rounded 1c"',
                fontSize: { xs: 16, sm: 24 },
                fontWeight: 'bold',
                width: '50%',
              }}
              align='center'
            >
              料金
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.courseName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                sx={{
                  fontFamily: '"M PLUS Rounded 1c"',
                  fontSize: { xs: 16, sm: 24 },
                  width: '50%',
                }}
                component='th'
                scope='row'
                align='center'
              >
                {row.courseName}
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: '"M PLUS Rounded 1c"',
                  fontSize: { xs: 16, sm: 24 },
                  width: '50%',
                }}
                align='center'
              >
                {row.price}円
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default PriceTable

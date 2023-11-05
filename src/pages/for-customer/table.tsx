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

const rows = [
  createData('月2回', 11000),
  createData('月4回', 19800),
  createData('月8回', 39600),
  createData('月12回', 52800),
]

const PriceTable: React.FC = () => {
  return (
    <TableContainer
      component={Paper}
      sx={{ bgcolor: 'primary.main', borderRadius: 8, width: { xs: 300, sm: 540 } }}
    >
      <Table sx={{}} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontFamily: '"M PLUS Rounded 1c"',
                fontSize: { xs: 14, sm: 24 },
                fontWeight: 'bold',
                width: '50%',
              }}
              align='center'
            >
              コース(2時間/回)
            </TableCell>
            <TableCell
              sx={{
                fontFamily: '"M PLUS Rounded 1c"',
                fontSize: { xs: 14, sm: 24 },
                fontWeight: 'bold',
                width: '50%',
              }}
              align='center'
            >
              月額料金(税込)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.courseName}>
              <TableCell
                sx={{
                  fontFamily: '"M PLUS Rounded 1c"',
                  fontSize: { xs: 14, sm: 24 },
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
                  fontSize: { xs: 14, sm: 24 },
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

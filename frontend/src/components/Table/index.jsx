import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';
import PropTypes from 'prop-types';

const VirtuosoTableComponents = {
	Scroller: React.forwardRef((props, ref) => <TableContainer component={Paper} {...props} ref={ref} />),
	Table: (props) => <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />,
	TableHead,
	TableRow: ({ ...props }) => <TableRow {...props} />,
	TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
};


export default function ReactVirtualizedTable(props) {
    const { rows, columns } = props;
	function rowContent(_index, row) {
		return (
			<React.Fragment>
				{columns.map((column) => (
					<TableCell key={column.dataKey} align={column.numeric || false ? 'right' : 'left'}>
						{row[column.dataKey]}
					</TableCell>
				))}
			</React.Fragment>
		);
	}

    function fixedHeaderContent() {
        return (
            <TableRow>
                {columns.map((column) => (
                    <TableCell
                        key={column.dataKey}
                        variant="head"
                        align={column.numeric || false ? 'right' : 'left'}
                        style={{ width: column.width }}
                        sx={{
                            backgroundColor: '#0164EC',
                            color: '#fff',
                        }}
                    >
                        {column.label}
                    </TableCell>
                ))}
            </TableRow>
        );
    }

	return (
		<Paper style={{ height: '70vh', width: '100%' }}>
			<TableVirtuoso
				data={rows}
				components={VirtuosoTableComponents}
				fixedHeaderContent={fixedHeaderContent}
				itemContent={rowContent}
			/>
		</Paper>
	);
}

ReactVirtualizedTable.propTypes = {
    rows: PropTypes.array,
    columns: PropTypes.array,
}

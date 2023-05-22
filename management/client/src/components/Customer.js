import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import CustomerDelete from './CustomerDelete'


function Customer(props) {
  const { stateRefresh } = props;
  return (
    
        <TableRow>
            <TableCell>{props.id}</TableCell>
            <TableCell><img src={props.image} alt='프로필사진' style={{width:100, height:100}}/></TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.birthday}</TableCell>
            <TableCell>{props.gender}</TableCell>
            <TableCell>{props.job}</TableCell>
            <TableCell><CustomerDelete id={props.id} stateRefresh={stateRefresh}/></TableCell>
        </TableRow>
    
  )
}



export default Customer
import React from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { Tab } from '@material-ui/core'

function Customer(props) {
  return (
    
        <TableRow>
            <TableCell>{props.id}</TableCell>
            <TableCell><img src={props.image} alt='프로필사진' style={{width:100, height:100}}/></TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.birthday}</TableCell>
            <TableCell>{props.gender}</TableCell>
            <TableCell>{props.job}</TableCell>
        </TableRow>
    
  )
}



export default Customer
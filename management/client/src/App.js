import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { createTheme, makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import { Component, useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';




function App(props) {

    const[customerData, setCustomerData]= useState("");
    const[completed, setCompleted] = useState(0);
    const[isLoad, setIsLoad] = useState(false);

    const callApi = async () => {
      const response = await fetch('/api/customers');
      const body = await response.json();
      setIsLoad(true);
      console.log(body);
      return body;
    }
    

    const stateRefresh = () => {
      setCustomerData("")
      setCompleted(0)
      callApi().then((data) => setCustomerData(data));
    }


    useEffect(()=>{
      let complete = 0;
      let timer = setInterval(() => {
      if (complete >= 100) {
        complete = 0
      } else {
        complete += 1;
      }
      setCompleted(complete);
      if (isLoad) {
        clearInterval(timer);
      }
    }, 20);
      callApi().then((data) => setCustomerData(data));
    },[isLoad]);
    
  
 
  return (
    <div>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
              <TableCell>설정</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customerData.map ? customerData.map(c => {
                return (
                  <Customer
                    stateRefresh={stateRefresh}
                    key={c.id}
                    id={c.id}
                    image={c.image}
                    name={c.name}
                    birthday={c.birthday}
                    gender={c.gender}
                    job={c.job}
                  />
                );
              }) : 
              <TableRow>
                <TableCell colSpan='6' align='center'>
                  <CircularProgress variant="indeterminate" value={completed}></CircularProgress>
                </TableCell>
              </TableRow>
            }
          </TableBody>
        </Table>
      </Paper>
      <CustomerAdd stateRefresh={stateRefresh}/>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
// import { post } from 'axios';
import axios from 'axios';
function CustomerAdd(props) {
  const [file, setFile] = useState(null);
  const [userName, setUserName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [job, setJob] = useState('');
  const [fileName, setFileName] = useState('');
  const stateRefresh = props;
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addCustomer()
      .then((response) => {
        console.log(response.data);
        stateRefresh();
      });
      setFile(null)
      setUserName('')
      setBirthday('')
      setGender('')
      setJob('')
      setFileName('')
      
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.value);
  }

  const handleValueChange = (e) => {
    switch (e.target.name) {
      case 'userName':
        setUserName(e.target.value);
        break;
      case 'birthday':
        setBirthday(e.target.value);
        break;
      case 'gender':
        setGender(e.target.value);
        break;
      case 'job':
        setJob(e.target.value);
        break;
      default:
        break;
    }
  }

  const addCustomer = () => {
    const url = '/api/customers';
    const formData = new FormData();
    formData.append('image', file);
    formData.append('name', userName);
    formData.append('birthday', birthday);
    formData.append('gender', gender);
    formData.append('job', job);

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }

    return axios.post(url, formData, config);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>고객 추가</h1>
      프로필 이미지: <input type='file' name='file' file={file} value={fileName} onChange={handleFileChange}></input><br/>
      이름: <input type='text' name='userName' value={userName} onChange={handleValueChange}></input><br/>
      생년월일: <input type='text' name='birthday' value={birthday} onChange={handleValueChange}></input><br/>
      성별: <input type='text' name='gender' value={gender} onChange={handleValueChange}></input><br/>
      직업: <input type='text' name='job' value={job} onChange={handleValueChange}></input><br/>
      <button type='submit'>추가하기</button>
    </form>
  );
}

export default CustomerAdd; 
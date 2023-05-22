import React from 'react'

function CustomerDelete(props) {

    const { stateRefresh, id } = props;

    const deleteCustomer = (id) => {
        const url = '/api/customers/' + id;
        fetch(url, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(() => stateRefresh());
    }

  return (
    <button onClick={() => [deleteCustomer(id)]}>삭제</button>
  )
}

export default CustomerDelete
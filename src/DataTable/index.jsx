import React, { useState } from 'react'

import Pagination from './Pagination'
import Row from './Row'
import Search from './Search'

const DataTable = ({ userData, rowsPerPage = 40 }) => {
  const [displayUserData, setDisplayUserData] = useState(userData);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);

  const totalNumberOfPages = ()=>{
    if (rowsPerPage === 0) return 0
    return Math.ceil(displayUserData.length / rowsPerPage)
  }

  
  // should probably have a debounce function in here if this was a fetch call
  const search = (event) => {
    const text = event.target.value
    let userDataFound = userData

    if (text) {
      userDataFound = userData.filter((row) =>
        row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
        (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
      )
    }

    setDisplayUserData(userDataFound)
    totalNumberOfPages()
    setCurrentPageNumber(0)
    
  }

  const changeToPageNumber = (pageNumber) => {
    setCurrentPageNumber(pageNumber)
  }

  const rowsInPageNumber = (pageNumber) => {
    const startIndex = pageNumber * rowsPerPage
    return [startIndex, startIndex + rowsPerPage]
  }


  return(
    <div>
      <Search onSearch={search.bind(this)} />
      <table>
        <tbody>
          { displayUserData.map(user => <Row key={user.per_id} user={user} />).slice(...rowsInPageNumber(currentPageNumber)) }
        </tbody>
      </table>
      <Pagination
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
        onChange={changeToPageNumber.bind(this)} />
    </div>
  )
}

export default DataTable

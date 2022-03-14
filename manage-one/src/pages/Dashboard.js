import React, { useEffect } from 'react'
import './Dashboard.css'


function Dashboard() {
  const currentuser = null;
  let orgs = {
    org1: {
      orgID: "org1-thegreatorg1",
      orgName: "The Great Org 1",
      orgType: "IT-Service",
      orgPassword: "",
      regAddress: "",
      areaServed: "IN",
      contactEmail: "",
      contactPhn: "",
      est: "",
      gstin: "",
      relatedTableIDs: "",
      metadata: "",
      created: "13-Mar-2022"
    },
    org2: {
      orgID: "org2-thegreatorg2",
      orgName: "The Great Org 2",
      orgType: "Law",
      orgPassword: "",
      regAddress: "",
      areaServed: "US",
      contactEmail: "",
      contactPhn: "",
      est: "",
      gstin: "",
      relatedTableIDs: "",
      metadata: "",
      created: "13-Mar-2022"
    }
  }

  function fetchConnectedOrgs(user) {
    //connect to db
    //run select query for connected orgs
    //store res in const orgs
  }

  function reFetchConnectedOrgs(sortCode) {
    //connect to db
    //run select query for connected orgs according to sortCode
    //Name Asc 0
    //Name Desc 1
    //Created Asc 2
    //Created Desc 3
    //update res in const orgs
  }

  function connectDB() {
    const queryObject = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({query: "SELECT * FROM DUAL"})

    }
    fetch("/execute-query", queryObject)
      .then((res) => res.json())
      .then((data) => { console.log(data); });
  }

  useEffect(() => {
    fetchConnectedOrgs(currentuser)
  }, [])


  return (
    <div className='dashboard-container'>
      <div className="dashboard-header">
        <div>
          <h1>Connected Orgs</h1>
          <span className='subtitle'>Create, connect, disconnect or launch the orgs you use.</span>
        </div>
        <div className="actions">
          <button className="create-org">Create New Org</button>
          <button className="connect-org">Connect to Existing Org</button>
        </div>
      </div>
      <div className="list-orgs">
        <div className="filters">
          <h3>Total connected orgs ({Object.keys(orgs).length})</h3>
          <button className="filter-button">Sort By</button>
          <ul className='sort-dd'>
            <li>Name &uarr; (Asc)</li>
            <li>Name &darr; (Desc)</li>
            <li>Date Created &uarr; (Asc)</li>
            <li>Date Created &darr; (Desc)</li>
          </ul>
        </div>
        {
          Object.keys(orgs).map((item, index) => {
            return (
              <div className="org-item">
                <div>
                  <div className="org-title"><h3>{orgs[item].orgName}</h3></div>
                  <div className="org-metadata">
                    <table className="org-metadata-list">
                      <tr><td><li>Org ID</li></td><td>{orgs[item].orgID}</td></tr>
                      <tr><td><li>Type</li></td><td>{orgs[item].orgType}</td></tr>
                      <tr><td><li>Created</li></td><td>{orgs[item].created}</td></tr>
                    </table>
                  </div>
                </div>
                <div className="org-item-actions">
                  <button className="disconnect">Disconnect</button>
                  <button className="launch" onClick={connectDB}>Launch</button>
                </div>
              </div>)
          })
        }
      </div>
    </div>
  )
}

export default Dashboard
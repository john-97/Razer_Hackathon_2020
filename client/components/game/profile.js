/* eslint-disable */
import React from 'react'
import { getHours } from '../common/helper'

const Profile = (props) => {
  return (
    <div className="profile">
      <div className="profile-details">Username: {props.user.username}</div>
      <div className="profile-details">Email: {props.user.email}</div>
      <div className="profile-details">Salary: {props.profile.salary}</div>
      <div className="profile-details">Bank Balance: {props.profile.bank_balance}</div>
      <div className="profile-details">Start Year: 2000</div>
      <div className="profile-details">Current Year: {2000 + getHours(props.profile.start_time)}</div>
      <div className="profile-header">Loans</div>
      <div className="profile-seg">
        {props.profile.loans.map((loan, num) => {
          const listLoan = props.loans.filter(l => l.name == loan.name)[0];
          return (
            <div
              className="profile-seg-item"
              onClick={() => {

              }}
            >
              <img className="profile-seg-item-pic" src={listLoan.pic} />
              <div className="profile-seg-item-details">
                <div className="profile-seg-item-details-item">Name:</div>
                <div className="profile-seg-item-details-item">Loan Start:</div>
                <div className="profile-seg-item-details-item">Loan End:</div>
                <div className="profile-seg-item-details-item">Interest Rate:</div>
              </div>
              <div className="profile-seg-item-details">
                <div className="profile-seg-item-details-item">{listLoan.name}</div>
                <div className="profile-seg-item-details-item">{loan.start_year}</div>
                <div className="profile-seg-item-details-item">{loan.end_year}</div>
                <div className="profile-seg-item-details-item">{listLoan.interest_rates[getHours(props.profile.start_time)]}%</div>
              </div>'
            </div>
          )
        })}
      </div>
      <div className="profile-header">Stocks</div>
      <div className="profile-seg">
        {props.profile.stocks.map((stock, num) => {
          const listStock = props.stocks.filter(s => s.name == stock.name)[0];
          return (
            <div
              className="profile-seg-item"
              onClick={() => {

              }}
            >
              <img className="profile-seg-item-pic" src={listStock.pic} />
              <div className="profile-seg-item-details">
                <div className="profile-seg-item-details-item">Name:</div>
                <div className="profile-seg-item-details-item">No. Shares owned:</div>
                <div className="profile-seg-item-details-item">Share Price:</div>
                <div className="profile-seg-item-details-item">Value:</div>
              </div>
              <div className="profile-seg-item-details">
                <div className="profile-seg-item-details-item">{listStock.name}</div>
                <div className="profile-seg-item-details-item">{stock.shares}</div>
                <div className="profile-seg-item-details-item">{listStock.valuation[getHours(props.profile.start_time)] / listStock.total_shares}</div>
                <div className="profile-seg-item-details-item">{(listStock.valuation[getHours(props.profile.start_time)] / listStock.total_shares) * stock.shares}</div>
              </div>'
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Profile;

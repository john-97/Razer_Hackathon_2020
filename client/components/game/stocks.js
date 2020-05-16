/* eslint-disable */
import React from 'react'
import { getHours } from '../common/helper'

const Events = (props) => {
  return (
    <div className="stocks">
      <div className="list-header">Stocks</div>
      <div className="list-seg">
        {props.profile.stocks.map((stock, num) => {
          const listStock = props.stocks.filter(s => s.name == stock.name)[0];
          return (
            <div
              className="list-seg-item"
              onClick={() => {

              }}
            >
              <img className="list-seg-item-pic" src={listStock.pic} />
              <div className="list-seg-item-details">
                <div className="list-seg-item-details-item">Name:</div>
                <div className="list-seg-item-details-item">No. Shares owned:</div>
                <div className="list-seg-item-details-item">Share Price:</div>
                <div className="list-seg-item-details-item">Value:</div>
              </div>
              <div className="list-seg-item-details">
                <div className="list-seg-item-details-item">{listStock.name}</div>
                <div className="list-seg-item-details-item">{stock.shares}</div>
                <div className="list-seg-item-details-item">{listStock.valuation[getHours(props.profile.start_time)] / listStock.total_shares}</div>
                <div className="list-seg-item-details-item">{(listStock.valuation[getHours(props.profile.start_time)] / listStock.total_shares) * stock.shares}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Events;
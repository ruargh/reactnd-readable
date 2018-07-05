import React from 'react'
import SortByLink from '../containers/SortByLink'
import { SortByOptions } from '../actions'

const SortByList = () => (
  <div className="button-list">
    <span>Sort: </span>
    <SortByLink sortOption={SortByOptions.TIMESTAMP}>
      Timestamp
    </SortByLink>
    <SortByLink sortOption={SortByOptions.VOTE_SCORE}>
      Vote Score
    </SortByLink>
  </div>
)

export default SortByList

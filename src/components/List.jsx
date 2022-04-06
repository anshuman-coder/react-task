import React from 'react';
import {Card} from './';


const List = ({ array, loading }) => {
  return (
    <div className="list_container">
      { array.map((item, i) => <Card key={i} title={item} loading={loading} />) }
    </div>
  )
}


export default List

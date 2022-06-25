import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

function StudentList() {
  const pMark = 30;
  const MAX_MARK = 50;
  return (
    <>
      <ListGroup className="mb-3" id="scoreList">
        <ListGroup.Item>Student 1 <input type="number" className="std_lst_inp" value={pMark} /> of {MAX_MARK}</ListGroup.Item>
        <ListGroup.Item>Student 1 <input type="number" className="std_lst_inp" value={pMark} /> of {MAX_MARK}</ListGroup.Item>
        <ListGroup.Item>Student 1 <input type="number" className="std_lst_inp" value={pMark} /> of {MAX_MARK}</ListGroup.Item>
        <ListGroup.Item>Student 1 <input type="number" className="std_lst_inp" value={pMark} /> of {MAX_MARK}</ListGroup.Item>
        <ListGroup.Item>Student 1 <input type="number" className="std_lst_inp" value={pMark} /> of {MAX_MARK}</ListGroup.Item>
        <ListGroup.Item>Student 1 <input type="number" className="std_lst_inp" value={pMark} /> of {MAX_MARK}</ListGroup.Item>
        <ListGroup.Item>Student 1 <input type="number" className="std_lst_inp" value={pMark} /> of {MAX_MARK}</ListGroup.Item>
        <ListGroup.Item>Student 1 <input type="number" className="std_lst_inp" value={pMark} /> of {MAX_MARK}</ListGroup.Item>
        <ListGroup.Item>Student 1 <input type="number" className="std_lst_inp" value={pMark} /> of {MAX_MARK}</ListGroup.Item>
        <ListGroup.Item>Student 1 <input type="number" className="std_lst_inp" value={pMark} /> of {MAX_MARK}</ListGroup.Item>
        <ListGroup.Item>Student 1 <input type="number" className="std_lst_inp" value={pMark} /> of {MAX_MARK}</ListGroup.Item>
        <ListGroup.Item>Student 1 <input type="number" className="std_lst_inp" value={pMark} /> of {MAX_MARK}</ListGroup.Item>
        <ListGroup.Item>Student 1 <input type="number" className="std_lst_inp" value={pMark} /> of {MAX_MARK}</ListGroup.Item>
        <ListGroup.Item>Student 1 <input type="number" className="std_lst_inp" value={pMark} /> of {MAX_MARK}</ListGroup.Item>
        <ListGroup.Item>Student 1 <input type="number" className="std_lst_inp" value={pMark} /> of {MAX_MARK}</ListGroup.Item>
        <ListGroup.Item>Student 1 <input type="number" className="std_lst_inp" value={pMark} /> of {MAX_MARK}</ListGroup.Item>
        <ListGroup.Item>Student 1 <input type="number" className="std_lst_inp" value={pMark} /> of {MAX_MARK}</ListGroup.Item>
        <ListGroup.Item>Student 1 <input type="number" className="std_lst_inp" value={pMark} /> of {MAX_MARK}</ListGroup.Item>
        <ListGroup.Item>Student 1 <input type="number" className="std_lst_inp" value={pMark} /> of {MAX_MARK}</ListGroup.Item>
        <ListGroup.Item>Student 1 <input type="number" className="std_lst_inp" value={pMark} /> of {MAX_MARK}</ListGroup.Item>
        <ListGroup.Item>Student 1 <input type="number" className="std_lst_inp" value={pMark} /> of {MAX_MARK}</ListGroup.Item>
        <ListGroup.Item>Student 1 <input type="number" className="std_lst_inp" value={pMark} /> of {MAX_MARK}</ListGroup.Item>
        <ListGroup.Item>Student 1 <input type="number" className="std_lst_inp" value={pMark} /> of {MAX_MARK}</ListGroup.Item>
        <ListGroup.Item>Student 1 <input type="number" className="std_lst_inp" value={pMark} /> of {MAX_MARK}</ListGroup.Item>
      </ListGroup>
    </>
  );
}

export default StudentList;

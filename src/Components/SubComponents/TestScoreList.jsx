import React, { useState } from "react";
import TestScoreListModal from "./TestScoreListModal";
import ListGroup from "react-bootstrap/ListGroup";
import Alert from "react-bootstrap/Alert";
import { useUserDetail } from "../../Context/userDBContext";

export default function TestScoreList({ list }) {
  const [showModal, setModal] = useState(false);
  const [submitted, setSubmitted] = useState([]);
  const [title, setTitle] = useState("");
  const [due, setDue] = useState(new Date());
  const { getSubmitted } = useUserDetail();

  const handleClick = async (title, dueDate) => {
    let _submitted = await getSubmitted(title);
    setSubmitted(_submitted);
    setTitle(title);
    setDue(dueDate);
    setModal(true);
  };

  // function isOverDue(date) {
  //   return new Date(date.toDateString()) < new Date(new Date().toDateString());
  // }

  return list?.length ? (
    <>
      <ListGroup className="mb-3 ">
        {list.map((work, i) => (
          <ListGroup.Item
            key={i}
            onClick={() => {
              handleClick(work.title, work.date);
            }}
            disabled={!work}
          >
            {`${work.type} : ${work.title}`}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <TestScoreListModal
        submittedArr={submitted}
        title={title}
        show={showModal}
        onHide={() => {
          setModal(false);
        }}
        // isOverDue={isOverDue(due)}
      />
    </>
  ) : (
    <Alert variant="success">No Pending Tests</Alert>
  );
}

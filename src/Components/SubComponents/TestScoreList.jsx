import React, { useState } from "react";
import TestScoreListModal from "./TestScoreListModal";
import ListGroup from "react-bootstrap/ListGroup";
import Alert from "react-bootstrap/Alert";

export default function TestScoreList({ list }) {
  const [showModal, setModal] = useState(false);
  const [heading, setHeading] = useState("");
  const [due, setDue] = useState(new Date());

  const handleClick = (title, dueDate) => {
    setHeading(`${title}`);
    setDue(dueDate);
    setModal(true);
  };
  console.log(list)
  return list?.length ? (
    <>
      <ListGroup className="mb-3 ">
        {list.map((work, i) => (
          <ListGroup.Item
            key={i}
            onClick={() => {
              console.log(list);
              handleClick(work.title, work.date);
            }}
            disabled={!work}
          >
           {`${work.type} : ${work.title}`}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <TestScoreListModal
        show={showModal}
        onHide={() => {
          setModal(false);
        }}
        heading={heading}
        due={due}
      />
    </>
  ) : (
    <Alert variant="success">No Pending Tests</Alert>
  );
}

import React, { useState } from "react";
import WorkListModal from "./WorkListModal";
import ListGroup from "react-bootstrap/ListGroup";
import Alert from "react-bootstrap/Alert";

export default function WorkList({ list }) {
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
            {!work ? "No Works" : `${work.type} : ${work.title}`}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <WorkListModal
        show={showModal}
        onHide={() => {
          setModal(false);
        }}
        heading={heading}
        due={due}
      />
    </>
  ) : (
    <Alert variant="success">No Pending Works</Alert>
  );
}

import { useState } from "react";
import "./styles.css";

function Comment({ coments, addReply }) {
  const [replytext, setreplytext] = useState("");
  const [showReplyBox, setreplyBox] = useState(false);

  const handelReply = () => {
    setreplyBox(true);
  };

  const handelReplyComment = (id) => {
    console.log(id, replytext, addReply);
    addReply(id, replytext);
    setreplyBox(false);
    setreplytext("");
  };

  const handelCancel = () => {
    setreplyBox(false);
    setreplytext("");
  };
  return (
    <div>
      <li key={coments.id}>
        {coments.display}
        {!showReplyBox && <button onClick={handelReply}>Reply</button>}
        {showReplyBox ? (
          <>
            <input
              type=" text"
              value={replytext}
              onChange={(e) => setreplytext(e.target.value)}
            />
            <button
              onClick={() => {
                handelReplyComment(coments.id);
              }}
            >
              Save
            </button>
            <button onClick={handelCancel}>Cancel</button>
          </>
        ) : null}
      </li>
      {coments.childeren.length ? (
        <ul>
          {coments.childeren.map((item) => (
            <Comment
              className="reply"
              key={item.id}
              coments={item}
              addReply={addReply}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function App() {
  const [input, setInput] = useState("");
  const [coments, setComents] = useState([
    {
      id: 1,
      display: "ishan",
      childeren: [],
    },
  ]);

  const addReply = (id, replytext) => {
    const copy = [...coments];
    addComents(copy, id, replytext);
    setComents(copy);
  };

  const addComents = (copy, parentId, replytex) => {
    for (let i = 0; i < copy.length; i++) {
      let comment = copy[i];
      if (comment.id == parentId) {
        comment.childeren.unshift(newComent(replytex));
      }
    }
    for (let i = 0; i < copy.length; i++) {
      let comment = copy[i];
      console.log("----children-parentId--------", parentId);
      addComents(comment.childeren, parentId, replytex);
    }
  };
  const newComent = (input) => {
    return { id: new Date().getTime(), display: input, childeren: [] };
  };

  const addcomment = () => {
    if (input) {
      setComents([...coments, newComent(input)]);
      setInput("");
    }
  };
  return (
    <div className="App">
      <div className="inputcoment">
        <input
          type="text"
          placeholder="Add Coment"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="AddComent">
        <button onClick={addcomment}>Add Coment</button>
      </div>
      <div className="coments">
        {coments.map((item) => (
          <Comment key={item.id} coments={item} addReply={addReply} />
        ))}
      </div>
    </div>
  );
}

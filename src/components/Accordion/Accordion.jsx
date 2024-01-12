import React, { useRef, useState } from "react";
import "./index.scss";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const multiRef = useRef(null);

  const hanldeClick = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };

  const handleMultiSelection = () => {
    setEnableMultiSelection(!enableMultiSelection);
    console.log(enableMultiSelection);
    if (enableMultiSelection) {
      multiRef.current.style.opacity = "0.5";
    } else {
      multiRef.current.style.opacity = "1";
    }
  };

  const handleMutipleClick = (currentId) => {
    const copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(currentId);

    if (findIndexOfCurrentId === -1) copyMultiple.push(currentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMultiple);
  };

  return (
    <section className="wrapper">
      <button ref={multiRef} onClick={() => handleMultiSelection()}>
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem, index) => {
            return (
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMutipleClick(dataItem.id)
                    : () => hanldeClick(dataItem.id)
                }
                key={index}
                className="item"
              >
                <div className="title">
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>

                {enableMultiSelection
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )}
              </div>
            );
          })
        ) : (
          <p>No Data</p>
        )}
      </div>
    </section>
  );
};

// const Accordion = () => {
//   const [selected, setSelected] = useState(null);
//   const [enableMultiSelection, setEnableMultiSelection] = useState(false);
//   const [multiple, setMultiple] = useState([]);

//   const handleSingleSelection = (getCurrentId) => {
//     setSelected(getCurrentId === selected ? null : getCurrentId);
//   };

//   const handleMultiSelection = (getCurrentId) => {
//     let copyMultiple = [...multiple];
//     const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);

//     if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId);
//     else copyMultiple.splice(findIndexOfCurrentId, 1);

//     setMultiple(copyMultiple);
//   };

//   console.log({ selected, multiple });

//   return (
//     <section className="wraper">
//       <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
//         Enable Multi Selection
//       </button>
//       <div className="accordion">
//         {data && data.length > 0 ? (
//           data.map((dataItem, index) => {
//             return (
//               <div key={index} className="item">
//                 <div
//                   onClick={
//                     enableMultiSelection
//                       ? () => handleMultiSelection(dataItem.id)
//                       : () => handleSingleSelection(dataItem.id)
//                   }
//                   className="title"
//                 >
//                   <h3>{dataItem.question}</h3>
//                   <span>+</span>
//                 </div>
//                 {enableMultiSelection
//                   ? multiple.indexOf(dataItem.id) !== -1 && (
//                       <div className="content">{dataItem.answer}</div>
//                     )
//                   : selected === dataItem.id && (
//                       <div className="content">{dataItem.answer}</div>
//                     )}

//                 {/* {
//                                     selected === dataItem.id ||
//                                     multiple.indexOf(dataItem.id) !== -1 ?
//                                     <div className="content">{dataItem.answer}</div>
//                                     : null
//                                 } */}
//               </div>
//             );
//           })
//         ) : (
//           <div>No Data</div>
//         )}
//       </div>
//     </section>
//   );
// };

export default Accordion;

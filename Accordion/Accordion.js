import { useState } from "react";
export default function Accordion({ item, index, openIndex, setOpenIndex }) {
    return (
        <div>
            <div onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                {item.title + " "}
                <span aria-hidden={true} className="accordion-icon" />
            </div>
            {openIndex === index && <div>{item.description}</div>}
        </div>
    );
}

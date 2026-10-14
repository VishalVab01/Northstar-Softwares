"use client";

import { useState } from "react";

const questions = [
  {
    question: "How do I get started with Northstar Software?",
    answer: "Simply fill out the contact form, and we’ll reach out through email or WhatsApp based on your preferred method of communication.",
  },
  {
    question: "How involved do I need to be during the project?",
    answer: "You only need to share your content, preferences, and feedback at important stages. We handle the complete design, development, testing, and launch process.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "Most websites are completed within 2–6 weeks, depending on the number of pages, design direction, and required features.",
  },
  {
    question: "Do you provide support after the website is launched?",
    answer: "Yes. We offer post-launch maintenance, content updates, and technical support to ensure your website continues to perform well.",
  },
  {
    question: "Do you create responsive and eCommerce websites?",
    answer: "Absolutely. Every site we build is fully responsive, and we also develop complete eCommerce stores with payment integration and custom product layouts.",
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes — most of our work is international. Northstar Software serves clients across the United States, United Kingdom, Europe, the Middle East and worldwide, working across time zones with updates over email or WhatsApp.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section" id="faqs" aria-labelledby="faq-heading">
      <div className="faq-inner">
        <h2 id="faq-heading">Frequently Asked <em>Questions</em></h2>
        <div className="faq-list">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            return (
              <div className={`faq-item${isOpen ? " is-open" : ""}`} key={item.question}>
                <h3>
                  <button type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex(isOpen ? null : index)}>
                    <span><i>{index + 1}.</i> {item.question}</span>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m2 7 10 10L22 7" /></svg>
                  </button>
                </h3>
                <div id={panelId} className="faq-answer" role="region" aria-hidden={!isOpen}>
                  <div><p>{item.answer}</p></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

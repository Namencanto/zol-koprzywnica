import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type FaqProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  id: number;
  onClick: () => void;
};

const FAQItem = ({ question, answer, isOpen, id, onClick }: FaqProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    onClick();
  };

  useEffect(() => {
    if (!isOpen) setOpen(false);
  }, [isOpen]);

  return (
    <section
      aria-label={`Pytanie ${question}`}
      className="single-faq mb-8 w-full rounded-lg border border-background-secondary bg-background-secondary p-4 sm:p-8 lg:px-6 xl:px-8"
    >
      <button
        className="faq-btn flex w-full text-left"
        onClick={handleClick}
        aria-expanded={open ? "true" : "false"}
        aria-controls={`faq-${id}-content`}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-background-tertiary text-primary">
          {open ? (
            <FaChevronUp className="rotate-up" />
          ) : (
            <FaChevronDown className="rotate-down" />
          )}
        </div>
        <div className="w-full">
          <h3 className="text-lg font-semibold text-tertiary">{question}</h3>
        </div>
      </button>
      <TransitionGroup>
        {open && (
          <CSSTransition
            classNames="faq"
            timeout={{ enter: 300, exit: 300 }}
            unmountOnExit
          >
            <div id={`faq-${id}-content`} className="faq-content pl-[62px]">
              <p className="py-3 text-base leading-relaxed text-body-color">
                {answer}
              </p>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </section>
  );
};

export default FAQItem;

import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

type FaqProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

const FAQItem = ({ question, answer, isOpen, onClick }: FaqProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    onClick();
  };

  useEffect(() => {
    if (!isOpen) setOpen(false);
  }, [isOpen]);

  return (
    <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
      <button className="faq-btn flex w-full text-left" onClick={handleClick}>
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-gray-100  text-primary">
          {open ? (
            <FaChevronUp className="rotate-up" />
          ) : (
            <FaChevronDown className="rotate-down" />
          )}
        </div>
        <div className="w-full">
          <h4 className="text-lg font-semibold text-black">{question}</h4>
        </div>
      </button>
      <TransitionGroup>
        {open && (
          <CSSTransition
            classNames="faq"
            timeout={{ enter: 300, exit: 300 }}
            unmountOnExit
          >
            <div className="faq-content pl-[62px]">
              <p className="py-3 text-base leading-relaxed text-body-color">
                {answer}
              </p>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default FAQItem;

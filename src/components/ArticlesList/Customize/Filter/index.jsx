import { useRef } from "react";
import { TbTags } from "react-icons/tb";
import TagFilter from "./tagFilter";
import { IoIosArrowBack } from "react-icons/io";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Field, Form, Formik } from "formik";

const Filter = ({
  open,
  setOpen,
  articlesCategory,
  NewsCategoryId,
  setNewsCategoryId,
}) => {
  const developing = useRef();
  const noob = useRef();
  const pro = useRef();

  const handleCategory = (id, value) => {
    if (value === true) {
      setNewsCategoryId([...NewsCategoryId, id]);
    } else {
      NewsCategoryId.splice(NewsCategoryId.indexOf(id), 1);
    }
  };

  return (
    <>
      <Accordion className="flex flex-col gap-2" open={open === 1}>
        <AccordionHeader
          className="flex items-center justify-start gap-2 text-metricBlack hover:text-metricGray3 font-Iransans  outline-none"
          onClick={() => {
            open === 1 ? setOpen(0) : setOpen(1);
          }}
        >
          <TbTags className="text-2xl" />
          <h4>نشان ها</h4>
          <IoIosArrowBack
            className={
              open === 1
                ? "-rotate-90 transition-all duration-150"
                : "rotate-0 transition-all duration-150"
            }
          />
        </AccordionHeader>
      </Accordion>
    </>
  );
};

export default Filter;

import { useState } from "react";
import "./priceFilter.css";
import { IoIosArrowBack } from "react-icons/io";
import Slider from "@mui/material/Slider";
import Tag from "../../../../../assets/Icons/CourseList/bookmark-2.svg";
import Price from "../../../../../assets/Icons/CourseList/coin.svg";
import Tech from "../../../../../assets/Icons/CourseList/mobile-programming.svg";
import Class from "../../../../../assets/Icons/CourseList/briefcase.svg";
import level from "../../../../../assets/Icons/CourseList/task-square.svg";
import Teacher from "../../../../../assets/Icons/CourseList/teacher.svg";

import {
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";

const min = 0;
const max = 5000000;

const Filter = ({
	open,
	setOpen,
	setCostUp,
	setCostDown,
	courseTypes,
	courseLevels,
	courseTechnologies,
	setListTech,
	ListTech,
	setCourseTypeId,
	setCourseLevelId,
	courseTeachers,
	setTeacherId,
}) => {
	const [value, setValue] = useState([min, max]);
	const handleTech = (id, value) => {
		if (value === true) {
			setListTech([...ListTech, id]);
		} else {
			ListTech.splice(ListTech.indexOf(id), 1);
		}
	};
	const handleTypes = (id, value) => {
		if (value === true) {
			setCourseTypeId(id);
		} else {
			setCourseTypeId(0);
		}
	};
	const handleLevels = (id, value) => {
		if (value === true) {
			setCourseLevelId(id);
		} else {
			setCourseLevelId(0);
		}
	};
	const handleTeachers = (id, value) => {
		if (value === true) {
			setTeacherId(id);
		} else {
			setTeacherId(0);
		}
	};
	return (
		<>
			<Accordion className="flex flex-col gap-2" open={open === 1}>
				<AccordionHeader
					className="flex items-center justify-start gap-2 text-metricBlack hover:text-metricGray3  font-Iransans  outline-none"
					onClick={() => {
						open === 1 ? setOpen(0) : setOpen(1);
					}}
				>
					<img src={Tech} className="w-6" />
					<h4 className="text-sm">تکنولوژی</h4>
					<IoIosArrowBack
						className={
							open === 1
								? "-rotate-90 transition-all duration-150"
								: "rotate-0 transition-all duration-150"
						}
					/>
				</AccordionHeader>
				<AccordionBody className="font-Iransans">
					<div className="flex flex-wrap gap-2">
						{courseTechnologies.map((item, b) => (
							<div className="flex" key={b}>
								<input
									type="checkbox"
									name="Types"
									id={b + "tech"}
									className="peer hidden"
									onChange={(e) => handleTech(item.id, e.target.checked)}
								/>
								<label
									htmlFor={b + "tech"}
									className=" border border-gray-400 rounded-3xl py-2 px-4 cursor-pointer peer-checked:bg-metricPurple peer-checked:text-metricBlack peer-checked:border-none peer-checked:font-bold transition-all duration-150 "
								>
									{item.techName}
								</label>
							</div>
						))}
					</div>
				</AccordionBody>
			</Accordion>
			<Accordion open={open === 2} className="flex flex-col gap-2">
				<AccordionHeader
					className="flex items-center justify-start gap-2 text-metricBlack hover:text-metricGray3  font-Iransans  outline-none"
					onClick={() => {
						open === 2 ? setOpen(0) : setOpen(2);
					}}
				>
					<img src={Class} className="w-6" />
					<h4 className="text-sm">نوع کلاس</h4>
					<IoIosArrowBack
						className={
							open === 2
								? "-rotate-90 transition-all duration-150"
								: "rotate-0 transition-all duration-150"
						}
					/>
				</AccordionHeader>
				<AccordionBody className="font-Iransans">
					<div className="flex flex-wrap gap-2">
						{courseTypes.map((item, i) => (
							<div className=" flex" key={i}>
								<input
									type="checkbox"
									name="Types"
									id={i + "Types"}
									className="peer hidden"
									onChange={(e) => handleTypes(item.id, e.target.checked)}
								/>
								<label
									htmlFor={i + "Types"}
									className=" border border-gray-400 rounded-3xl py-2 px-4 cursor-pointer peer-checked:bg-metricPurple peer-checked:text-metricBlack peer-checked:border-none peer-checked:font-bold transition-all duration-150 "
								>
									{item.typeName}
								</label>
							</div>
						))}
					</div>
				</AccordionBody>
			</Accordion>
			<Accordion open={open === 3} className="flex flex-col gap-2">
				<AccordionHeader
					className="flex items-center justify-start gap-2 text-metricBlack hover:text-metricGray3  font-Iransans  outline-none"
					onClick={() => {
						open === 3 ? setOpen(0) : setOpen(3);
					}}
				>
					<img src={level} className="w-6" />
					<h4 className="text-sm">سطح آموزشی</h4>
					<IoIosArrowBack
						className={
							open === 3
								? "-rotate-90 transition-all duration-150"
								: "rotate-0 transition-all duration-150"
						}
					/>
				</AccordionHeader>
				<AccordionBody className="font-Iransans">
					<div className="flex flex-wrap gap-2">
						{courseLevels.map((item, c) => (
							<div className="flex" key={c}>
								<input
									type="checkbox"
									name="Levels"
									id={c + "Levels"}
									className="peer hidden"
									onChange={(e) => handleLevels(item.id, e.target.checked)}
								/>
								<label
									htmlFor={c + "Levels"}
									className=" border border-gray-400 rounded-3xl py-2 px-4 cursor-pointer peer-checked:bg-metricPurple peer-checked:text-metricBlack peer-checked:border-none peer-checked:font-bold transition-all duration-150 "
								>
									{item.levelName}
								</label>
							</div>
						))}
					</div>
				</AccordionBody>
			</Accordion>
			<Accordion open={open === 7} className="flex flex-col gap-2">
				<AccordionHeader
					className="flex items-center justify-start gap-2 text-metricBlack hover:text-metricGray3  font-Iransans  outline-none"
					onClick={() => {
						open === 7 ? setOpen(0) : setOpen(7);
					}}
				>
					<img src={Teacher} className="w-6" />
					<h4 className="text-sm">اساتید</h4>
					<IoIosArrowBack
						className={
							open === 7
								? "-rotate-90 transition-all duration-150"
								: "rotate-0 transition-all duration-150"
						}
					/>
				</AccordionHeader>
				<AccordionBody className="font-Iransans">
					<div className="flex flex-wrap gap-2">
						{courseTeachers.map((item, c) => (
							<div className="flex" key={c}>
								<input
									type="checkbox"
									name="teacher"
									id={c + "teacher"}
									className="peer hidden"
									onChange={(e) =>
										handleTeachers(item.teacherId, e.target.checked)
									}
								/>
								<label
									htmlFor={c + "teacher"}
									className=" border border-gray-400 rounded-3xl py-2 px-4 cursor-pointer peer-checked:bg-metricPurple peer-checked:text-metricBlack peer-checked:border-none peer-checked:font-bold transition-all duration-150 "
								>
									{item.fullName}
								</label>
							</div>
						))}
					</div>
				</AccordionBody>
			</Accordion>
			<Accordion open={open === 4} className="flex flex-col gap-2">
				<AccordionHeader
					className="flex items-center gap-2 font-I text-metricBlack hover:text-metricGray3  justify-start outline-none"
					onClick={() => {
						open === 4 ? setOpen(0) : setOpen(4);
					}}
				>
					<img src={Price} className="w-6" />
					<h4 className="text-sm ">قیمت</h4>
					<IoIosArrowBack
						className={
							open === 4
								? "-rotate-90 transition-all duration-150"
								: "rotate-0 transition-all duration-150"
						}
					/>
				</AccordionHeader>
				<AccordionBody className="font-Iransans">
					<p className="text-base text-gray-400 text-nowrap">
						از {value[0].toLocaleString()} تا {value[1].toLocaleString()} تومان
					</p>
					<div className=" flex items-center relative px-4 py-6">
						<Slider
							value={value}
							onChange={(e, v) => {
								setValue(v);
								setCostDown(value[0]);
								setCostUp(value[1]);
							}}
							// onBlur={handleFilter}
							valueLabelDisplay="auto"
							disableSwap
							min={min}
							max={max}
							step={10000}
						/>
					</div>
				</AccordionBody>
			</Accordion>
		</>
	);
};

export default Filter;

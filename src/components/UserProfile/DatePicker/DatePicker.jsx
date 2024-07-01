import { DatePicker } from "zaman";
import { formDateModifier } from "../../../core/utils/dateModifier";

const ShamsiDatePicker = ({ field, form, ...props }) => {
	const { name, value } = field;
	const { setFieldValue } = form;
	const handleChange = (date) => {
		const selectedDate = formDateModifier(date.value);
		console.log(selectedDate, date);
		setFieldValue(name, selectedDate);
	};
	return (
		<DatePicker
			defaultValue={value}
			onChange={handleChange}
			locale="fa"
			{...props}
			className="z-40"
			inputClass="z-0 px-5 py-3 w-full rounded-full bg-metricWhite text-metricBlack border border-metricGray2 outline-none focus:border-metricGray3 transition-all duration-150 text-sm"
		/>
	);
};

export default ShamsiDatePicker;

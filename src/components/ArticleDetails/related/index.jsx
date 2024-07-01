import ArticleCard from "../../ArticlesList/ArticleCard";
import Reveal from "../../common/reveal";

const Related = () => {
	return (
		<div>
			<div>
				<h3 className="text-4xl font-bold ">بلاگ های مرتبط</h3>
			</div>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-10 lg:px-20 ltr">
				<Reveal del={1 * 0.05} dur={0.25} dir={50}>
					<ArticleCard />
				</Reveal>
				<Reveal del={2 * 0.05} dur={0.25} dir={50}>
					<ArticleCard />
				</Reveal>
				<Reveal del={3 * 0.05} dur={0.25} dir={50}>
					<ArticleCard />
				</Reveal>
			</div>
		</div>
	);
};
export default Related;

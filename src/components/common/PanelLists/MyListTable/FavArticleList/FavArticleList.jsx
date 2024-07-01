import { ClipLoader } from "react-spinners";
import Article from "../Article";

const FavArticleList = ({ list }) => {
	return (
		<div
			className={`flex flex-col items-center  divide-y divide-gray-400 overflow-y-auto ${
				list["totalCount"] === 2 ? "h-[323px]" : "h-[300px]"
			}  scrolldiv`}
		>
			{!list["myFavoriteNews"] ? (
				<ClipLoader size={50} />
			) : (
				list["myFavoriteNews"].map((e, i) => {
					return (
						<>
							<Article
								title={e.title}
								img={e.currentImageAddressTumb}
								desc={e.description}
								date={e.updateDate}
								id={e.newsId}
								key={i}
							/>
						</>
					);
				})
			)}
		</div>
	);
};

export default FavArticleList;

import { useEffect, useState } from "react";
import Hero from "../../components/ArticleDetails/hero";
import Main from "../../components/ArticleDetails/main";
import Related from "../../components/ArticleDetails/related";
import { useParams } from "react-router-dom";
import { ArticleDetailsAPI } from "../../core/services/api/ArticleDetails";
import { dateModifier } from "../../core/utils/dateModifier";
import LocomotiveScroll from "locomotive-scroll";
import NestedCommentSystemArticle from "../../components/common/Comment/ArticleComment";


const ArticleDetails = () => {

	const [articleData, setArticleData] = useState([]);
  const [changeFlag, setChangeFlag] = useState(false)
  const params= useParams()

  const CallApi = async () => {
    const res = await ArticleDetailsAPI(params);
    setArticleData(res.detailsNewsDto);
  }

  const FlagHandler = () => {
    setChangeFlag(!changeFlag);
  }  

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();	
    CallApi();
  },[changeFlag])

	return (
		<div className="mt-20 mb-10 flex flex-col gap-14 px-[30px]">
			<Hero articleData={articleData} title={articleData.title} tag={articleData.newsCatregoryName} date={dateModifier(articleData.insertDate)} name={articleData.addUserFullName} minidisc={articleData.miniDescribe} FlagHandler={FlagHandler} currentUserFavoriteId={articleData.currentUserFavoriteId} likeId={articleData.likeId} isCurrentUserFavorite={articleData.isCurrentUserFavorite} />
			<Main image={articleData.currentImageAddress} disc={articleData.describe} />
      <NestedCommentSystemArticle params={params} />
			<Related  />
		</div>
	);
};

export default ArticleDetails;

import { useEffect, useState } from "react";
import Header from "../../components/UserPanel/Header";
import PanelSideBar from "../../components/UserPanel/SideBar";
import { Outlet, useNavigate } from "react-router-dom";
import { getProfileInfoApi } from "../../core/services/api/panel/getProfileInfo";
import { useDispatch, useSelector } from "react-redux";
import { setState } from "../../core/provider/userProfile/profile";
import Joyride from "react-joyride";
import { AnimatePresence } from "framer-motion";
import Modal from "../../components/common/Modal";
import Accounts from "../../components/UserPanel/Accounts/Accounts";

const PanelLayOut = () => {
	const { profile } = useSelector((s) => {
		return s.profile;
	});
	const dispatch = useDispatch();
	const getProfileInfo = async () => {
		const result = await getProfileInfoApi();
		dispatch(setState(result));
	};
	useEffect(() => {
		getProfileInfo();
	}, []);

	const [accountModal, setAccountModal] = useState(false);
	return (
		<>
			<div className="bg-metricWhite min-w-screen min-h-screen max-w-[1400px]">
				<PanelSideBar />
				<Header setAccountModal={setAccountModal} />
				<div className="lg:pr-40 lg:pl-10 md:pr-20 sm:pr-20 pr-5 pt-20 pb-5 md:pl-0 pl-0">
					<Outlet />
				</div>
				<AnimatePresence mode="wait">
					{accountModal && (
						<Modal
							isOpen={accountModal}
							onClose={() => {
								setAccountModal(false);
							}}
							height="600px"
						>
							<Accounts />
						</Modal>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};
export default PanelLayOut;

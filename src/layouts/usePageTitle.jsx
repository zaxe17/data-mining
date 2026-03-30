import React, { useEffect } from "react";

const usePageTitle = (page) => {
	useEffect(() => {
		document.title = `DATA MINING - ${page}`;
		window.scrollTo(0, 0);
	}, [page]);
};

export default usePageTitle;

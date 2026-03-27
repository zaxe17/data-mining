import React, { useEffect } from "react";

const PageTitle = (page) => {
	useEffect(() => {
		document.title = `DATA MINING - ${page}`;
	});
};

export default PageTitle;

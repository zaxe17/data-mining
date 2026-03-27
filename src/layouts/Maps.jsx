import { Icon } from "@iconify/react";
import Container from "./Container";

const Maps = ({ legends, height }) => {
	return (
		<Container
			icon="boxicons:location"
			iconColor="#2563EB"
			headingText="Affordable Locations in Manila"
			button={true}>
			{/* MAP */}
			<div className="w-full mt-4">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3663.602095603673!2d121.02911458227976!3d14.656680018140756!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7c7722bc6f1%3A0xdc87cf9ed19d652e!2sSM%20City%20North%20EDSA!5e1!3m2!1sen!2sph!4v1774013544416!5m2!1sen!2sph"
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					style={{ border: 0, height: `${height}px` }}
					className="w-full rounded-md"></iframe>
			</div>

			{/* LEGENDS */}
			<div className="flex justify-start gap-4 mt-4">
				{legends.map((legend, i) => (
					<div key={i} className="flex items-start gap-1">
						<Icon
							icon="ic:twotone-circle"
							className="mt-1.25 w-4 h-4"
							style={{ color: `${legend.color}` }}
						/>
						<span>{legend.label}</span>
					</div>
				))}
			</div>
		</Container>
	);
};

export default Maps;

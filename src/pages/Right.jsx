import React from "react";
import ToggleText from "../components/ToggleText";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

const Right = () => {
	return (
		<div className="right">
			<ToggleText text="About Me">
				<About />
			</ToggleText>
			<ToggleText text="Projects">
				<Projects />
			</ToggleText>
		</div>
	);
};

export default Right;

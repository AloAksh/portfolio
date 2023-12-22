import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
	const myProjects = [
		{
			name: "To-Do Application",
			desc: "A productivity tool that helps users organize tasks efficiently. Users can create, edit, and remove their tasks when completed, with a clean and intuitive interface.",
			link: "www.google.com",
			tech: ["ReactJS", "React Router", "Tailwind CSS"],
		},
		{
			name: "To-Do Application",
			desc: "A productivity tool that helps users organize tasks efficiently. Users can create, edit, and remove their tasks when completed, with a clean and intuitive interface.",
			link: "www.google.com",
			tech: ["ReactJS", "React Router", "Tailwind CSS"],
		},
		{
			name: "To-Do Application",
			desc: "A productivity tool that helps users organize tasks efficiently. Users can create, edit, and remove their tasks when completed, with a clean and intuitive interface.",
			link: "www.google.com",
			tech: ["ReactJS", "React Router", "Tailwind CSS"],
		},
		{
			name: "To-Do Application",
			desc: "A productivity tool that helps users organize tasks efficiently. Users can create, edit, and remove their tasks when completed, with a clean and intuitive interface.",
			link: "www.google.com",
			tech: ["ReactJS", "React Router", "Tailwind CSS"],
		},
    ];

	return (
		<div>
			{myProjects.map((proj, index) => {
				return (
					<div className="text-center text my-5 " key={index}>
						<p className="font-bold">{proj.name}</p>
						<p className="text-left">{proj.desc}</p>
						<ul className="columns-2">
							{proj.tech.map((t, ind) => {
								return <li key={ind}>{t}</li>;
							})}
						</ul>
						<Link to={{pathname: proj.link}} target='_blank' className="decoration-wavy">{proj.link}</Link>
					</div>
				);
			})}
		</div>
	);
};

export default Projects;

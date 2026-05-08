"use client";

import SectionHeading from "./SectionHeading";
import Wrapper from "./Wrapper";
import teamMember from "../assets/dr1.png";
import TeamMember from "./TeamMember";
import Carousel from "./Carousel";

const Team = () => (
	<section id="team">
		<Wrapper>
			<SectionHeading
				direction="right"
				title={
					<>
						Conheça nossa equipe{" "}
						<span className="text-[2.6rem] font-bold">de profissionais</span>
					</>
				}
				subtitle={
					<>
						Nossos <span className="text-accent">melhores</span> especialistas
					</>
				}
			/>
			<div className="mt-20">
				<Carousel className="px-20">
					{Array.from(Array(6), (_, index) => (
						<TeamMember
							image={teamMember}
							name="Ivan Primak"
							occupation="Periodontista"
							key={index}
						/>
					))}
				</Carousel>
			</div>
		</Wrapper>
	</section>
);

export default Team;

import FlexSection from "./FlexSection";
import Image from "next/image";
import servicesImage from "../assets/services.svg";
import { AiOutlineSafety } from "react-icons/ai";
import twclsx from "@/utils/twclsx";

const Services = () => (
	<FlexSection sectionClassName="relative" wrapperClassName="items-start" id="services">
		<div
			className={twclsx(
				"absolute left-0 top-0 w-full lg:w-[calc(50%-2.5rem)] h-full bg-[#8888880c]",
				"rounded-br-[4rem] -z-10"
			)}
		></div>
		<div className="flex-1">
			<h2 className="text-4xl font-semibold">
				Sempre <span className="text-accent">sorria</span> em qualquer
				ocasião
			</h2>
			<Image
				className="mt-20 hidden w-full lg:block"
				src={servicesImage}
				alt="services"
			/>
		</div>
		<div className="flex-1 mt-10 lg:mt-0">
			<p className="relative text-lg">
				Também oferecemos procedimentos que melhoram a aparência do seu
				sorriso, dando a você mais confiança. Veja a lista abaixo.
			</p>
			<h3 className="mt-20 text-2xl font-semibold">O que oferecemos</h3>
			<ul className="mt-8 grid grid-cols-1 gap-x-11 gap-y-6 sm:grid-cols-2">
				{[
					"Check-ups preventivos",
					"Odontologia estética",
					"Ortodontia",
					"Exames de rotina",
					"Atendimento de emergência",
					"Implantes dentários",
					"Odontopediatria",
					"Consultas por telefone"
				].map((title, index) => (
					<li
						className="flex items-center gap-2 text-lg font-medium"
						key={index}
					>
						<AiOutlineSafety className="w-6 h-6" />
						{title}
					</li>
				))}
			</ul>
		</div>
	</FlexSection>
);

export default Services;

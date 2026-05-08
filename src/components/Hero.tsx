import FlexSection from "./FlexSection";
import Image from "next/image";
import heroImage from "../assets/hero.svg";
import ButtonLink from "./ButtonLink";

const Hero = () => (
	<FlexSection>
		<div className="flex-1">
			<h1 className="text-[2.6rem] font-bold tracking-wide">
				Nós realizamos todos os tipos de
				serviços odontológicos com <span className="text-accent">qualidade</span>
			</h1>
			<p className="mt-6 text-lg text-secondary">
				Clínica odontológica moderna onde você pode receber uma
				consulta e tratamento qualificados
			</p>
            <div className="mt-16 flex items-center gap-7">
                <ButtonLink href="#booking">
                    Enviar solicitação
                </ButtonLink>
                <ButtonLink href="#services" variant="secondary">
                    Saiba mais
                </ButtonLink>
            </div>
		</div>
		<div className="flex-1 hidden lg:block">
			<Image className="w-full" src={heroImage} alt="hero" />
		</div>
	</FlexSection>
);

export default Hero;

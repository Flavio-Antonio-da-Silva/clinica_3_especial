import FlexSection from "./FlexSection";
import laserImage from "../assets/laser.svg";
import scannerImage from "../assets/scanner.svg";
import implantImage from "../assets/implant.svg";
import Image from "next/image";
import BenefitItem from "./BenefitItem";
import SectionHeading from "./SectionHeading";

const Benefits = () => (
	<FlexSection id="benefits">
		<SectionHeading
			direction="left"
			title={
				<>
					O que torna nossa clínica{" "}
					<span className="text-[2.6rem] font-bold">notável</span>
				</>
			}
			subtitle={
				<>
					Nossos <span className="text-accent">diferenciais</span>
				</>
			}
		/>
		<div className="mt-20 flex gap-4 lg:gap-14 w-full justify-between flex-col sm:flex-row">
			<BenefitItem
				Icon={<Image className="w-24 h-24" src={laserImage} alt="laser" />}
				name="Lasers modernos"
				description="Lasers de diodo avançados. Seu tratamento será rápido e indolor"
			/>
			<BenefitItem
				className="lg:mt-12"
				Icon={<Image className="w-24 h-24" src={scannerImage} alt="scanner" />}
				name="Scanners 3D"
				description="Scanners 3D de alta tecnologia fazem imagens rápidas em modo automático"
			/>
			<BenefitItem
				Icon={<Image className="w-24 h-24" src={implantImage} alt="implant" />}
				name="Implantes dentários"
				description="Mais de 30 anos instalando implantes. Você poderá aproveitar seus alimentos favoritos novamente!"
			/>
		</div>
	</FlexSection>
);

export default Benefits;

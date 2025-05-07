import { useRef, useState, useLayoutEffect } from "react";
import { CardWithImageAndDescription } from "./CardWithImageAndDescription";
import { motion, useScroll, useTransform } from "framer-motion";

export function HorizontalScrollCarousel() {
  const targetRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [maxX, setMaxX] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  useLayoutEffect(() => {
    const updateWidth = () => {
      if (carouselRef.current) {
        const totalWidth = carouselRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setMaxX(totalWidth - viewportWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const translatedX = useTransform(
    scrollYProgress,
    [0, 0.8],
    [0, -maxX],
    { clamp: true }
  );

  return (
    <div ref={targetRef} className="py-12 h-[200vh] w-full">
      <div className="sticky top-1/3 flex items-center overflow-hidden">
        <motion.div
          ref={carouselRef}
          style={{ x: translatedX }}
          className="flex flex-row gap-6 px-4"
        >
          <CardWithImageAndDescription
            title="POSITIVE VENTURES"
            imageSrc="/assets/positive-ventures.svg"
            imageAlt="Positive Ventures Logo"
          >
            <p className="text-sm md:text-base">
              Com o lema de gerar valor econômico, comunitário e ambiental em cada
              investimento, este fundo de capital de risco identifica
              empreendedores que buscam construir empresas a serviço da sociedade.
              Ele prioriza negócios com culturas que incorporam as melhores
              práticas para todos os seus stakeholders, criando modelos mais
              sustentáveis e inclusivos.
            </p>
          </CardWithImageAndDescription>

          <CardWithImageAndDescription
            title="YUNUS NEGÓCIOS SOCIAIS BRASIL"
            imageSrc="/assets/yunus-logo.svg"
            imageAlt="Yunus Negócios Sociais Brasil Logo"
          >
            <p className="text-sm md:text-base">
              Com a missão de combater a pobreza e as mudanças climáticas, a
              organização desenvolve modelos inovadores e autossustentáveis que
              atendem às necessidades de comunidades de baixa e média renda. Seus
              programas fornecem produtos e serviços acessíveis, conectam mercados
              para mercadorias locais e criam oportunidades de renda sustentável,
              promovendo impacto nos ecossistemas econômicos locais.
            </p>
          </CardWithImageAndDescription>

          <CardWithImageAndDescription
            title="ZUNNE"
            imageSrc="/assets/zunne-logo.svg"
            imageAlt="Zunne Logo"
          >
            <p className="text-sm md:text-base">
              Parceira comprometida com a democratização do investimento de
              impacto positivo, a organização torna possível que qualquer pessoa
              contribua para o crescimento de negócios no Norte e Nordeste do
              Brasil. Por meio de sua plataforma <span className="font-bold">RENOVA</span>,
              baseada em empréstimos coletivos diretos, múltiplos investidores podem alocar recursos
              diretamente nos negócios com os quais mais se identificam.
            </p>
          </CardWithImageAndDescription>
        </motion.div>
      </div>
    </div>
  );
}

import { HorizontalScrollCarousel } from "./HorizontalScrollCarousel";

const FinalSection = () => {
  return (
    <>
    <div className="py-12 px-4 sm:px-6 md:px-16 max-w-2xl sm:max-w-4xl md:max-w-7xl mx-auto">
      <h1 className="font-serif text-left mb-6 sm:mb-8 md:mb-16 text-4xl sm:text-5xl md:text-[96px]">
        Investimento de Impacto
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 md:pl-70">
        <div className="space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg leading-relaxed">
            <span className="font-bold">O Instituto Beja</span> está firmemente comprometido com a promoção de mudanças sociais e ambientais positivas e sustentáveis. Para isso, dedicamos parte de nossos recursos aos investimentos de impacto, uma abordagem que vai além do retorno financeiro tradicional. Nosso foco é gerar benefícios tangíveis para a sociedade e o meio ambiente, mostrando na prática como conciliar rentabilidade financeira com benefícios positivos.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            Recentemente, decidimos compartilhar nossa carteira de investimentos, com o objetivo de inspirar o ecossistema filantrópico a seguir um caminho semelhante. A iniciativa busca demonstrar o potencial transformador dessa estratégia, ao combinar resultados econômicos com soluções sociais e ambientais.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            Além das doações, o <span className="font-bold">Instituto Beja</span> adota uma estratégia diversificada de alocamento dos recursos enquanto não destinados diretamente à filantropia. Investimos em uma variedade de instrumentos financeiros que garantem a manutenção dos recursos, promovem rentabilidade e maximizam o benefício em áreas-chave, alinhadas às causas que apoiamos.
          </p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <p className="text-base sm:text-lg leading-relaxed">
            Investimos em fundos de investimento direcionados às áreas de tecnologia, meio ambiente e educação, que buscam tanto retorno financeiro quanto impacto social e ambiental. Adicionalmente, engajamo-nos em debêntures que apoiam iniciativas alinhadas à nossa missão, incentivando soluções inovadoras e sustentáveis. Destacamos nosso papel como garantidores de fundos de empréstimo voltados para mulheres empreendedoras no Norte e Nordeste do Brasil. Essa iniciativa viabiliza acesso a linhas de créditos antes inacessíveis, proporcionando autonomia financeira e promovendo equidade de gênero, justiça social e racial. Os recursos garantidos são utilizados apenas em caso de inadimplência, criando um mecanismo eficaz e inovador de apoio. Além disso, adotamos abordagens de blended finance, integrando capital concessional com capital retornável, escalando o alcance e a eficácia de nossas ações.
          </p>

          <p className="text-base sm:text-lg leading-relaxed">
            Ao compartilhar nossa abordagem, buscamos inspirar outras fundações e institutos a adotarem estratégias que conciliem impacto social e ambiental com a rentabilidade financeira.
          </p>
        </div>
      </div>
    </div>

    <HorizontalScrollCarousel />
  </>
  );
};

export default FinalSection;

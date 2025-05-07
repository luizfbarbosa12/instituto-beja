import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { NoticeContainer } from "./ui/NoticeContainer";
import { NoticeColumn } from "./ui/NoticeColumn";
import { SectionTitle } from "./ui/SectionTitle";

export function FoundLetterToContextTransition() {
  const container = useRef(null);
  const svgLineRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".ball",
        { scale: 1, transformOrigin: "center top" },
        {
          scale: 2,
          scrollTrigger: {
            trigger: container.current,
            start: "top 50%",
            end: "top 0%",
            scrub: 1,
          },
        },
      );
      if (svgLineRef.current) {
        const path = svgLineRef.current as SVGPathElement;

        const pathLength = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: path,
            start: "top 80%",
            end: "bottom 10%",
            scrub: true,
          },
        });
      }
    },
    { scope: container },
  );

  return (
    <>
      <div className='bg-retro-ochre pb-58 flex-1 editorial flex items-start pt-30 justify-start text-left relative'>
        <p className='max-w-68 text-3xl leading-[160%] tablet:text-6xl tablet:max-w-[1084px] mx-7 tablet:mx-32 flex flex-col gap-8 text-porcelain'>
          Neste relatório anual, <br className='hidden tablet:inline' />
          convidamos você a explorar <br className='hidden tablet:inline' /> as
          ações do Instituto Beja em 2024.
        </p>
      </div>
      <div
        className='flex flex-col overflow-hidden relative bg-retro-ochre'
        ref={container}
      >
        <div className='ball rounded-t-[100vw] absolute w-full h-full bg-porcelain overflow-hidden' />

        <div className='vent-container mb-9 tablet:mb-16 min-h-screen z-1 relative mt-60 tablet:mt-140 overflow-hidden flex flex-col mx-4.5 tablet:mx-25'>
          <SectionTitle title='Contexto' className='tablet:pb-14' />

          <h3 className='py-7.5 px-2.5 text-base tablet:text-4xl text-rose editorial flex self-end flex-col max-w-250 tablet:ml-55 tablet:pb-22.5'>
            Este documento sintetiza as investigações, interações, descobertas e
            reflexões coletivas ao longo dos três anos que nos inspiram
            diariamente a desafiar modelos ultrapassados para a prática de uma
            filantropia que gostamos de denominar como “oxigenada”.
          </h3>
          <NoticeContainer className='max-w-250 self-end'>
            <NoticeColumn>
              <p>
                Em 2024, o Beja dedicou-se a entender profundamente os preceitos
                e processos que revitalizam o solo sobre o qual o setor da
                filantropia se fundamenta e se reinventa. O ano foi marcado pela
                necessidade de agilidade e objetividade em nossa adaptação e
                atuação frente às demandas de responsabilidade social.
                Implementamos a evolução da Teoria de Mudança, revisada em 2023,
                assumindo os riscos e desafios necessários para remodelar nossas
                práticas em um ambiente onde curiosidade, empatia, transparência
                e responsabilidade continuam sendo valores fundamentais da
                governança.
              </p>
              <p>
                Fiel à missão de repensar paradigmas na filantropia, o Beja
                seguiu promovendo encontros, diálogos e pesquisas, utilizando
                ferramentas cada vez mais sofisticadas para prototipar novas
                visões e práticas. Esse compromisso com a inovação permitiu
                avanços significativos na forma como o Instituto constrói
                conhecimento e influência no setor.
              </p>
            </NoticeColumn>
            <NoticeColumn>
              <p>
                Nesse contexto de evolução e crescimento, uma das principais
                transformações foi a adoção de um novo modelo de governança,
                mais participativo e plural, com a substituição da figura
                vertical de um Diretor Executivo por um Comitê Executivo
                horizontal. Nesse caso, o Comitê foi composto por profissionais
                de trajetórias diversas, internos e externos. Esse grupo assumiu
                o compromisso de enfrentar desafios sistêmicos, reforçando os
                valores de inovação e colaboração que definem o Instituto Beja,
                em conjunto com a Presidente do nosso Conselho de Administração,
                que também tem um assento.
              </p>
              <p>
                O processo contínuo de atualização estratégica foi impulsionado
                pela habilidade que a própria fundadora tem em articular ações
                conjuntas, ampliando o alcance e a influência das iniciativas
                apoiadas. Como resultado, muitos processos foram catalisados e
                os impactos potencializados, acelerando mudanças sistêmicas e
                fortalecendo uma agenda de inovação social relevante.
              </p>
            </NoticeColumn>
          </NoticeContainer>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1000'
            height='250'
            viewBox='0 0 1000 250'
            fill='none'
            className='not-desktop:hidden w-full max-w-250 self-end -translate-x-1/6'
          >
            <path
              d='M914 0V93.4271H1V249H146.185'
              stroke='#1E0301'
              strokeWidth='2'
              ref={svgLineRef}
            />
          </svg>
          <NoticeContainer className='desktop:-mt-12 max-w-250 self-end'>
            <NoticeColumn>
              <p>
                Além dessa mudança estrutural, outro avanço fundamental foi o
                aprofundamento da abordagem de policapital de todo o Comitê
                Executivo e da própria equipe. Composto por diferentes formas de
                capital - financeiro, social, intelectual, empresarial e
                político - o policapital pode ser provocado mediante o uso da
                empatia e da escuta, que são outros dois valores vitais do Beja,
                para fortalecer a sustentabilidade e autonomia das iniciativas
                apoiadas. Entender profundamente as demandas dos parceiros é um
                dos nossos principais mecanismos de financiamento e, com isso,
                podemos aplicar os variados recursos da melhor forma.
              </p>
              <p>
                Com base nessas experiências e aprendizados, o Beja estruturou
                sua atuação em três pilares estratégicos interligados, que
                operaram de maneira sinérgica, permitindo que o conhecimento
                gerado, as articulações realizadas e as vivências práticas se
                retroalimentassem. Esta abordagem integrada fortaleceu o
                aprendizado contínuo e aprofundou o impacto das ações,
                consolidando ainda mais a atuação do Instituto.
              </p>
              <p>
                O desenvolvimento institucional também se refletiu no
                estabelecimento de novas parcerias e na expansão das conexões
                com o Sul Global, fundamentadas em confiança, compromisso e
                colaboração.
              </p>
            </NoticeColumn>
            <NoticeColumn>
              <p>
                Essa rede fortalece iniciativas duradouras, promovendo um ciclo
                contínuo de trocas de experiências, essenciais para sustentar o
                crescimento e a relevância do Beja no cenário filantrópico.
              </p>
              <p>
                Como reflexo dessa evolução, nosso manifesto, agora consolidado
                e exposto na entrada da Casa Beja, em São Paulo, expressa os
                objetivos do Instituto e convida à reimaginação da filantropia,
                promovendo as mudanças que desejamos ver no mundo, começando por
                nós mesmos. Na cadência dessa reimaginação, desenvolvemos uma
                nova identidade visual, que simboliza o engajamento da sociedade
                civil, do setor privado e do governo, além do desejo de
                movimento constante, dinâmico e atento às transformações do
                campo social.
              </p>
              <p>
                A nova configuração do Beja demonstrou a evolução natural de uma
                organização jovem, mas já reconhecida por sua capacidade de
                impulsionar transformações significativas. Com apenas três anos
                de existência, o Beja é reconhecido por sua posição como
                articulador e catalisador de mudanças, aprofundando diálogos e
                parcerias estratégicas com atores do ecossistema filantrópico.
              </p>
              <p>
                <strong>
                  O que permanece inalterado é o propósito essencial que deu
                  origem ao Beja: contribuir para uma sociedade mais justa e
                  equitativa, por meio do uso estratégico e eficiente de
                  recursos filantrópicos, visando sempre seu efeito
                  multiplicador.
                </strong>{" "}
                Esse compromisso segue orientando cada passo, agora fortalecido
                por uma estrutura mais robusta e uma visão ainda mais clara
                sobre como gerar impacto sistêmico.
              </p>
              <p>
                Convidamos você a explorar este solo fértil, repleto de ideias e
                estratégias renovadas. Esperamos que esta leitura te inspire a
                respirar novos ares.
              </p>
            </NoticeColumn>
          </NoticeContainer>
        </div>
      </div>
    </>
  );
}

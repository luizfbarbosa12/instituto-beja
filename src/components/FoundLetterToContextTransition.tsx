import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { NoticeContainer } from "./ui/NoticeContainer";
import { NoticeColumn } from "./ui/NoticeColumn";

export function FoundLetterToContextTransition() {
  const conector_de_textos = "/assets/conector-de-textos.svg";

  gsap.registerPlugin(useGSAP);
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to(".ball", {
        transformOrigin: "center top",
        scale: 2,
        scrollTrigger: {
          trigger: ".ball",
          start: "top 50%",
          end: "top 0%",
          scrub: 1,
        },
      });

      gsap.to(".seeding", {
        y: -10,
        scrollTrigger: {
          trigger: ".vent-container",
          start: "50% 80%",
          end: "top 50%",
          scrub: 4,
        },
      });
    },
    { scope: container },
  );

  return (
    <>
      <div className='bg-retro-ochre pb-58 flex-1 editorial text-6xl flex items-start pt-30 justify-start text-left relative'>
        <p className='max-w-[1084px] ml-50 flex flex-col gap-8 text-porcelain'>
          <span>Neste relatório anual,</span>
          <span>convidamos você a explorar</span>
          <span>as ações do Instituto Beja em 2024.</span>
        </p>
      </div>
      <div
        className='flex flex-col overflow-hidden relative bg-retro-ochre'
        ref={container}
      >
        <div className='ball rounded-t-[100vw] absolute w-full h-full bg-porcelain overflow-hidden' />

        <div className='vent-container min-h-screen z-1 relative mt-180 overflow-hidden flex flex-col mx-25'>
          <h1 className='editorial text-6xl pb-14 self-start'>Contexto</h1>
          <h2 className='text-4xl text-rose editorial flex self-end flex-col max-w-250 ml-55 pb-22.5'>
            Este documento sintetiza as investigações, interações, descobertas e
            reflexões coletivas ao longo dos três anos que nos inspiram
            diariamente a desafiar modelos ultrapassados para a prática de uma
            filantropia que gostamos de denominar como “oxigenada”.
          </h2>
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
          <img
            src={conector_de_textos}
            alt='linha conectando dois textos diferentes'
            className='not-desktop:hidden w-full max-w-250 self-end -translate-x-1/6'
          />
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
            </NoticeColumn>
            <NoticeColumn>
              <p>
                O desenvolvimento institucional também se refletiu no
                estabelecimento de novas parcerias e na expansão das conexões
                com o Sul Global, fundamentadas em confiança, compromisso e
                colaboração.
              </p>
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
                </strong>
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

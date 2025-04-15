import Wrapper from "../Wrapper";
import TextBlock from "../TextBlock";
import * as Icon from "@phosphor-icons/react";
import PhilanthropyCard from "./PhilanthropyCard";
import ImageSlider from "../../components/ImageSlider";
import Filantropando2 from "/public/assets/Filantropando2.png";
import Banner from "/public/assets/FilantropandoSectionBanner.png";
import FilantropandoCCF from "/public/assets/FilantropandoCCF.png";
import FilantropandoStar from "/public/assets/FilantropandoStar.png";
import FilantropiaSlider1 from "/public/assets/FilantropiaSlider1.png";
import FilantropiaSlider2 from "/public/assets/FilantropiaSlider2.png";
import FilantropiaSlider3 from "/public/assets/FilantropiaSlider3.png";
import BubblesFilantropando from "/public/assets/BubblesFilantropando.png";

const PhilanthropySection = () => {
  return (
    <div className='flex flex-col h-fit gap-26 bg-light-peach'>
      <img src={Banner} alt='Falando sobre filantropia' className='w-full' />

      <Wrapper>
        <div className='flex flex-col gap-15 pb-26'>
          <h1 className='text-8xl editorial'>Filantropando</h1>

          <TextBlock
            firstBlock={[
              {
                key: "first-0",
                content: (
                  <>
                    <p>
                      O <strong>Instituto Beja</strong> deu início, em 2022, ao
                      movimento <strong>Filantropando</strong> com o objetivo de
                      criar espaços de diálogos concretos sobre as
                      transformações necessárias para impulsionar a filantropia
                      brasileira. Fundamentado na revitalização do ecossistema e
                      na introdução de novas ideias e práticas, o movimento
                      busca estimular a troca e expansão de perspectivas.
                    </p>
                  </>
                ),
              },
            ]}
            secondBlock={[
              {
                key: "second-0",
                content: (
                  <>
                    <p>
                      Em 2024, a 3ª edição do <strong>Filantropando</strong>{" "}
                      teve como tema central <strong>Imaginar Futuros</strong>,
                      com curadoria do <strong>Instituto Toriba</strong> e
                      direção de arte de <strong>Batman Zavareze</strong> e
                      equipe. O evento reuniu cerca de 200 convidados. A edição
                      ressaltou a importância de ressignificar a filantropia ao
                      questionar mimport ImageSlider from './../ImageSlider';
                      odelos tradicionais e estimular o desaprender das práticas
                      convencionais, por meio de um enfoque na colaboração e
                      cocriação.
                    </p>

                    <p>
                      A necessidade de imaginar e construir futuros mais
                      disruptivos, que abracem riscos, experimentem novas
                      abordagens, desafiem referências e rompam paradigmas
                      tornou-se uma prioridade emergente no mundo.
                    </p>
                  </>
                ),
              },
            ]}
          />
        </div>
      </Wrapper>

      <div className='flex items-center relative gap-15 flex-col bg-gold-ember w-full'>
        <div className='w-full'>
          <img
            src={BubblesFilantropando}
            alt='Bolinhas'
            className='relative top-0 left-1/3'
          />
        </div>
        <Wrapper>
          <div className='flex justify-between gap-50 items-center w-full'>
            <div className='flex flex-col gap-10 [&>p]:text-5xl [&>p]:leading-14'>
              <p className='editorial'>
                É hora de abrir espaço para novas agendas.
              </p>
              <p className='editorial'>
                É hora de desconstruir, reaprender e cocriar.
              </p>
              <p className='editorial'>
                É hora de oxigenar o ecossistema da filantropia.
              </p>
            </div>

            <div className='flex flex-col items-center'>
              <img
                src={FilantropandoCCF}
                alt='Conectando compromisso e futuro'
                className='shrink-0 min-w-142'
              />
              <img
                src={Filantropando2}
                alt='Filantropando boas ações'
                className='max-w-90'
              />
            </div>
          </div>
        </Wrapper>

        <div className='flex items-center relative pb-10 w-full justify-start'>
          <img
            src={BubblesFilantropando}
            alt='Bolinhas'
            className='relative top-0 -left-40 rotate-240'
          />
          <img src={FilantropandoStar} alt='Estrela' className='size-25' />
        </div>
      </div>

      <Wrapper>
        <div className='flex flex-col gap-30'>
          <p className='editorial text-3xl'>
            A 3ª edição foi organizada em torno de dois eixos principais:
          </p>

          <div className='flex flex-col'>
            <h2 className='editorial text-5xl'>Eixo 1</h2>
            <div
              className='w-70 h-7'
              style={{ backgroundImage: "url('/public/assets/GoldenBG.png')" }}
            ></div>
          </div>

          <div className='flex justify-end w-full'>
            <div className='flex flex-col gap-25 w-[62rem]'>
              <div className='flex flex-col gap-12'>
                <h1 className='editorial text-4xl'>
                  A filantropia e os futuros possíveis, futuros emergentes,
                  futuros ancestrais
                </h1>

                <p className='editorial text-2xl'>
                  Como eu não pensei nisso antes? O que mais é preciso
                  apreender?
                </p>
              </div>

              <div className='flex gap-12'>
                <div className='flex flex-col gap-10'>
                  <PhilanthropyCard
                    title={"Painel 1"}
                    subtitle={"Filantropia e Futuros Ancestrais"}
                    bgColor={"bg-gold-ember"}
                    starColor={"[#E57435]"}
                    text={
                      <p>
                        Com <strong>Josimara Baré</strong> em diálogo com{" "}
                        <strong>Geci Karuri-Sebina</strong>, mediado por{" "}
                        <strong>Paula Miraglia</strong>
                      </p>
                    }
                  />

                  <PhilanthropyCard
                    title={"Painel 2"}
                    subtitle={"Infraestruturas de Imaginação"}
                    bgColor={"bg-[#E57435]"}
                    starColor={"gold-ember"}
                    text={
                      <p>
                        Com <strong>Yoanna Okwesa</strong> em diálogo com{" "}
                        <strong>Ondřej Liska</strong>, mediado por{" "}
                        <strong>Paula Miraglia</strong>
                      </p>
                    }
                  />
                </div>

                <div>
                  <TextBlock
                    firstBlock={[
                      {
                        key: "first-0",
                        content: (
                          <>
                            <p>
                              O olhar para o futuro, já presente nas práticas
                              ancestrais, nos convida a abraçar mudanças
                              significativas e adotar valores que refletem uma
                              compreensão mais diversa e abrangente das
                              necessidades da sociedade. Este eixo desafia a
                              perpetuação de narrativas dominantes, instigando a
                              criação de uma multiplicidade de perspectivas que
                              reimagina a história como nossa história.
                            </p>
                            <p>
                              Esse movimento destaca temas frequentemente
                              invisibilizados, que demandam maior atenção e
                              aprofundamento, e propõe uma descentralização da
                              tomada de decisão. Ao sair de uma perspectiva
                              individual para uma visão compartilhada de
                              responsabilidades, somos convidados a acolher o
                              desconforto que acompanha as mudanças coletivas.
                              Isso exige: compreender as dinâmicas de poder que
                              moldam as relações sociais e econômicas; coragem
                              para assumir riscos; romper paradigmas e expandir
                              referências e construção de uma representatividade
                              mais equitativa.
                            </p>
                          </>
                        ),
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col'>
            <h2 className='editorial text-5xl'>Eixo 2</h2>
            <div
              className='w-70 h-7'
              style={{ backgroundImage: "url('/public/assets/GoldenBG.png')" }}
            ></div>
          </div>

          <div className='flex justify-end w-full'>
            <div className='flex flex-col gap-25 w-[62rem]'>
              <div className='flex flex-col gap-12'>
                <h1 className='editorial text-4xl'>
                  Tecnologia para Transformar
                </h1>

                <p className='editorial text-2xl'>
                  Tecnologia a serviço de quem?
                </p>
              </div>

              <div className='flex gap-12'>
                <div className='flex flex-col gap-10'>
                  <PhilanthropyCard
                    title={"Painel 3"}
                    subtitle={"Filantropia no mundo da Inteligência Artificial"}
                    bgColor={"bg-gold-ember"}
                    starColor={"[#E57435]"}
                    text={
                      <p>
                        Com <strong>Sanjay Purohit</strong> em diálogo com
                        <strong>Nishant Shah</strong> e{" "}
                        <strong>Nina Santos</strong>, mediado por{" "}
                        <strong>Paula Miraglia</strong>
                      </p>
                    }
                  />
                </div>

                <div>
                  <TextBlock
                    firstBlock={[
                      {
                        key: "first-0",
                        content: (
                          <>
                            <p>
                              As Big Techs têm ditado as regras sobre como
                              articulamos pensamentos e conexões em redes,
                              muitas vezes sob uma perspectiva desumanizadora. A
                              corrida e a disparidade entre diferentes
                              abordagens para regulamentar uma base ética das
                              tecnologias digitais ao redor do mundo expõem
                              disputas de influência, bem como lacunas de
                              representatividade cultural e social. Ademais,
                              perpetuam desigualdades no acesso e na educação
                              digital.
                            </p>

                            <p>
                              A interação da filantropia com ferramentas
                              tecnológicas enfrenta, de forma contundente, os
                              desafios dessa desigualdade. O que um dia chamamos
                              de &quot;futurismo&quot; hoje exige a
                              desconstrução de ideias de um futuro
                              descontextualizado, vazio de pessoas e de suas
                              realidades dinâmicas e diversas.
                            </p>

                            <p>
                              As tecnologias digitais não são neutras. Elas
                              moldam nossa percepção sobre nós mesmos, sobre o
                              mundo e sobre como nos relacionamos com ele.
                              Também transformam dinâmicas de poder,
                              subjetividades e experiências humanas,
                              especialmente em contextos de governança, direitos
                              humanos e políticas de gênero. Se ainda debatemos
                              a falta de uma crítica sólida ao status quo que
                              homogeniza países e culturas do ponto de vista de
                              organizações do Norte Global, surge a questão:{" "}
                              <strong>
                                como podemos simplificar e reumanizar a
                                tecnologia e a inovação, com mudanças
                                exponenciais?
                              </strong>
                            </p>
                          </>
                        ),
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

      <div className='flex relative flex-col w-full py-95  items-center bg-gold-ember overflow-y-hidden'>
        <img
          src={BubblesFilantropando}
          className='absolute -top-20 -left-30 rotate-360'
        />

        <div className='flex flex-col gap-26'>
          <ImageSlider
            arr={[FilantropiaSlider1, FilantropiaSlider2, FilantropiaSlider3]}
            translateYMiddleImg={"80"}
            ImgWidth={"35rem"}
            ImgHeight={"23rem"}
            ButtonStyle={"bg-aged-oak text-gold-ember"}
          />

          <Wrapper>
            <div>
              <h1 className='editorial text-3xl'>
                Conheça a relatoria completa do Filantropia 2024
              </h1>

              <div className='flex items-center gap-2'>
                <a className='font-bold'>Assistia aqui</a>
                <div
                  className={`size-4 flex-center bg-aged-oak p-0.5 rounded-full`}
                >
                  <Icon.ArrowRight className={`text-gold-ember rotate-335`} />
                </div>
              </div>
            </div>
          </Wrapper>
        </div>

        <img
          src={BubblesFilantropando}
          className='absolute -bottom-20 right-0 rotate-180'
        />
      </div>
    </div>
  );
};

export default PhilanthropySection;

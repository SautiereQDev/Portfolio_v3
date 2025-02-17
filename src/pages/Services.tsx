import banner from "../assets/images/services_banner.webp";
import serviceDetails from "../data/servicesDetails.json";
import ServiceDescriptionItem from "../components/items/ServiceDescriptionItem.tsx";
import { Link } from "@tanstack/react-router";
import rocket from "../assets/icons/rocket.svg";
import check from "../assets/icons/check.svg";
import fileCode from "../assets/icons/file-code.svg";

export const Service = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden font-[Manrope]">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:px-4 @[480px]:py-3">
                <img
                  className="object-cover mx-auto max-w-md w-full"
                  src={banner}
                  alt="header banner"
                />
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#111418] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Développement Web
              </p>
            </div>
            <p className="text-[#111418] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Je suis spécialisé dans le développement Web full-stack, qui
              comprend à la fois le travail front-end et back-end. Je peux vous
              aider avec tout, des simples pages de destination aux applications
              Web complexes. Que vous ayez besoin d&#39;un nouveau site Web,
              d&#39;une refonte ou d&#39;une nouvelle fonctionnalité ajoutée à
              un site existant, je peux vous aider à donner vie à votre vision.
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(228px,1fr))] gap-2.5 px-4 py-3 @3xl:grid-cols-4">
              <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#dce0e5] bg-white p-6">
                <div className="flex flex-col gap-1">
                  <h1 className="text-[#111418] text-base font-bold leading-tight">
                    Site Simple
                  </h1>
                  <p className="flex items-baseline gap-1 text-[#111418]">
                    <span className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em]">
                      1 000€
                    </span>
                    <span className="text-[#111418] text-base font-bold leading-tight">
                      /site
                    </span>
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  {serviceDetails.simple.map((description) => (
                    <ServiceDescriptionItem
                      key={description}
                      description={description}
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4 rounded-xl border border-solid border-[#dce0e5] bg-white p-6">
                <div className="flex flex-col gap-1">
                  <h1 className="text-[#111418] text-base font-bold leading-tight">
                    Site Complex
                  </h1>
                  <p className="flex items-baseline gap-1 text-[#111418]">
                    <span className="text-[#111418] text-4xl font-black leading-tight tracking-[-0.033em]">
                      + 2 000€
                    </span>
                    <span className="text-[#111418] text-base font-bold leading-tight">
                      /site
                    </span>
                  </p>
                </div>
                {serviceDetails.complex.map((description) => (
                  <ServiceDescriptionItem
                    key={description}
                    description={description}
                  />
                ))}
                <div className="flex flex-col gap-2"></div>
              </div>
            </div>
            <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Comment ça marche
            </h3>
            <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
              <div className="flex flex-col items-center gap-1 pt-4">
                <div
                  className="text-[#111418]"
                  data-icon="Calendar"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path>
                  </svg>
                </div>
                <div className="w-[1.5px] bg-[#dce0e5] h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Consultation initiale
                </p>
                <p className="text-[#637588] text-base font-normal leading-normal">
                  30 minutes
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-[1.5px] bg-[#dce0e5] h-2"></div>
                <div
                  className="text-[#111418]"
                  data-icon="FileDoc"
                  data-size="24px"
                  data-weight="regular"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path d="M52,144H36a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8H52a36,36,0,0,0,0-72Zm0,56H44V160h8a20,20,0,0,1,0,40Zm169.53-4.91a8,8,0,0,1,.25,11.31A30.06,30.06,0,0,1,200,216c-17.65,0-32-16.15-32-36s14.35-36,32-36a30.06,30.06,0,0,1,21.78,9.6,8,8,0,0,1-11.56,11.06A14.24,14.24,0,0,0,200,160c-8.82,0-16,9-16,20s7.18,20,16,20a14.24,14.24,0,0,0,10.22-4.66A8,8,0,0,1,221.53,195.09ZM128,144c-17.65,0-32,16.15-32,36s14.35,36,32,36,32-16.15,32-36S145.65,144,128,144Zm0,56c-8.82,0-16-9-16-20s7.18-20,16-20,16,9,16,20S136.82,200,128,200ZM48,120a8,8,0,0,0,8-8V40h88V88a8,8,0,0,0,8,8h48v16a8,8,0,0,0,16,0V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72A8,8,0,0,0,48,120ZM160,51.31,188.69,80H160Z"></path>
                  </svg>
                </div>
                <div className="w-[1.5px] bg-[#dce0e5] h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Proposition du projet
                </p>
                <p className="text-[#637588] text-base font-normal leading-normal">
                  1 à 2 semaines
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-[1.5px] bg-[#dce0e5] h-2"></div>
                <div
                  className="text-[#111418]"
                  data-icon="FileCode"
                  data-size="24px"
                  data-weight="regular"
                >
                  <img
                    src={fileCode}
                    alt="fileCode icon"
                    height={24}
                    width={24}
                  />
                </div>
                <div className="w-[1.5px] bg-[#dce0e5] h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Développement
                </p>
                <p className="text-[#637588] text-base font-normal leading-normal">
                  Varie en fonction de la complexité du project
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-[1.5px] bg-[#dce0e5] h-2"></div>
                <div
                  className="text-[#111418]"
                  data-icon="Check"
                  data-size="24px"
                  data-weight="regular"
                >
                  <img src={check} alt="check icon" />
                </div>
                <div className="w-[1.5px] bg-[#dce0e5] h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Revision finale
                </p>
                <p className="text-[#637588] text-base font-normal leading-normal">
                  1 semaine
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-[1.5px] bg-[#dce0e5] h-2"></div>
                <div
                  className="text-[#111418]"
                  data-icon="Rocket"
                  data-size="24px"
                  data-weight="regular"
                >
                  <img src={rocket} alt="rocket icon" height={24} width={24} />
                </div>
              </div>
              <div className="flex flex-1 flex-col py-3">
                <p className="text-[#111418] text-base font-medium leading-normal">
                  Lancement du site
                </p>
              </div>
            </div>
            <h3 className="text-[#111418] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Additional information
            </h3>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div
                className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12"
                data-icon="Wrench"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96,72.34,72.34,0,0,0,94,124.94L33.79,177c-.15.12-.29.26-.43.39a32,32,0,0,0,45.26,45.26c.13-.13.27-.28.39-.42L131.06,162A72,72,0,0,0,232,96,71.56,71.56,0,0,0,226.76,69ZM160,152a56.14,56.14,0,0,1-27.07-7,8,8,0,0,0-9.92,1.77L67.11,211.51a16,16,0,0,1-22.62-22.62L109.18,133a8,8,0,0,0,1.77-9.93,56,56,0,0,1,58.36-82.31l-31.2,33.81a8,8,0,0,0-1.94,7.1L141.83,108a8,8,0,0,0,6.14,6.14l26.35,5.66a8,8,0,0,0,7.1-1.94l33.81-31.2A56.06,56.06,0,0,1,160,152Z"></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">
                  Maintenance &amp; support
                </p>
                <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">
                  J&#39;assure la maintenance et le support de votre site 1 an
                  après la livraison, le service est renouvelable.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div
                className="text-[#111418] flex items-center justify-center rounded-lg bg-[#f0f2f4] shrink-0 size-12"
                data-icon="MagnifyingGlass"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111418] text-base font-medium leading-normal line-clamp-1">
                  Consulting
                </p>
                <p className="text-[#637588] text-sm font-normal leading-normal line-clamp-2">
                  Si vous n&#39;êtes pas sûr du type de site dont vous avez
                  besoin, je peux également vous aider à le déterminer.
                </p>
              </div>
            </div>
            <div className="flex px-4 py-3 justify-end">
              <Link
                to="/contact"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Commencer</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

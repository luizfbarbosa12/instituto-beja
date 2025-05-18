import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function VisitInstitutoBejaLink() {
  const { t } = useTranslation();
  return (
    <a
      href="https://www.institutobeja.org"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 flex items-center gap-2 px-0 py-0 group w-fit"
      style={{ textDecoration: "none" }}
    >
      <span className="h-8 w-8 flex items-center justify-center">
        <Globe className="size-7 tablet:size-8 text-rose group-hover:text-gold transition-colors duration-200" strokeWidth={2.1} />
      </span>
      <span className="text-base leading-[100%] text-rose font-bold whitespace-nowrap">
        {t("firstSection.visitInstituto")}
      </span>
    </a>
  );
}

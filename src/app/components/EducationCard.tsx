'use client';

import Image from 'next/image';
import { Award } from 'lucide-react';

export interface EducationItem {
  type: string;
  course: string;
  institution: string;
  status: 'Cursando' | 'Completo';
  certificateImgUrl?: string;
}

interface EducationCardProps {
  item: EducationItem;
  onCertificateClick: (imgUrl: string) => void;
}

export const EducationCard = ({
  item,
  onCertificateClick,
}: EducationCardProps) => {
  return (
    <div className="flex w-full flex-col justify-between gap-4 rounded-2xl bg-c1 p-6 transition-transform duration-300 hover:-translate-y-1 lg:p-8 md:min-h-[190px]">
      <div className="flex w-full items-start justify-between gap-4">
        <div>
          <p className="font-poppins text-lg font-semibold text-w sm:text-xl">
            {item.course}
          </p>
          <p className="font-openSans text-c3">{item.institution}</p>
        </div>
        <span className="inline-flex flex-shrink-0 items-center gap-2 rounded-xl text-xs font-poppins text-c3 sm:text-sm">
          <Image
            src={
              item.status === 'Cursando'
                ? '/assets/svg/dotCursando.svg'
                : '/assets/svg/dotCompleto.svg'
            }
            alt=""
            width={16}
            height={16}
            aria-hidden="true"
            className="h-3 w-3 flex-shrink-0 sm:h-6 sm:w-6"
          />
        </span>
      </div>

      <div className="mt-auto pt-4">
        {item.certificateImgUrl && (
          <button
            onClick={() => onCertificateClick(item.certificateImgUrl!)}
            className="cursor-pointer flex items-center gap-2 rounded-lg bg-b px-4 py-2 text-sm font-semibold font-poppins text-w transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <Award size={18} className="text-amber-400" />
            Ver Certificado
          </button>
        )}
      </div>
    </div>
  );
};

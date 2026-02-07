import React from "react";
import { useLanguage } from '../../i18n/LanguageProvider';

export default function Experience() {
    const { t } = useLanguage();
    return (
        
<div id="experience">
<h2 className="text-heading-2 mb-3">{t('experience_title')}</h2>

      <div className="bg-white p-4 rounded-lg shadow-md">

        <h3 className="text-heading-3 mb-3">{t('experience_role')}</h3>
        <p className="text-body-small text-gray-500 mb-3">Inspiranza · Voluntaria · {t('experience_period')} · Remoto</p>

        <ul className="list-disc pl-4 space-y-1 text-body-small">
          <li>{t('experience_bullet_1')}</li>
          <li>{t('experience_bullet_2')}</li>
          <li>{t('experience_bullet_3')}</li>
        </ul>
      </div>
      </div>
    );
  }

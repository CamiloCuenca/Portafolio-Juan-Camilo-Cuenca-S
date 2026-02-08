import React from "react";
import { useLanguage } from '../../i18n/LanguageProvider';

export default function Education() {
    const { t } = useLanguage();
    return (
        <div id="education">
                    <h2 className="text-heading-2 mb-3">{t('education_title')}</h2>

      <div className="p-4 bg-white rounded-lg shadow-md">
 
        <div className="mb-3">
          <h3 className="text-heading-4">{t('degree_engineering')}</h3>
          <p className="text-gray-600">Universidad del Quindío | 2021 - En curso</p>
        </div>
  

      </div>


          <div className="p-4 bg-white rounded-lg shadow-md  mt-5">
            <div>
              <h3 className="text-heading-4">{t('degree_mobile_diploma')}</h3>
              <p className="text-gray-600">Universidad Tecnológica de Pereira - MinTic | 2021</p>
              <p className="text-gray-500">{t('hours')}</p>
            </div>
          </div>
      </div>
    );
  }

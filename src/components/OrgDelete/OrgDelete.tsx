import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../../style/app.module.css';
/**
 * Component for displaying organization deletion message
 *
 * This component renders a message related to deleting an organization.
 *
 * @returns JSX.Element representing the organization deletion message
 */
function orgDelete(): JSX.Element {
  const { t } = useTranslation('translation', {
    keyPrefix: 'orgDelete',
  });

  return (
    <>
      {/* Container for the organization deletion message */}
      <div id="OrgDelete" className={`${styles['search-OrgDelete']}`}>
        {t('deleteOrg')}
      </div>
    </>
  );
}
export default orgDelete;

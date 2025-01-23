import React, { type FC } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import styles from '../../../../src/style/app.module.css';
import OrgProfileFieldSettings from './OrgProfileFieldSettings/OrgProfileFieldSettings';
import ChangeLanguageDropDown from 'components/ChangeLanguageDropdown/ChangeLanguageDropDown';
import DeleteOrg from './DeleteOrg/DeleteOrg';
import OrgUpdate from './OrgUpdate/OrgUpdate';
import { useTranslation } from 'react-i18next';

/**
 * Props for the `GeneralSettings` component.
 */
interface InterfaceGeneralSettingsProps {
  orgId: string;
}

/**
 * A component for displaying general settings for an organization.
 *
 * @param props - The properties passed to the component.
 * @returns The `GeneralSettings` component.
 */
const GeneralSettings: FC<InterfaceGeneralSettingsProps> = ({ orgId }) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'orgSettings',
  });

  return (
    <Row className={`${styles.settingsBody} ${styles.row} mt-3`}>
      <Col className={`${styles.rowChild}`} lg={7}>
        <Card
          className={`${styles['rounded-4']} ${styles['mb-4']} ${styles['mx-auto']} ${styles['shadow-sm']} ${styles['border']} ${styles['border-light-subtle']}`}
        >
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>{t('updateOrganization')}</div>
          </div>
          <Card.Body className={styles.cardBody}>
            {/* Render organization update component */}
            <OrgUpdate orgId={orgId} />
          </Card.Body>
        </Card>
      </Col>
      <Col className={`${styles.rowChild}`} lg={5}>
        <DeleteOrg />
        <Card
          className={`${styles['rounded-4']} ${styles['mb-4']} ${styles['mx-auto']} ${styles['shadow-sm']} ${styles['border']} ${styles['border-light-subtle']}`}
        >
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>{t('otherSettings')}</div>
          </div>
          <Card.Body className={styles.cardBody}>
            <div className={styles.textBox}>
              <Form.Label className={'text-secondary fw-bold'}>
                {t('changeLanguage')}
              </Form.Label>
              {/* Render language change dropdown component */}
              <ChangeLanguageDropDown />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col className={`${styles.rowChild}`} lg={7}>
        <Card
          className={`${styles['rounded-4']} ${styles['mb-4']} ${styles['mx-auto']} ${styles['shadow-sm']} ${styles['border']} ${styles['border-light-subtle']}`}
        >
          <div className={styles.cardHeader}>
            <div className={styles.cardTitle}>{t('manageCustomFields')}</div>
          </div>
          <Card.Body className={styles.cardBody}>
            {/* Render organization profile field settings component */}
            <OrgProfileFieldSettings />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default GeneralSettings;

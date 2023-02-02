import React from 'react';
import AppConfig from '../../Configs';
import { ApplicationLayoutType } from './Types.d';
import Header from '../../Components/Header';
import '../../Assets/App.scss';

const ApplicationLayout = ({ children }: ApplicationLayoutType) => {
  const {
    global: { applicationName },
  } = AppConfig;

  return (
    <>
      <Header
        applicationName={applicationName}
      />
      <div className="app-content">{children}</div>
    </>
  );
};

export default ApplicationLayout;

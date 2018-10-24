import React from 'react';
const BreadCrumb = ({
}) => {
  return (
    <div className="page-header">
      <h3 className="page-title">
        <span className="page-title-icon bg-gradient-primary text-white mr-2">
          <i className="mdi mdi-home" />
        </span>
        Codemi Home
      </h3>
      <nav aria-label="breadcrumb">
        <ul className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            <span />Overview{' '}
            <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default BreadCrumb;

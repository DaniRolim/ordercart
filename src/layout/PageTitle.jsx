import React from 'react';

const PageTitle = ({data}) => {
    return <div className="page-title">{data || 'Produto'}</div>
    
    ;
};

export default PageTitle;